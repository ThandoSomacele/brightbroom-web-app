// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.

import { GeneratedAlways } from 'kysely';

export type FormEvent = React.FormEvent<HTMLFormElement>;
export type ClickEvent = React.MouseEvent<HTMLElement>;
export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type SyntheticEvent = React.SyntheticEvent<EventTarget>;

export type Service = {
  name: string;
  description: string;
  hours: number;
  cost: number;
  input_type: string;
  icon?: string;
  isDisabled?: boolean;
  defaultRooms?: number;
  added?: string;
};

export type Booking = {
  totalHours: number;
  amount: number;
  bedrooms?: number;
  bathrooms?: number;
  'laundry & ironing'?: string;
  oven?: string;
  fridge?: string;
  cabinets?: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  emailVerified: string;
  image_url: string;
  contact_number: string;
  address: string;
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestBooking = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestBookingRaw = Omit<LatestBooking, 'amount'> & {
  amount: number;
};

export type BookingsTable = {
  id: string;
  user_id: string;
  user_name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'booked' | 'started' | 'completed';
};

export type UsersTableType = {
  id: string;
  user_name: string;
  email: string;
  image_url: string;
  total_bookings: number;
  total_pending: number;
  total_completed: number;
};

export type FormattedUsersTable = {
  id: string;
  user_name: string;
  email: string;
  image_url: string;
  total_bookings: number;
  total_pending: string;
  total_completed: string;
};

export type UserField = {
  id: string;
  user_name: string;
};

export type BookingForm = {
  id: string;
  user_id: string;
  amount: number;
  status: 'pending' | 'paid';
};
