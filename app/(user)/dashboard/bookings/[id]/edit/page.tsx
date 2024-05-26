import Form from '@/app/ui/bookings/edit-form';
import Breadcrumbs from '@/app/ui/bookings/breadcrumbs';
import { fetchBookingById, fetchUsers } from '@/app/lib/data';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [booking, users] = await Promise.all([
    fetchBookingById(id),
    fetchUsers(),
  ]);

  if (!booking) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Bookings', href: '/dashboard/bookings' },
          {
            label: 'Edit Booking',
            href: `/dashboard/bookings/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form booking={booking} users={users} />
    </main>
  );
}
