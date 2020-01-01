import { DbConnection } from '../db/DbConnection';

interface ListEntriesInput {
  creatorId: string;
  first: number | undefined | null;
  after: string | undefined | null;
}

interface Entity {
  id: number;
  text: string;
  creator_id: string
}

export default async function listEntries(db: DbConnection, { creatorId, first = 50, after }: ListEntriesInput) {
  let startCursor = after;
  if (!startCursor) {
    const firstResult = await db.query(`
      SELECT id
      FROM entries
      WHERE creator_id = $1
      ORDER BY id DESC
      LIMIT 1
      `,
      [creatorId]);
    startCursor = String(firstResult.rows[0].id);
  }

  const result = await db.query(`
      SELECT id, text, creator_id
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
    creatorId: entity.creator_id
  }));
}
