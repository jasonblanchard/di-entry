const { messages } = require('../src/messages');
const { connect, Payload } = require('ts-nats');

const TIMEOUT = 1000;

it('create.entry flow', () => {
  interface Scope {
    [key: string]: any;
  }

  const scope: Scope = {};

  const text = "Testing 123"
  const creatorId = '123';

  return connect({
    servers: ['nats://localhost:4222'],
    payload: Payload.BINARY
  }).then((nc: any) => {
    scope.nc = nc;
    const request = messages.entry.CreateEntryRequest.encode({
      text,
      creatorId,
    }).finish();
    return nc.request('create.entry', TIMEOUT, request);
  }).then((message: any) => {
    const response = message.data;
    const { payload: entry } = messages.entry.CreateEntryResponse.decode(response);
    expect(entry).toEqual({
      id: expect.any(String)
    });
    return entry.id;
  }).then((id: string) => {
    const request = messages.entry.GetEntryRequest.encode({
      id,
      creatorId
    }).finish();
    return scope.nc.request('get.entry', TIMEOUT, request);
  }).then((message: any) => {
    const response = message.data;
    const { payload: entry } = messages.entry.GetEntryResponse.decode(response);
    expect(entry).toEqual({
      id: expect.any(String),
      text,
      creatorId
    });
  });
});
