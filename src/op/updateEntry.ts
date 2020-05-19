import { DbConnection } from '../db/DbConnection';

interface UpdateEntryInput {
  id: string;
  text: string | null | undefined;
}

export default async function updateEntry(db: DbConnection, { id, text = '' }: UpdateEntryInput) {
  const updatedAt = new Date();
  const result = await db.query(`
    UPDATE entries
    SET text = $1, updated_at = $3
    WHERE id = $2
    AND is_deleted = false
    RETURNING id, text, creator_id, created_at, updated_at
    `,
    [text, id, updatedAt]);

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
  }
}
