import proto, { messages } from '../src/messages';
import { connect, Payload, Client } from 'ts-nats';

const TIMEOUT = 1000;

it('create.entry flow', async () => {
  const text = "Testing 123"
  const creatorId = '123';

  const nc = await connect({
    servers: ['nats://localhost:4222'],
    payload: Payload.BINARY
  });

  const request = messages.entry.CreateEntryRequest.encode({
    payload: {
      text,
      creatorId,
    },
    context: {
      principal: {
        type: messages.entry.Principal.Type.USER,
        id: creatorId
      }
    }
  }).finish();
  const message = await nc.request('create.entry', TIMEOUT, request);
  const response = message.data;
  const { payload: entry } = messages.entry.CreateEntryResponse.decode(response);
  expect(entry).toEqual({
    id: expect.any(String)
  });

  if (!entry) throw new Error();

  const getRequest = messages.entry.GetEntryRequest.encode({
    payload: {
      id: entry.id,
    },
    context: {
      principal: {
        type: messages.entry.Principal.Type.USER,
        id: creatorId
      }
    }
  }).finish();
  const getMessage = await nc.request('get.entry', TIMEOUT, getRequest);
  const getResponse = getMessage.data;
  const { payload: newEentry, error } = messages.entry.GetEntryResponse.decode(getResponse);
  expect(error).toEqual(null);
  expect(newEentry).toEqual({
    id: expect.any(String),
    text,
    creatorId,
    createdAt: expect.any(proto.google.protobuf.Timestamp),
  });

  nc.close();
});

function sleep(n: number) {
  return new Promise(resolve => {
    setTimeout(resolve, n);
  });
}

async function createNEntries(nc: Client, n: number) {
  let requests = [];

  for (let i = 0; i < n; i++) {
    const request = messages.entry.CreateEntryRequest.encode({
      payload: {
        text: `Testing text ${i}`,
        creatorId: '123',
      },
      context: {
        principal: {
          type: messages.entry.Principal.Type.USER,
          id: '123'
        }
      }
    }).finish();
    requests.push(nc.request('create.entry', TIMEOUT, request));
    await sleep(100);
  }

  return Promise.all(requests);
}

describe('list.entry', () => {
  it('returns empty list', async () => {
    const nc = await connect({
      servers: ['nats://localhost:4222'],
      payload: Payload.BINARY
    });

    const request = messages.entry.ListEntriesRequest.encode({
      payload: {
        creatorId: 'noentriesforme'
      },
      context: {
        principal: {
          type: messages.entry.Principal.Type.USER,
          id: 'noentriesforme'
        }
      }
    }).finish();
    const message = await nc.request('list.entry', TIMEOUT, request);
    const { payload: entries, pageInfo, error } = messages.entry.ListEntriesResponse.decode(message.data);
    expect(error).toEqual(null);
    expect(entries.length).toEqual(0);
    expect(pageInfo).toEqual({
      totalCount: 0,
      hasNextPage: false,
      startCursor: undefined,
      endCursor: undefined,
    });

    nc.close();
  });

  it('returns list', async () => {
    const nc = await connect({
      servers: ['nats://localhost:4222'],
      payload: Payload.BINARY
    });

    try {
      await nc.request('entry.store.drop', 1000, []);

      await createNEntries(nc, 10);

      const request1 = messages.entry.ListEntriesRequest.encode({
        payload: {
          creatorId: '123',
          first: 4
        },
        context: {
          principal: {
            type: messages.entry.Principal.Type.USER,
            id: '123'
          }
        }
      }).finish();
      const message = await nc.request('list.entry', TIMEOUT, request1);
      const { payload: entries, pageInfo, error } = messages.entry.ListEntriesResponse.decode(message.data);
      expect(error).toEqual(null);
      expect(entries.length).toEqual(4);
      expect(pageInfo).toEqual({
        totalCount: expect.any(Number),
        hasNextPage: expect.any(Boolean),
        startCursor: expect.any(String),
        endCursor: expect.any(String)
      });

      const request2 = messages.entry.ListEntriesRequest.encode({
        payload: {
          creatorId: '123',
          first: 4,
          after: pageInfo?.endCursor,
        },
        context: {
          principal: {
            type: messages.entry.Principal.Type.USER,
            id: '123'
          }
        }
      }).finish();
      const message2 = await nc.request('list.entry', TIMEOUT, request2);
      const { payload: entries2, pageInfo: pageInfo2 } = messages.entry.ListEntriesResponse.decode(message2.data);
      expect(entries2.length).toEqual(4);
      expect(pageInfo2?.hasNextPage).toEqual(true);
      expect(pageInfo?.endCursor).not.toEqual(pageInfo2?.startCursor);
      expect(entries2.map(entry => entry.id).includes(pageInfo?.endCursor)).toEqual(false);

      const request3 = messages.entry.ListEntriesRequest.encode({
        payload: {
          creatorId: '123',
          first: 4,
          after: pageInfo2?.endCursor,
        },
        context: {
          principal: {
            type: messages.entry.Principal.Type.USER,
            id: '123'
          }
        }
      }).finish();
      const message3 = await nc.request('list.entry', TIMEOUT, request3);
      const { payload: entries3, pageInfo: pageInfo3 } = messages.entry.ListEntriesResponse.decode(message3.data);
      expect(entries3.length).toEqual(2);
      expect(pageInfo3?.hasNextPage).toEqual(false);
    } finally {
      nc.close();
    }
  });
});

