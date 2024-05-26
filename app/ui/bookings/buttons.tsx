import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteBooking } from '@/app/lib/actions';

export function CreateBooking() {
  return (
    <Link href="/dashboard/bookings/create" className="btn btn-primary flex">
      <span className="hidden md:block">Create Booking</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateBooking({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/bookings/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteBooking({ id }: { id: string }) {
  const deleteBookingWithId = deleteBooking.bind(null, id);

  return (
    <form action={deleteBookingWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
