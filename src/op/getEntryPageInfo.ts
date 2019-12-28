import { DbConnection } from '../db/DbConnection';

interface GetEntriesPageInfoInput {
  creatorId: string;
  first: number | undefined | null;
  after: string | undefined | null;
}

interface PageInfo {
  totalCount: number;
  hasNextPage: boolean;
  startCursor: string;
  endCursor: string;
}

export default async function getEntriesPageInfo(db: DbConnection, { creatorId, first = 50, after }: GetEntriesPageInfoInput) {
  const countResult = await db.query("SELECT COUNT(*) FROM entries WHERE creator_id = $1", [creatorId]);
  const totalCount = countResult.rows[0].count;
  const firstResult = await db.query("SELECT id FROM entries WHERE creator_id = $1 ORDER BY id LIMIT 1", [creatorId]);
  const startCursor = String(firstResult.rows[0].id);
  const cursor = after || startCursor;
  const lastResult = await db.query("SELECT id FROM entries WHERE creator_id = $1 ORDER BY id DESC LIMIT 1", [creatorId]);
  const endCursor = String(lastResult.rows[0].id);

  const countAfterCursorResult = await db.query("SELECT COUNT(*) FROM entries WHERE creator_id = $1 AND id > $2 LIMIT $3", [creatorId, cursor, first]);
  const hasNextPage = countAfterCursorResult.rows[0].count > 0;

  const result = {
    totalCount,
    hasNextPage,
    startCursor,
    endCursor,
  };

  return result;
}
