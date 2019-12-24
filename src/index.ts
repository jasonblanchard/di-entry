import { messages } from './messages';
import { connect, Payload, Msg, Client} from 'ts-nats';

import createEntry from './op/createEntry';
import getEntry from './op/getEntry';
import checkStatus from './op/checkStatus';

require('dotenv').config();

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
  let nc = await connect({
    servers: natsHosts,
    payload: Payload.BINARY
  });

  setInterval(() => {
    checkStatus({ nc });
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

    const { id, traceId } = messages.entry.GetEntryRequest.decode(message.data);

    try {
      const entry = await getEntry(id);

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
      const { id } = await createEntry({ text, creatorId });

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
