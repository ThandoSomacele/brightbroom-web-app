import Form from '@/app/ui/bookings/create-form';
import Breadcrumbs from '@/app/ui/bookings/breadcrumbs';
import { fetchUsers } from '@/app/lib/data';

export default async function Page() {
  const users = await fetchUsers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Bookings', href: '/dashboard/bookings' },
          {
            label: 'Create Booking',
            href: '/dashboard/bookings/create',
            active: true,
          },
        ]}
      />
      <Form users={users} />
    </main>
  );
}
