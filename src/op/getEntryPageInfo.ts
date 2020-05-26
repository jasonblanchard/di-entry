import { DbConnection } from '../db/DbConnection';

interface GetEntriesPageInfoInput {
  creatorId: string;
  first: number | undefined | null;
  startId: string;
  endId: string;
}

interface PageInfo {
  totalCount: number;
  hasNextPage: boolean;
  startCursor: string;
  endCursor: string;
}

export default async function getEntriesPageInfo(db: DbConnection, { creatorId, startId, endId, first = 50 }: GetEntriesPageInfoInput) {
  const countResult = await db.query(`
    SELECT COUNT(*)
    FROM entries
    WHERE creator_id = $1
    AND is_deleted = false
    `,
    [creatorId]);
  const totalCount = countResult.rows[0]?.count;

  // TODO: Figure out if this is broken since ordering by created_at
  const countAfterCursorResult = await db.query(`
    SELECT COUNT(*)
    FROM entries
    WHERE creator_id = $1
    AND id < $2
    AND is_deleted = false
    LIMIT $3
    `,
    [creatorId, endId, first]);
  const hasNextPage = countAfterCursorResult.rows[0]?.count > 0;

  const result = {
    totalCount,
    hasNextPage,
    startCursor: startId,
    endCursor: endId,
  };

  return result;
}
