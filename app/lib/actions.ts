'use server';
import servicesData from '@/app/lib/services.json';
import { format } from 'date-fns';

export async function createInvoice(formData: FormData) {
  const rawFormData = {
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  };
  // Test it out:
  console.log(rawFormData);
}

export async function createBooking(formData: FormData) {
  const rawFormData = {
    // Customer Info
    // customerId: formData.get('customerId'),
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
    bookingDate: new Date(Date.now()).toISOString(),
    serviceDate: new Date(formData.get('date')).toISOString(),
    servieTime: new Date(formData.get('date')).toTimeString(),

    // Cleaner Info
    cleanerId: 111,
  };
  // Test it out:
  console.log(rawFormData);
}
