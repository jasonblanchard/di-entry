import { DbConnection } from '../db/DbConnection';

interface GetEntryInput {
  creatorId: string;
}

interface Entity {
  id: number;
  text: string;
  creator_id: string
}

export default async function getEntries(db: DbConnection, { creatorId }: GetEntryInput) {
  const result = await db.query("SELECT id, text, creator_id FROM entries WHERE creator_id = $1 LIMIT 50", [creatorId]);
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
