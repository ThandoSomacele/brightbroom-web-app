const { db } = require('@vercel/postgres');
const {
  bookings,
  users,
  cleaners,
  revenue,
} = require('../app/lib/placeholder-data');
const bcrypt = require('bcrypt');

async function seedUser(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    await client.sql`
      CREATE TABLE IF NOT EXISTS "User" (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255),
        contact_number VARCHAR(20) NOT NULL UNIQUE,
        email VARCHAR(320) NOT NULL UNIQUE,
        email_verified TIMESTAMPTZ,
        password VARCHAR(255) NOT NULL,
        image_url VARCHAR(500),
        address VARCHAR(500),
        created_at TIMESTAMPTZ DEFAULT now(),
        updated_at TIMESTAMPTZ DEFAULT now()
      );
    `;
    console.log('Created "User" table');

    const insertUsers = users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`
        INSERT INTO "User" (
          id, name, contact_number, email,
          email_verified, password, image_url, address,
          created_at, updated_at
        ) VALUES (
          ${user.id}, ${user.name},
          ${user.contact_number.replace(/\s|[-+]/g, '').trim()},
          ${user.email}, ${user.email_verified},
          ${hashedPassword}, ${user.image_url}, ${user.address},
          now(), now()
        )
        ON CONFLICT (id) DO NOTHING;
      `;
    });
    await Promise.all(insertUsers);
    console.log(`Seeded ${insertUsers.length} Users`);
  } catch (error) {
    console.error('Error seeding Users:', error);
    throw error;
  }
}

async function seedCleaner(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    await client.sql`
      CREATE TABLE IF NOT EXISTS "Cleaner" (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255),
        home_address VARCHAR(500) NOT NULL,
        contact_number VARCHAR(20) NOT NULL UNIQUE,
        email VARCHAR(320) NOT NULL UNIQUE,
        national_id VARCHAR(255) NOT NULL UNIQUE,
        country_of_origin VARCHAR(255) NOT NULL,
        image_url VARCHAR(500),
        created_at TIMESTAMPTZ DEFAULT now(),
        updated_at TIMESTAMPTZ DEFAULT now()
      );
    `;
    console.log('Created "Cleaner" table');

    const insertCleaners = cleaners.map(async (cleaner) => {
      return client.sql`
        INSERT INTO "Cleaner" (
          id, name, home_address, contact_number,
          email, national_id, country_of_origin, image_url,
          created_at, updated_at
        ) VALUES (
          ${cleaner.id}, ${cleaner.name}, ${cleaner.home_address},
          ${cleaner.contact_number.replace(/\s|[-+]/g, '').trim()},
          ${cleaner.email}, ${cleaner.national_id}, ${cleaner.country_of_origin}, ${cleaner.image_url},
          now(), now()
        )
        ON CONFLICT (id) DO NOTHING;
      `;
    });
    await Promise.all(insertCleaners);
    console.log(`Seeded ${insertCleaners.length} Cleaners`);
  } catch (error) {
    console.error('Error seeding Cleaners:', error);
    throw error;
  }
}

