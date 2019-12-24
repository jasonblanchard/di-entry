import fs from 'fs';
import { Client } from 'ts-nats';

interface CheckStatusInput {
  nc: Client;
}

enum Status {
  UP = "UP",
  DOWN = "DOWN",
}

export default async function checkStatus({ nc }: CheckStatusInput) {
  interface Services {
    [key: string]: boolean
  }

  const services: Services = {
    nats: !nc.isClosed(),
  }
  const status = Object.keys(services).every(key => services[key] === true) ? Status.UP : Status.DOWN;

  return new Promise((resolve, reject) => {
    fs.writeFile('HEALTH_STATUS', status, (error) => {
      if (error) reject();
      resolve();
    });
  });
}
