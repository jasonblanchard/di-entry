import { QueryResult } from 'pg';

export interface DbConnection {
  query: (text: string, params?: any) => Promise<QueryResult<any>>;
}