async function seedBooking(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    await client.sql`
      CREATE TABLE IF NOT EXISTS "Booking" (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        user_id UUID NOT NULL,
        user_name VARCHAR(255),
        email VARCHAR(320) NOT NULL,
        contact_number VARCHAR(30) NOT NULL,
        address VARCHAR(500) NOT NULL,
        amount INT NOT NULL,
        status VARCHAR(255) NOT NULL,
        service_date TIMESTAMPTZ NOT NULL,
        service_time TIMESTAMPTZ NOT NULL,
        cleaner_id UUID NOT NULL,
        bed_rooms INT NOT NULL,
        bath_rooms INT NOT NULL,
        laundry_and_ironing BOOLEAN NOT NULL,
        oven BOOLEAN NOT NULL,
        fridge BOOLEAN NOT NULL,
        cabinets BOOLEAN NOT NULL,
        total_hours INT NOT NULL,
        created_at TIMESTAMPTZ DEFAULT now(),
        updated_at TIMESTAMPTZ DEFAULT now()
      );
    `;
    console.log('Created "Booking" table');

    const insertBookings = bookings.map(async (booking) => {
      return client.sql`
        INSERT INTO "Booking" (
          id, user_id, user_name, email, contact_number, address,
          amount, status, service_date, service_time, cleaner_id,
          bed_rooms, bath_rooms, laundry_and_ironing, oven, fridge, cabinets,
          total_hours, created_at, updated_at
        ) VALUES (
          ${booking.id}, ${booking.user_id}, ${booking.user_name},
          ${booking.email}, ${booking.contact_number.replace(/\s|[-+]/g, '').trim()},
          ${booking.address}, ${booking.amount}, ${booking.status},
          ${booking.service_date}, ${booking.service_time}, ${booking.cleaner_id},
          ${booking.bed_rooms}, ${booking.bath_rooms}, ${booking.laundry_and_ironing},
          ${booking.oven}, ${booking.fridge}, ${booking.cabinets}, ${booking.total_hours},
          now(), now()
        )
        ON CONFLICT (id) DO NOTHING;
      `;
    });
    await Promise.all(insertBookings);
    console.log(`Seeded ${insertBookings.length} Bookings`);
  } catch (error) {
    console.error('Error seeding Bookings:', error);
    throw error;
  }
}

async function seedRevenue(client) {
  try {
    await client.sql`
      CREATE TABLE IF NOT EXISTS "Revenue" (
        month VARCHAR(4) NOT NULL UNIQUE,
        revenue INT NOT NULL
      );
    `;
    console.log('Created "Revenue" table');

    const insertRevenue = revenue.map(
      (rev) =>
        client.sql`
        INSERT INTO "Revenue" (month, revenue)
        VALUES (${rev.month}, ${rev.revenue})
        ON CONFLICT (month) DO NOTHING;
      `,
    );
    await Promise.all(insertRevenue);
    console.log(`Seeded ${insertRevenue.length} Revenue records`);
  } catch (error) {
    console.error('Error seeding Revenue:', error);
    throw error;
  }
}

async function createSessionTable(client) {
  try {
    await client.sql`
      CREATE TABLE IF NOT EXISTS "Session" (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        user_id UUID NOT NULL,
        expires TIMESTAMPTZ NOT NULL,
        session_token VARCHAR(255) NOT NULL,
        created_at TIMESTAMPTZ DEFAULT now(),
        updated_at TIMESTAMPTZ DEFAULT now()
      );
    `;
    console.log('Created "Session" table');
  } catch (error) {
    console.error('Error creating Session table:', error);
    throw error;
  }
}

async function createAccountTable(client) {
  try {
    await client.sql`
      CREATE TABLE IF NOT EXISTS "Account" (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        user_id UUID NOT NULL,
        type VARCHAR(255) NOT NULL,
        provider VARCHAR(255) NOT NULL,
        provider_account_id VARCHAR(255) NOT NULL,
        refresh_token TEXT,
        access_token TEXT,
        expires_at BIGINT,
        id_token TEXT,
        scope TEXT,
        session_state TEXT,
        token_type TEXT,
        created_at TIMESTAMPTZ DEFAULT now(),
        updated_at TIMESTAMPTZ DEFAULT now()
      );
    `;
    console.log('Created "Account" table');
  } catch (error) {
    console.error('Error creating Account table:', error);
    throw error;
  }
}

async function createVerificationTokenTable(client) {
  try {
    await client.sql`
      CREATE TABLE IF NOT EXISTS "VerificationToken" (
        identifier TEXT NOT NULL,
        expires TIMESTAMPTZ NOT NULL,
        token TEXT NOT NULL,
        PRIMARY KEY (identifier, token)
      );
    `;
    console.log('Created "VerificationToken" table');
  } catch (error) {
    console.error('Error creating VerificationToken table:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  try {
    await seedUser(client);
    await seedCleaner(client);
    await seedBooking(client);
    await seedRevenue(client);
    await createSessionTable(client);
    await createAccountTable(client);
    await createVerificationTokenTable(client);
  } finally {
    await client.end();
  }
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
