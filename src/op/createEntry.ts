import { DbConnection } from '../db/DbConnection';

interface CreateEntryInput {
  text: string;
  creatorId: string;
}

export default async function createEntry(db: DbConnection, { text = '', creatorId }: CreateEntryInput) {
  const result = await db.query("INSERT INTO entries (text, creator_id) VALUES ($1, $2) RETURNING id", [text, creatorId]);
  const entity = result.rows[0];

  return {
    id: String(entity.id)
  }
}
