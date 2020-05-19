import { DbConnection } from '../db/DbConnection';

interface DeleteEntryInput {
  id: string;
}

export default async function deleteEntry(db: DbConnection, { id }: DeleteEntryInput) {
  await db.query(`
    UPDATE entries
    SET is_deleted = TRUE
    WHERE id = $1
    `,
    [id]);

  return true;
}
