import { DbConnection } from '../db/DbConnection';

interface GetEntryInput {
  id: string;
  creatorId: string;
}

export default async function getEntry(db: DbConnection, { id, creatorId }: GetEntryInput) {
  const result = await db.query("SELECT id, text, creator_id FROM entries WHERE id = $1 AND creator_id = $2", [id, creatorId]);
  const entity = result.rows[0];

  if (!entity) {
    return null;
  }

  return {
    id: String(entity.id),
    text: entity.text,
    creatorId: entity.creator_id
  };
}
