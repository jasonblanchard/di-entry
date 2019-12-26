import { messages } from './messages';
import { connect, Payload, Msg, Client} from 'ts-nats';

import createEntry from './op/createEntry';
import getEntry from './op/getEntry';
import checkStatus from './op/checkStatus';
import bootstrapDatabase from './db/bootstrapDatabase';

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
    checkStatus({ nc })
      .catch(status => {
        console.log(status);
      });
  }, 5000);

  nc.subscribe('get.entry', async (error, message) => {
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

    const { id, creatorId, traceId } = messages.entry.GetEntryRequest.decode(message.data);

    try {
      const entry = await getEntry(db, { id, creatorId });

      if (message.reply) {
        const response = messages.entry.GetEntryResponse.encode({
          payload: entry,
          traceId
        }).finish();
        nc.publish(message.reply, response);
      }
    } catch (error) {
      const response = messages.entry.CreateEntryResponse.encode({
        error: {
          code: messages.entry.Error.Code.UNKNOWN,
          message: 'oops',
        },
        traceId
      }).finish();
      handleError(nc, message, error, response);
    }
  });

  nc.subscribe('create.entry', async (error, message) => {
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

    const { text, creatorId, traceId } = messages.entry.CreateEntryRequest.decode(message.data);

    try {
      const { id } = await createEntry(db, { text, creatorId });

      if (message.reply) {
        const response = messages.entry.CreateEntryResponse.encode({
          payload: { id },
          traceId
        }).finish();
        nc.publish(message.reply, response);
      }
    } catch (error) {
      const response = messages.entry.CreateEntryResponse.encode({
        error: {
          code: messages.entry.Error.Code.UNKNOWN,
          message: 'oops'
        },
        traceId
      }).finish();
      handleError(nc, message, error, response);
    }
  });
}

bootstrap()
  .then(() => console.log('Entry service Bootstrapped 🚀'))
  .catch(error => {
    console.log(error)
    process.exit(1);
  });
