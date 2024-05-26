import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { fetchCardData } from '@/app/lib/data';

const iconMap = {
  collected: BanknotesIcon,
  users: UserGroupIcon,
  pending: ClockIcon,
  bookings: InboxIcon,
};

export default async function CardWrapper() {
  const {
    numberOfBookings,
    numberOfUsers,
    totalPaidBookings,
    totalPendingBookings,
  } = await fetchCardData();
  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}

      <Card title="Collected" value={totalPaidBookings} type="collected" />
      <Card title="Pending" value={totalPendingBookings} type="pending" />
      <Card title="Total Bookings" value={numberOfBookings} type="bookings" />
      <Card title="Total Users" value={numberOfUsers} type="users" />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'bookings' | 'users' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
