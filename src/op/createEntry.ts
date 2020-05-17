import { DbConnection } from '../db/DbConnection';

interface CreateEntryInput {
  text: string;
  creatorId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export default async function createEntry(db: DbConnection, { text = '', creatorId, createdAt, updatedAt }: CreateEntryInput) {
  const createdAtTimestamp = createdAt || new Date();
  const result = await db.query(`
    INSERT INTO entries (text, creator_id, created_at, updated_at)
    VALUES ($1, $2, $3, $4)
    RETURNING id
    `,
    [text, creatorId, createdAtTimestamp, updatedAt]);
  const entity = result.rows[0];

  return {
    id: String(entity.id)
  }
}
