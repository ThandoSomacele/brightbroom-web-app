import Pagination from '@/app/ui/bookings/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/bookings/table';
import { CreateBooking } from '@/app/ui/bookings/buttons';
import { BookingsTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchBookingsPages } from '@/app/lib/data';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchBookingsPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`text-2xl`}>Bookings</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search bookings..." />
        <CreateBooking />
      </div>
      <Suspense key={query + currentPage} fallback={<BookingsTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
