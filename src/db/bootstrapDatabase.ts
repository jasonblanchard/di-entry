import { Pool } from 'pg';
import { DbConnection } from './DbConnection';

interface BootstrapDatabase {
  connectionString: string;
}

export default async function bootstrapDatabase({ connectionString }: BootstrapDatabase): Promise<DbConnection> {
  const pool = new Pool({
    connectionString
  });

  let isConnected = false;

  pool.on('connect', () => {
    isConnected = true;
  });

  pool.on('error', () => {
    isConnected = false;
  });

  return {
    query: (text: string, params?: any) => {
      return pool.query(text, params)
    },
    isConnected: async () => {
      try {
        const client = await pool.connect();
        client.release();
        return isConnected;
      } catch (error) {
        return isConnected
      }
    }
  }
}
