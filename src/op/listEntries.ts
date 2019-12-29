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
  let entities;

  if (!after) {
    const result = await db.query(`
      SELECT id, text, creator_id
      FROM entries
      WHERE creator_id = $1
      AND is_deleted = false
      ORDER BY id
      LIMIT $2
      `,
      [creatorId, first]);
    entities = result.rows;
  } else {
    const result = await db.query("SELECT id, text, creator_id FROM entries WHERE creator_id = $1 AND id > $2 LIMIT $3", [creatorId, after, first]);
    entities = result.rows;
  }

  if (!entities) {
    return null;
  }

  return entities.map((entity: Entity) => ({
    id: String(entity.id),
    text: entity.text,
    creatorId: entity.creator_id
  }));
}
