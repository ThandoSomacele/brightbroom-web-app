'use server';
import servicesData from '@/app/lib/services.json';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// -------- Create Invoice ---------- //
const InvoiceFormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
  date: z.string(),
});

const CreateInvoice = InvoiceFormSchema.omit({ id: true, date: true });

export async function createInvoice(formData: FormData) {
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  await sql`
  INSERT INTO invoices (customer_id, amount, status, date)
  VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
`;
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
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

  await sql`
    INSERT INTO bookings (customer_id, amount, status, date)
    VALUES (${rawFormData.customerId}, ${amountInCents}, ${date})
  `;

  revalidatePath('/dashboard/bookings');
}