describe('delete.entry', () => {
  it('deletes an entry', async () => {
    const text = "Testing 123"
    const creatorId = '123';

    const nc = await connect({
      servers: ['nats://localhost:4222'],
      payload: Payload.BINARY
    });

    const createdAt = new proto.google.protobuf.Timestamp();
    createdAt.seconds = (new Date().getSeconds() / 1000) - 172800;

    const request = messages.entry.CreateEntryRequest.encode({
      payload: {
        text,
        createdAt,
        creatorId,
      },
      context: {
        principal: {
          type: messages.entry.Principal.Type.USER,
          id: creatorId
        }
      }
    }).finish();
    const message = await nc.request('create.entry', TIMEOUT, request);
    const response = message.data;
    const { error: responseError, payload: entry } = messages.entry.CreateEntryResponse.decode(response);
    expect(entry).toEqual({
      id: expect.any(String)
    });

    if (!entry) throw new Error();

    const deleteRequest = messages.entry.DeleteEntryRequest.encode({
      payload: {
        id: entry.id
      },
      context: {
        principal: {
          type: messages.entry.Principal.Type.USER,
          id: creatorId
        }
      }
    }).finish();
    await nc.request('delete.entry', TIMEOUT, deleteRequest);

    const getRequest = messages.entry.GetEntryRequest.encode({
      payload: {
        id: entry.id,
      },
      context: {
        principal: {
          type: messages.entry.Principal.Type.USER,
          id: creatorId
        }
      }
    }).finish();
    const getMessage = await nc.request('get.entry', TIMEOUT, getRequest);
    const getResponse = getMessage.data;
    const { error } = messages.entry.GetEntryResponse.decode(getResponse);

    expect(error).toEqual({
      code: messages.entry.Error.Code.NOT_FOUND,
      message: 'oops'
    });

    nc.close();
  });
});

describe('update.entry', () => {
  it('updates an entry', async () => {
    const text = "Testing 123"
    const creatorId = '123';

    const nc = await connect({
      servers: ['nats://localhost:4222'],
      payload: Payload.BINARY
    });

    const request = messages.entry.CreateEntryRequest.encode({
      payload: {
        text,
        creatorId: creatorId,
      },
      context: {
        principal: {
          type: messages.entry.Principal.Type.USER,
          id: creatorId
        }
      }
    }).finish();
    const message = await nc.request('create.entry', TIMEOUT, request);
    const response = message.data;
    const { payload: entry } = messages.entry.CreateEntryResponse.decode(response);
    expect(entry).toEqual({
      id: expect.any(String)
    });

    if (!entry) throw new Error();

    const updatedText = 'Updated text!';

    const updateRequest = messages.entry.UpdateEntryRequest.encode({
      payload: {
        id: entry.id,
        text: updatedText
      },
      context: {
        principal: {
          type: messages.entry.Principal.Type.USER,
          id: creatorId
        }
      }
    }).finish();
    const updateMessage = await nc.request('update.entry', TIMEOUT, updateRequest);
    const updateResponse = updateMessage.data;
    const { payload: updatedEntry, error } = messages.entry.GetEntryResponse.decode(updateResponse);
    expect(error).toEqual(null);
    expect(updatedEntry).toEqual({
      id: expect.any(String),
      text: updatedText,
      creatorId,
      createdAt: expect.any(proto.google.protobuf.Timestamp),
      updatedAt: expect.any(proto.google.protobuf.Timestamp),
    });

    const getRequest = messages.entry.GetEntryRequest.encode({
      payload: {
        id: entry.id,
      },
      context: {
        principal: {
          type: messages.entry.Principal.Type.USER,
          id: creatorId
        }
      }
    }).finish();
    const getMessage = await nc.request('get.entry', TIMEOUT, getRequest);
    const getResponse = getMessage.data;
    const { payload: fetchedEntry, error: fetchError } = messages.entry.GetEntryResponse.decode(getResponse);
    const timestamp = fetchedEntry?.createdAt || undefined;
    const prototimestamp = new proto.google.protobuf.Timestamp(timestamp);
    expect(fetchError).toEqual(null);
    expect(fetchedEntry).toEqual({
      id: expect.any(String),
      text: updatedText,
      creatorId,
      createdAt: expect.any(proto.google.protobuf.Timestamp),
      updatedAt: expect.any(proto.google.protobuf.Timestamp),
    });

    nc.close();
  });
});

describe('errors', () => {
  it('create.entry', async () => {
    const nc = await connect({
      servers: ['nats://localhost:4222'],
      payload: Payload.BINARY
    });
    const request = messages.entry.CreateEntryRequest.encode({
      context: {} // Triggers a validation error
    }).finish();
    const message = await nc.request('create.entry', TIMEOUT, request);
    const response = message.data;
    const { error } = messages.entry.CreateEntryResponse.decode(response);
    expect(error).toEqual({
      code: messages.entry.Error.Code.VALIDATION_FAILED,
      message: 'oops'
    });

    nc.close();
  });

  it('get.entry', async () => {
    const nc = await connect({
      servers: ['nats://localhost:4222'],
      payload: Payload.BINARY
    });
    const request = messages.entry.GetEntryRequest.encode({
      payload: {
        id: '99999'
      },
      context: {
        principal: {
          type: messages.entry.Principal.Type.USER,
          id: '123'
        }
      }
    }).finish();
    const message = await nc.request('get.entry', TIMEOUT, request);
    const response = message.data;
    const { error } = messages.entry.GetEntryResponse.decode(response);
    expect(error).toEqual({
      code: messages.entry.Error.Code.NOT_FOUND,
      message: 'oops'
    });
    nc.close();
  });
});
