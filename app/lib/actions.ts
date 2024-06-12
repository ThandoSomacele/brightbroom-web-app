'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

// // -------- Create Booking ---------- //
// const BookingFormSchema = z.object({
//   id: z.string(),
//   userId: z.string({
//     invalid_type_error: 'Please select a user',
//   }),
//   amount: z.coerce
//     .number()
//     .gt(0, { message: 'Please enter an amount greater than R0.' }),
//   status: z.enum(['pending', 'paid'], {
//     invalid_type_error: 'Please select an booking status.',
//   }),
//   date: z.string(),
// });

const BookingFormSchema = z.object({
  // User Info
  user_id: z.string(),
  user_first_name: z.string(),
  user_last_name: z.string(),
  email: z.string(),
  contact_number: z.string(),
  address: z.string(),
  // Booking Info
  bed_rooms: z.coerce.number(),
  bath_booms: z.coerce.number(),
  laundry_and_ironing: z.enum(['Yes', 'No']),
  oven: z.enum(['Yes', 'No']),
  fridge: z.enum(['Yes', 'No']),
  cabinets: z.enum(['Yes', 'No']),
  total_hours: z.coerce.number(),
  amount: z.coerce.number(),
  date: z.string(),
  service_date: z.string(),
  service_time: z.string(),
  status: z.enum(['pending', 'booked', 'started', 'completed']),
  // Cleaner Info
  cleaner_id: z.string(),
});

const CreateBooking = BookingFormSchema.omit({ id: true, date: true });

export type State = {
  errors?: {
    userId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export async function createBooking(
  prevState: State,
  formData: FormData,
): Promise<State> {
  // Validate form using Zod
  const validatedFields = CreateBooking.safeParse({
    userId: formData.get('userId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Booking.',
    };
  }

  // Prepare data for insertion into the database
  const { user_id, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  // Insert data into the database
  try {
    await sql`
      INSERT INTO bookings (user_id, amount, status, date)
      VALUES (${user_id}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: 'Database Error: Failed to Create Booking.',
    };
  }

  // Revalidate the cache for the bookings page and redirect the user.
  revalidatePath('/dashboard/bookings');
  redirect('/dashboard/bookings');
}

// // Use Zod to update the expected types
const UpdateBooking = BookingFormSchema.omit({ id: true, date: true });

export async function updateBooking(id: string, formData: FormData) {
  const { user_id, amount, status } = UpdateBooking.parse({
    userId: formData.get('userId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  const amountInCents = amount * 100;

  try {
    await sql`
    UPDATE bookings
    SET user_id = ${user_id}, amount = ${amountInCents}, status = ${status}
    WHERE id = ${id}
  `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Booking' };
  }

  revalidatePath('/dashboard/bookings');
  redirect('/dashboard/bookings');
}

export async function deleteBooking(id: string) {
  try {
    await sql`DELETE FROM bookings WHERE id = ${id}`;
    revalidatePath('/dashboard/bookings');
    return { message: 'Deleted Booking.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Booking.' };
  }
}

// -------- Create Booking ---------- //

// export async function createBooking(formData: FormData) {
//   const dateValue = formData.get('date');

//   const rawFormData = CreateBooking.parse({
//     // User Info
//     user_id: '412Ts',
//     user_first_name: 'Thando',
//     user_last_name: 'Somacele',
//     email: 'thando.somacele@gmail.com',
//     contact_number: '0722251491',
//     address: '123 Baker Street',
//     // Booking Info
//     bed_rooms: Number(formData.get(servicesData['Bedrooms'].name)),
//     bath_rooms: Number(formData.get(servicesData['Bathrooms'].name)),
//     laundry_and_ironing:
//       formData.get(servicesData['Laundry & Ironing'].name) || 'No',
//     oven: formData.get(servicesData['Oven'].name) || 'No',
//     fridge: formData.get(servicesData['Fridge'].name) || 'No',
//     cabinets: formData.get(servicesData['Cabinets'].name) || 'No',
//     total_hours: Number(formData.get('totalHours')),
//     amount: Number(formData.get('amount')),
//     service_date: new Date(
//       typeof dateValue === 'string' ? dateValue : Date.now(),
//     ).toISOString(),
//     service_time: new Date(
//       typeof dateValue === 'string' ? dateValue : Date.now(),
//     ).toTimeString(),
//     status: 'pending',
//     // Cleaner Info
//     cleaner_id: '111',
//   });

//   const amountInCents = rawFormData.amount * 100;
//   const date = new Date().toISOString().split('T')[0];

//   try {
//     await sql`
//   INSERT INTO bookings (user_id, amount, status, date)
//   VALUES (${rawFormData.user_id}, ${amountInCents}, ${date})
// `;
//   } catch (error) {
//     return { message: 'Database Error: Failed to Create Booking' };
//   }

//   revalidatePath('/dashboard/bookings');
// }

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function handleGoogleSignIn() {
  await signIn('google');
}

export async function handlePostmarkSignIn(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('postmark', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid email.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
