interface CreateEntryInput {
  text: string;
  creatorId: string;
}

export default async function createEntry({ text, creatorId }: CreateEntryInput) {
  // TODO: Change state
  return {
    id: '123'
  }
}
