const { db } = require('@vercel/postgres');

async function resetDatabase() {
  const client = await db.connect();
  try {
    await client.sql`
      DROP TABLE IF EXISTS "Booking" CASCADE;
      DROP TABLE IF EXISTS "Cleaner" CASCADE;
      DROP TABLE IF EXISTS "User" CASCADE;
      DROP TABLE IF EXISTS "Account" CASCADE;
      DROP TABLE IF EXISTS "Session" CASCADE;
      DROP TABLE IF EXISTS "VerificationToken" CASCADE;
      DROP TABLE IF EXISTS "Authenticator" CASCADE;
    `;
    console.log('Dropped all tables successfully.');
  } catch (error) {
    console.error('Error dropping tables:', error);
  } finally {
    await client.end();
  }
}

resetDatabase();
