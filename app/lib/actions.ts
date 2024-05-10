'use server';
import servicesData from '@/app/lib/services.json';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// -------- Create Invoice ---------- //
const InvoiceFormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'Please select a customer',
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than R0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.',
  }),
  date: z.string(),
});

const CreateInvoice = InvoiceFormSchema.omit({ id: true, date: true });

export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export async function createInvoice(
  prevState: State,
  formData: FormData,
): Promise<State> {
  // Validate form using Zod
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  // Prepare data for insertion into the database
  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  // Insert data into the database
  try {
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

// Use Zod to update the expected types
const UpdateInvoice = InvoiceFormSchema.omit({ id: true, date: true });

export async function updateInvoice(id: string, formData: FormData) {
  const { customerId, amount, status } = UpdateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  const amountInCents = amount * 100;

  try {
    await sql`
    UPDATE invoices
    SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
    WHERE id = ${id}
  `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Invoice' };
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/dashboard/invoices');
    return { message: 'Deleted Invoice.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Invoice.' };
  }
}

// -------- Create Booking ---------- //
const BookingFormSchema = z.object({
  // Customer Info
  customerId: z.string(),
  customerFirstName: z.string(),
  customerLastName: z.string(),
  email: z.string(),
  contactNumber: z.string(),
  address: z.string(),
  // Booking Info
  bedRooms: z.coerce.number(),
  bathRooms: z.coerce.number(),
  laundryAndIroning: z.enum(['Yes', 'No']),
  oven: z.enum(['Yes', 'No']),
  fridge: z.enum(['Yes', 'No']),
  cabinets: z.enum(['Yes', 'No']),
  totalHours: z.coerce.number(),
  amount: z.coerce.number(),
  date: z.string(),
  serviceDate: z.string(),
  serviceTime: z.string(),
  // Cleaner Info
  cleanerId: z.string(),
});

const CreateBooking = BookingFormSchema.omit({ id: true, date: true });

export async function createBooking(formData: FormData) {
  const dateValue = formData.get('date');

  const rawFormData = CreateBooking.parse({
    // Customer Info
    customerId: '412Ts',
    customerFirstName: 'Thando',
    customerLastName: 'Somacele',
    email: 'thando.somacele@gmail.com',
    contactNumber: '0722251491',
    address: '123 Baker Street',
    // Booking Info
    bedRooms: Number(formData.get(servicesData['Bedrooms'].name)),
    bathRooms: Number(formData.get(servicesData['Bathrooms'].name)),
    laundryAndIroning:
      formData.get(servicesData['Laundry & Ironing'].name) || 'No',
    oven: formData.get(servicesData['Oven'].name) || 'No',
    fridge: formData.get(servicesData['Fridge'].name) || 'No',
    cabinets: formData.get(servicesData['Cabinets'].name) || 'No',
    totalHours: Number(formData.get('totalHours')),
    amount: Number(formData.get('amount')),
    serviceDate: new Date(
      typeof dateValue === 'string' ? dateValue : Date.now(),
    ).toISOString(),
    serviceTime: new Date(
      typeof dateValue === 'string' ? dateValue : Date.now(),
    ).toTimeString(),
    // Cleaner Info
    cleanerId: '111',
  });

  const amountInCents = rawFormData.amount * 100;
  const date = new Date().toISOString().split('T')[0];

  try {
    await sql`
  INSERT INTO bookings (customer_id, amount, status, date)
  VALUES (${rawFormData.customerId}, ${amountInCents}, ${date})
`;
  } catch (error) {
    return { message: 'Database Error: Failed to Create Booking' };
  }

  revalidatePath('/dashboard/bookings');
}
