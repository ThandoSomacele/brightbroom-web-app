const { db } = require('@vercel/postgres');
const {
  bookings,
  users,
  cleaners,
  revenue,
} = require('../app/lib/placeholder-data');
const bcrypt = require('bcryptjs');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      first_name VARCHAR(255) NOT NULL,
      last_name VARCHAR(255) NOT NULL,
      contact_number VARCHAR(20) NOT NULL UNIQUE,
      email VARCHAR(320) NOT NULL UNIQUE,
      "emailVerified" TIMESTAMPTZ,
      password VARCHAR(255) NOT NULL,
      image_url VARCHAR(500),
      address VARCHAR(500)
    );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (
          id,
          first_name,
          last_name,
          contact_number,
          email,
          "emailVerified",
          password,
          image_url,
          address
        )
        VALUES (
            ${user.id},
            ${user.first_name},
            ${user.last_name},
            ${user.contact_number.replaceAll(' ', '').replaceAll('-', '').replaceAll('+', '').trim()}, 
            ${user.email},
            ${user.emailVerified},
            ${hashedPassword},
            ${user.image_url},
            ${user.address}
        )
        ON CONFLICT (id) DO NOTHING;
        `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function createSessionsTable(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "sesions" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS sessions  (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        "userId" INTEGER NOT NULL,
        expires TIMESTAMPTZ NOT NULL,
        "sessionToken" VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "sessions" table`);

    return {
      createTable,
    };
  } catch (error) {
    console.error('Error creating sessions table:', error);
    throw error;
  }
}

async function createAccountsTable(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "accounts" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS accounts (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        "userId" INTEGER NOT NULL,
        type VARCHAR(255) NOT NULL,
        provider VARCHAR(255) NOT NULL,
        "providerAccountId" VARCHAR(255) NOT NULL,
        refresh_token TEXT,
        access_token TEXT,
        expires_at BIGINT,
        id_token TEXT,
        scope TEXT,
        session_state TEXT,
        token_type TEXT
      );
    `;

    console.log(`Created "accounts" table`);

    return {
      createTable,
    };
  } catch (error) {
    console.error('Error creating accounts table:', error);
    throw error;
  }
}

async function createVerificationTokenTable(client) {
  try {
    // Create the "verification_token" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS verification_token (
      identifier TEXT NOT NULL,
      expires TIMESTAMPTZ NOT NULL,
      token TEXT NOT NULL,
    
      PRIMARY KEY (identifier, token)
    );
    `;

    console.log(`Created "verification_token" table`);

    return {
      createTable,
    };
  } catch (error) {
    console.error('Error creating verification_token table:', error);
    throw error;
  }
}

async function seedCleaners(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "cleaners" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS cleaners (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        home_address VARCHAR(500) NOT NULL,
        contact_number VARCHAR(20) NOT NULL UNIQUE,
        email VARCHAR(320) NOT NULL UNIQUE,
        national_Id VARCHAR(255) NOT NULL UNIQUE,
        country_of_origin VARCHAR(255) NOT NULL,
        image_url VARCHAR(500)
      );
    `;

    console.log(`Created "cleaners" table`);

    // Insert data into the "cleaners" table
    const insertedCleaners = await Promise.all(
      cleaners.map(async (cleaner) => {
        return client.sql`
        INSERT INTO cleaners (
          id,
          first_name, 
          last_name,
          home_address, 
          contact_number, 
          email, 
          national_Id, 
          country_of_origin, 
          image_url
        ) VALUES (
          ${cleaner.id}, 
          ${cleaner.first_name}, 
          ${cleaner.last_name}, 
          ${cleaner.home_address}, 
          ${cleaner.contact_number.replaceAll(' ', '').replaceAll('-', '').replaceAll('+', '').trim()}, 
          ${cleaner.email}, 
          ${cleaner.national_Id}, 
          ${cleaner.country_of_origin}, 
          ${cleaner.image_url}
        )
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedCleaners.length} cleaners`);

    return {
      createTable,
      cleaners: insertedCleaners,
    };
  } catch (error) {
    console.error('Error seeding cleaners:', error);
    throw error;
  }
}

async function seedBookings(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "bookings" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS bookings (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      user_id UUID NOT NULL,
      user_first_name VARCHAR(255) NOT NULL,
      user_last_name VARCHAR(255) NOT NULL,
      email VARCHAR(320) NOT NULL,
      contact_number VARCHAR(30) NOT NULL,
      address VARCHAR(500) NOT NULL,
      amount INT NOT NULL,
      status VARCHAR(255) NOT NULL,
      date DATE NOT NULL,
      service_date DATE NOT NULL,
      service_time TIME NOT NULL,
      cleaner_id UUID NOT NULL,
      bed_rooms INT NOT NULL,
      bath_rooms INT NOT NULL,
      laundry_and_ironing BOOLEAN NOT NULL,
      oven BOOLEAN NOT NULL,
      fridge BOOLEAN NOT NULL,
      cabinets BOOLEAN NOT NULL,
      total_hours INT NOT NULL
    );
    `;

    console.log(`Created "bookings" table`);

    // Insert data into the "bookings" table
    const insertedBookings = await Promise.all(
      bookings.map(async (booking) => {
        return client.sql`
        INSERT INTO bookings (
          id,
          user_id,
          user_first_name,
          user_last_name,
          email,
          contact_number,
          address,
          amount,
          status,
          date,
          service_date,
          service_time,
          cleaner_id,
          bed_rooms,
          bath_rooms,
          laundry_and_ironing,
          oven,
          fridge,
          cabinets,
          total_hours
        ) VALUES (
            ${booking.id}, 
            ${booking.user_id}, 
            ${booking.user_first_name}, 
            ${booking.user_last_name}, 
            ${booking.email}, 
            ${booking.contact_number.replaceAll(' ', '').replaceAll('-', '').replaceAll('+', '').trim()}, 
            ${booking.address}, 
            ${booking.amount}, 
            ${booking.status}, 
            ${booking.date}, 
            ${booking.service_date}, 
            ${booking.service_time}, 
            ${booking.cleaner_id}, 
            ${booking.bed_rooms}, 
            ${booking.bath_rooms}, 
            ${booking.laundry_and_ironing}, 
            ${booking.oven}, 
            ${booking.fridge}, 
            ${booking.cabinets}, 
            ${booking.total_hours}
          )
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedBookings.length} bookings`);

    return {
      createTable,
      bookings: insertedBookings,
    };
  } catch (error) {
    console.error('Error seeding bookings:', error);
    throw error;
  }
}

async function seedRevenue(client) {
  try {
    // Create the "revenue" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS revenue (
        month VARCHAR(4) NOT NULL UNIQUE,
        revenue INT NOT NULL
      );
    `;

    console.log(`Created "revenue" table`);

    // Insert data into the "revenue" table
    const insertedRevenue = await Promise.all(
      revenue.map(
        (rev) => client.sql`
        INSERT INTO revenue (month, revenue)
        VALUES (${rev.month}, ${rev.revenue})
        ON CONFLICT (month) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedRevenue.length} revenue`);

    return {
      createTable,
      revenue: insertedRevenue,
    };
  } catch (error) {
    console.error('Error seeding revenue:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedRevenue(client);
  await seedCleaners(client);
  await seedBookings(client);
  await createSessionsTable(client);
  await createAccountsTable(client);
  await createVerificationTokenTable(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
