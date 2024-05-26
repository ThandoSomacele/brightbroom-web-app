import { sql } from '@vercel/postgres';
import {
  UserField,
  UsersTableType,
  BookingForm,
  BookingsTable,
  LatestBookingRaw,
  User,
  Revenue,
} from './definitions';
import { formatCurrency } from './utils';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchRevenue() {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore();
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    console.log('Fetching revenue data...');
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql<Revenue>`SELECT * FROM revenue`;

    console.log('Data fetch completed after 3 seconds.');

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

// Fetch the last 5 bookings, sorted by date
export async function fetchLatestBookings() {
  noStore();
  try {
    const data = await sql<LatestBookingRaw>`
      SELECT bookings.amount, users.name, users.image_url, users.email, bookings.id
      FROM bookings
      JOIN users ON bookings.user_id = users.id
      ORDER BY bookings.date DESC
      LIMIT 5`;

    const latestBookings = data.rows.map((booking) => ({
      ...booking,
      amount: formatCurrency(booking.amount),
    }));
    return latestBookings;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest bookings.');
  }
}

export async function fetchCardData() {
  noStore();
  try {
    // You can probably combine these into a single SQL query
    // However, we are intentionally splitting them to demonstrate
    // how to initialize multiple queries in parallel with JS.
    const bookingCountPromise = sql`SELECT COUNT(*) FROM bookings`;
    const userCountPromise = sql`SELECT COUNT(*) FROM users`;
    const bookingStatusPromise = sql`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM bookings`;

    const data = await Promise.all([
      bookingCountPromise,
      userCountPromise,
      bookingStatusPromise,
    ]);

    const numberOfBookings = Number(data[0].rows[0].count ?? '0');
    const numberOfUsers = Number(data[1].rows[0].count ?? '0');
    const totalPaidBookings = formatCurrency(data[2].rows[0].paid ?? '0');
    const totalPendingBookings = formatCurrency(data[2].rows[0].pending ?? '0');

    return {
      numberOfUsers,
      numberOfBookings,
      totalPaidBookings,
      totalPendingBookings,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredBookings(
  query: string,
  currentPage: number,
) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const bookings = await sql<BookingsTable>`
      SELECT
        bookings.id,
        bookings.amount,
        bookings.date,
        bookings.status,
        users.name,
        users.email,
        users.image_url
      FROM bookings
      JOIN users ON bookings.user_id = users.id
      WHERE
        users.name ILIKE ${`%${query}%`} OR
        users.email ILIKE ${`%${query}%`} OR
        bookings.amount::text ILIKE ${`%${query}%`} OR
        bookings.date::text ILIKE ${`%${query}%`} OR
        bookings.status ILIKE ${`%${query}%`}
      ORDER BY bookings.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return bookings.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch bookings.');
  }
}

export async function fetchBookingsPages(query: string) {
  noStore();
  try {
    const count = await sql`SELECT COUNT(*)
    FROM bookings
    JOIN users ON bookings.user_id = users.id
    WHERE
      users.name ILIKE ${`%${query}%`} OR
      users.email ILIKE ${`%${query}%`} OR
      bookings.amount::text ILIKE ${`%${query}%`} OR
      bookings.date::text ILIKE ${`%${query}%`} OR
      bookings.status ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of bookings.');
  }
}

export async function fetchBookingById(id: string) {
  noStore();
  try {
    const data = await sql<BookingForm>`
      SELECT
        bookings.id,
        bookings.user_id,
        bookings.amount,
        bookings.status
      FROM bookings
      WHERE bookings.id = ${id};
    `;

    const booking = data.rows.map((booking) => ({
      ...booking,
      // Convert amount from cents to dollars
      amount: booking.amount / 100,
    }));

    // console.log(booking); // Booking is an empty array []

    return booking[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch booking.');
  }
}

export async function fetchUsers() {
  try {
    const data = await sql<UserField>`
      SELECT
        id,
        name
      FROM users
      ORDER BY name ASC
    `;

    const users = data.rows;
    return users;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all users.');
  }
}

export async function fetchFilteredUsers(query: string) {
  noStore();
  try {
    const data = await sql<UsersTableType>`
		SELECT
		  users.id,
		  users.name,
		  users.email,
		  users.image_url,
		  COUNT(bookings.id) AS total_bookings,
		  SUM(CASE WHEN bookings.status = 'pending' THEN bookings.amount ELSE 0 END) AS total_pending,
		  SUM(CASE WHEN bookings.status = 'paid' THEN bookings.amount ELSE 0 END) AS total_completed
		FROM users
		LEFT JOIN bookings ON users.id = bookings.user_id
		WHERE
		  users.name ILIKE ${`%${query}%`} OR
        users.email ILIKE ${`%${query}%`}
		GROUP BY users.id, users.name, users.email, users.image_url
		ORDER BY users.name ASC
	  `;

    const users = data.rows.map((user) => ({
      ...user,
      total_pending: formatCurrency(user.total_pending),
      total_completed: formatCurrency(user.total_completed),
    }));

    return users;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch user table.');
  }
}

export async function getUser(email: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
