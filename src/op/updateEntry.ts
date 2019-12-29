import { DbConnection } from '../db/DbConnection';

interface UpdateEntryInput {
  id: string;
  text: string | null | undefined;
  creatorId: string;
}

export default async function updateEntry(db: DbConnection, { id, text = '', creatorId }: UpdateEntryInput) {
  const result = await db.query(`
    UPDATE entries
    SET text = $1
    WHERE id = $2
    AND creator_id = $3
    AND is_deleted = false
    RETURNING id, text, creator_id
    `,
    [text, id, creatorId]);

  const entity = result.rows[0];

  if (!entity) {
    return null;
  }

  return {
    id: String(entity.id),
    text: entity.text,
    creatorId: entity.creator_id
  }
}
