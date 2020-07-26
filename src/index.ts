import proto, { messages } from './messages';
import { connect, Payload, Msg, Client} from 'ts-nats';

import createEntry from './op/createEntry';
import getEntry from './op/getEntry';
import listEntries, { FIRST_DEFAULT as ListEntriesFirstDefault } from './op/listEntries';
import deleteEntry from './op/deleteEntry';
import updateEntry from './op/updateEntry';
import checkStatus from './op/checkStatus';
import dropEntries from './op/dropEntries';
import getEntriesPageInfo from './op/getEntriesPageInfo';
import bootstrapDatabase from './db/bootstrapDatabase';
import { dateToProtobufTimestamp, protobufTimestampToDate } from './util/timeUtils';

require('dotenv').config();

const dbConnectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

function handleError(nc: Client, message: Msg, error: Error, response: any) {
  console.log(error);

  if (message.reply) {
    nc.publish(message.reply, response);
  }
}

function logMessage(topic: string, message?: Msg) {
  console.log(`${new Date().toISOString()} received ${topic}`, message);
}

const natsHosts = [<string>process.env.NATS_HOST];

async function bootstrap() {
  const nc = await connect({
    servers: natsHosts,
    payload: Payload.BINARY
  });

  const db = await bootstrapDatabase({ connectionString: dbConnectionString });
  setInterval(() => {

    checkStatus({ nc, db })
      .catch(status => {
        console.log(status);
      });
  }, 5000);

  nc.subscribe('get.entry', async (error, message) => {
    logMessage(message.subject);

    // TODO: Do authorization or other business logic here before delegating to the store

    const replyMessage = await nc.request('store.get.entry', 3000, message.data);

    if (message.reply) {
      nc.publish(message.reply, replyMessage.data);
    }
  });

  nc.subscribe('create.entry', async (error, message) => {
    logMessage(message.subject);
    const replyMessage = await nc.request('store.create.entry', 3000, message.data);

    if (message.reply) {
      nc.publish(message.reply, replyMessage.data);
    }
  });

  nc.subscribe('update.entry', async (error, message) => {
    logMessage(message.subject);
    const replyMessage = await nc.request('store.update.entry', 3000, message.data);

    if (message.reply) {
      nc.publish(message.reply, replyMessage.data);
    }
  });

  nc.subscribe('list.entry', async (error, message) => {
    logMessage(message.subject);
    const replyMessage = await nc.request('store.list.entry', 3000, message.data);

    if (message.reply) {
      nc.publish(message.reply, replyMessage.data);
    }
  });

  nc.subscribe('store.get.entry', async (error, message) => {
    logMessage(message.subject);
    if (error) {
      const response = messages.entry.GetEntryResponse.encode({
        error: {
          code: messages.entry.Error.Code.UNKNOWN,
          message: 'oops'
        }
      }).finish();
      return handleError(nc, message, error, response);
    }

    const { payload, context } = messages.entry.GetEntryRequest.decode(message.data);
    const id = payload?.id;

    if (!id) {
      const response = messages.entry.GetEntryResponse.encode({
        error: {
          code: messages.entry.Error.Code.VALIDATION_FAILED,
          message: 'oops',
        }
      }).finish();
      return handleError(nc, message, new Error(String(messages.entry.Error.Code.VALIDATION_FAILED)), response);
    }

    try {
      const entry = await getEntry(db, { id });

      if (message.reply) {
        if (!entry) {
          const response = messages.entry.GetEntryResponse.encode({
            error: {
              code: messages.entry.Error.Code.NOT_FOUND,
              message: 'oops',
            },
            traceId: context?.traceId
          }).finish();
          return handleError(nc, message, new Error(String(messages.entry.Error.Code.NOT_FOUND)), response);
        }

        const createdAt = dateToProtobufTimestamp(entry.createdAt);
        const updatedAt = dateToProtobufTimestamp(entry.updatedAt);

        const response = messages.entry.GetEntryResponse.encode({
          payload: {
            ...entry,
            createdAt,
            updatedAt,
          },
          traceId: context?.traceId
        }).finish();
        nc.publish(message.reply, response);
      }
    } catch (error) {
      const response = messages.entry.GetEntryResponse.encode({
        error: {
          code: messages.entry.Error.Code.UNKNOWN,
          message: 'oops',
        },
        traceId: context?.traceId
      }).finish();
      return handleError(nc, message, error, response);
    }
  });

  nc.subscribe('store.create.entry', async (error, message) => {
    logMessage(message.subject);
    if (error) {
      const response = messages.entry.CreateEntryResponse.encode({
        error: {
          code: messages.entry.Error.Code.UNKNOWN,
          message: 'oops'
        }
      }).finish();
      return handleError(nc, message, error, response);
    }

    const { payload, context } = messages.entry.CreateEntryRequest.decode(message.data);
    const text = payload?.text;
    const createdAt = protobufTimestampToDate(payload?.createdAt);
    const updatedAt = protobufTimestampToDate(payload?.updatedAt);
    const creatorId = payload?.creatorId;

    if (!creatorId) {
      const response = messages.entry.CreateEntryResponse.encode({
        error: {
          code: messages.entry.Error.Code.VALIDATION_FAILED,
          message: 'oops'
        }
      }).finish();
      return handleError(nc, message, new Error(String(messages.entry.Error.Code.VALIDATION_FAILED)), response);
    }

    try {
      const { id } = await createEntry(db, { text: text || '', creatorId, createdAt, updatedAt });

      const entryCreatedMessage = messages.entry.InfoEntryCreated.encode({
        payload: {
          id,
        }
      }).finish();
      nc.publish('info.entry.created', entryCreatedMessage);

      if (message.reply) {
        const response = messages.entry.CreateEntryResponse.encode({
          payload: { id },
          traceId: context?.traceId
        }).finish();
        nc.publish(message.reply, response);
      }
    } catch (error) {
      const response = messages.entry.CreateEntryResponse.encode({
        error: {
          code: messages.entry.Error.Code.UNKNOWN,
          message: 'oops'
        },
        traceId: context?.traceId
      }).finish();
      handleError(nc, message, error, response);
    }
  });

  nc.subscribe('store.update.entry', async (error, message) => {
    logMessage(message.subject);
    if (error) {
      const response = messages.entry.UpdateEntryResponse.encode({
        error: {
          code: messages.entry.Error.Code.UNKNOWN,
          message: 'oops'
        }
      }).finish();
      return handleError(nc, message, error, response);
    }

    const { payload, context } = messages.entry.UpdateEntryRequest.decode(message.data);
    const text = payload?.text;
    const id = payload?.id;

    if (!id) {
      const response = messages.entry.UpdateEntryResponse.encode({
        error: {
          code: messages.entry.Error.Code.VALIDATION_FAILED,
          message: 'oops'
        }
      }).finish();
      return handleError(nc, message, new Error(String(messages.entry.Error.Code.VALIDATION_FAILED)), response);
    }

    try {
      const entry = await updateEntry(db, { id, text });

      const infoEntryUpdatedMessage = messages.entry.InfoEntryUpdated.encode({
        payload: {
          id: entry?.id,
          text: entry?.text,
          creatorId: entry?.creatorId,
          createdAt: entry?.createdAt,
          updatedAt: entry?.updatedAt,
        }
      }).finish();
      nc.publish('info.entry.updated', infoEntryUpdatedMessage);

      if (message.reply) {
        if (!entry) {
          const response = messages.entry.UpdateEntryResponse.encode({
            error: {
              code: messages.entry.Error.Code.NOT_FOUND,
              message: 'oops',
            },
            traceId: context?.traceId
          }).finish();
          return handleError(nc, message, new Error(String(messages.entry.Error.Code.NOT_FOUND)), response);
        }

        const response = messages.entry.UpdateEntryResponse.encode({
          payload: {
            id,
            text: entry.text,
            creatorId: entry.creatorId,
            createdAt: dateToProtobufTimestamp(entry.createdAt),
            updatedAt: dateToProtobufTimestamp(entry.updatedAt),
          },
          traceId: context?.traceId
        }).finish();
        nc.publish(message.reply, response);
      }
    } catch (error) {
      const response = messages.entry.UpdateEntryResponse.encode({
        error: {
          code: messages.entry.Error.Code.UNKNOWN,
          message: 'oops'
        },
        traceId: context?.traceId
      }).finish();
      handleError(nc, message, error, response);
    }
  });

  nc.subscribe('store.list.entry', async (error, message) => {
    logMessage(message.subject);
    if (error) {
      const response = messages.entry.ListEntriesResponse.encode({
        error: {
          code: messages.entry.Error.Code.UNKNOWN
        }
      }).finish();
      return handleError(nc, message, error, response);
    }

    const { context, payload } = messages.entry.ListEntriesRequest.decode(message.data);
    const creatorId = payload?.creatorId;
    const first = payload?.first || ListEntriesFirstDefault; // Intentionally falls through to default if first is 0;
    const after = payload?.after;

    if (!creatorId) {
      const response = messages.entry.ListEntriesResponse.encode({
        error: {
          code: messages.entry.Error.Code.VALIDATION_FAILED,
          message: 'oops',
        }
      }).finish();
      return handleError(nc, message, new Error(String(messages.entry.Error.Code.VALIDATION_FAILED)), response);
    }

    try {
      interface Entry {
       id: string;
       text: string;
       creatorId: string;
       createdAt: Date;
       updatedAt: Date;
      }

      const entries: Entry[] | null = await listEntries(db, { creatorId, first, after });

      if (!entries) {
        const response = messages.entry.ListEntriesResponse.encode({
          error: {
            code: messages.entry.Error.Code.NOT_FOUND,
            message: 'oops',
          },
          traceId: context?.traceId
        }).finish();
        return handleError(nc, message, new Error(String(messages.entry.Error.Code.NOT_FOUND)), response);
      }

      const endId: string = entries[entries.length - 1]?.id;
      const startId = entries[0]?.id;
      const pageInfo = await getEntriesPageInfo(db, { startId, endId, creatorId, first });
      const payload = entries.map(entry => {
        return {
          ...entry,
          createdAt: dateToProtobufTimestamp(entry.createdAt),
          updatedAt: dateToProtobufTimestamp(entry.updatedAt),
        }
      });

      if (message.reply) {
        const response = messages.entry.ListEntriesResponse.encode({
          payload,
          pageInfo: pageInfo,
          traceId: context?.traceId,
        }).finish();
        nc.publish(message.reply, response);
      }
    } catch (error) {
      const response = messages.entry.ListEntriesResponse.encode({
        error: {
          code: messages.entry.Error.Code.UNKNOWN
        },
        traceId: context?.traceId
      }).finish();
      return handleError(nc, message, error, response);
    }
  });

  nc.subscribe('delete.entry', async (error, message) => {
    logMessage(message.subject);
    if (error) {
      const response = messages.entry.DeleteEntryResponse.encode({
        error: {
          code: messages.entry.Error.Code.UNKNOWN,
          message: 'oops'
        }
      }).finish();
      return handleError(nc, message, error, response);
    }

    const { payload, context } = messages.entry.DeleteEntryRequest.decode(message.data);
    const id = payload?.id;

    if (!id) {
      const response = messages.entry.DeleteEntryResponse.encode({
        error: {
          code: messages.entry.Error.Code.VALIDATION_FAILED,
          message: 'oops'
        }
      }).finish();
      return handleError(nc, message, new Error(String(messages.entry.Error.Code.VALIDATION_FAILED)), response);
    }

    try {
      await deleteEntry(db, { id });

      const infoEntryDeletedMessage = messages.entry.InfoEntryDeleted.encode({
        payload: {
          id,
        }
      }).finish();
      nc.publish('info.entry.deleted', infoEntryDeletedMessage);

      if (message.reply) {
        const response = messages.entry.DeleteEntryResponse.encode({}).finish();
        nc.publish(message.reply, response);
      }
    } catch (error) {
      const response = messages.entry.DeleteEntryResponse.encode({
        error: {
          code: messages.entry.Error.Code.UNKNOWN,
          message: 'oops'
        },
        traceId: context?.traceId
      }).finish();
      handleError(nc, message, error, response);
    }
  });

  if (process.env.NODE_ENV === 'test') {
    nc.subscribe('entry.store.drop', async (error, message) => {
      logMessage(message.subject);

      await dropEntries(db);

      if (message.reply) {
        nc.publish(message.reply);
      }
    });
  }
}

bootstrap()
  .then(() => console.log('Entry service Bootstrapped 🚀'))
  .catch(error => {
    console.log(error)
    process.exit(1);
  });
