import fs from 'fs';
import { Client } from 'ts-nats';
import { DbConnection } from '../db/DbConnection';

interface CheckStatusInput {
  nc: Client;
  db: DbConnection;
}

enum Status {
  UP = "UP",
  DOWN = "DOWN",
}


export default async function checkStatus({ nc, db }: CheckStatusInput) {
  interface Services {
    [key: string]: boolean
  }

  const services: Services = {
    nats: !nc.isClosed(),
    // db: await db.isConnected() // TODO: Disabling to allow db to scale down
  }
  const status = Object.keys(services).every(key => services[key] === true) ? Status.UP : Status.DOWN;

  if (status === Status.DOWN) console.log(services);

  return new Promise((resolve, reject) => {
    fs.writeFile(`${__dirname}/../../HEALTH_STATUS`, status, (error) => {
      if (error) {
        console.log(error);
        reject(status);
      }
      !!status ? resolve(status) : reject(status);
    });
  });
}
