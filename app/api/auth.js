// pages/api/auth.js
import { Pool } from 'pg';

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
  native: false,
});

export default async function handler(req, res) {
  // Example query
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT NOW()');
    res.status(200).json({ time: result.rows[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    client.release();
  }
}
