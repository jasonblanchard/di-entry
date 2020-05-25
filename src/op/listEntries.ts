import { DbConnection } from '../db/DbConnection';

interface ListEntriesInput {
  creatorId: string;
  first: number | undefined | null;
  after: string | undefined | null;
}

interface Entity {
  id: number;
  text: string;
  creator_id: string;
  created_at: Date;
  updated_at: Date;
}

export const FIRST_DEFAULT = 50;

export default async function listEntries(db: DbConnection, { creatorId, first = FIRST_DEFAULT, after }: ListEntriesInput) {
  let startCursor = after;
  if (!startCursor) {
    const firstResult = await db.query(`
      SELECT id
      FROM entries
      WHERE creator_id = $1
      ORDER BY created_at DESC
      LIMIT 1
      `,
      [creatorId]);

    if (!firstResult.rows[0]) return [];
    startCursor = String(firstResult.rows[0].id);
  }

  const result = await db.query(`
      SELECT id, text, creator_id, created_at, updated_at
      FROM entries
      WHERE creator_id = $1
      AND is_deleted = false
      AND id <= $2
      ORDER BY id DESC
      LIMIT $3
      `,
    [creatorId, startCursor, first]);
  const entities = result.rows;

  if (!entities) {
    return null;
  }

  return entities.map((entity: Entity) => ({
    id: String(entity.id),
    text: entity.text,
    creatorId: entity.creator_id,
    createdAt: entity.created_at,
    updatedAt: entity.updated_at,
  }));
}
