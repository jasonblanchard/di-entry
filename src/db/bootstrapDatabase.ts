import { Pool } from 'pg';
import { DbConnection } from './DbConnection';

interface BootstrapDatabase {
  connectionString: string;
}

export default async function bootstrapDatabase({ connectionString }: BootstrapDatabase): Promise<DbConnection> {
  const pool = new Pool({
    connectionString
  });

  return {
    query: (text: string, params?: any) => {
      return pool.query(text, params)
    },
  }
}
