import { DbConnection } from '../db/DbConnection';

interface DeleteEntryInput {
  id: string;
  creatorId: string;
}

export default async function deleteEntry(db: DbConnection, { id, creatorId }: DeleteEntryInput) {
  await db.query(`
    UPDATE entries
    SET is_deleted = TRUE
    WHERE id = $1
    AND creator_id = $2
    `,
    [id, creatorId]);

  return true;
}
