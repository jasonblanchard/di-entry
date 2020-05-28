import { DbConnection } from '../db/DbConnection';

export default async function getEntry(db: DbConnection) {
  await db.query(`
    DELETE FROM entries;
    `,
    );

  return true;
}
