import { DbConnection } from '../db/DbConnection';

interface GetEntryInput {
  id: string;
}

export default async function getEntry(db: DbConnection, { id }: GetEntryInput) {
  const result = await db.query(`
    SELECT id, text, creator_id, created_at, updated_at
    FROM entries
    WHERE id = $1
    AND is_deleted = false
    `,
    [id]);
  const entity = result.rows[0];

  if (!entity) {
    return null;
  }

  return {
    id: String(entity.id),
    text: entity.text,
    creatorId: entity.creator_id,
    createdAt: entity.created_at,
    updatedAt: entity.updated_at,
  };
}
