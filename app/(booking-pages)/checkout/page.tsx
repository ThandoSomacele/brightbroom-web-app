import React from 'react';
import CheckoutProgressBar from '../../ui/parts/CheckoutProgressBar';
import ProvidedCleaner from '../../ui/parts/ProvidedCleaner';
import CardPayment from '../../ui/parts/CardPayment';
import BookedItems from '../../ui/parts/BookedItems';

function page() {
  return (
    <div>
      <CheckoutProgressBar />
      <div className='container grid lg:grid-cols-2'>
        <div className='px-4 pt-8'>
          <p className='text-xl font-medium'>Booking Summary</p>
          <p className='text-gray-400'>Check your items before proceeding to make payment.</p>
          <div className='mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6'>
            <BookedItems />
          </div>
          <ProvidedCleaner />
        </div>
        <CardPayment />
      </div>
    </div>
  );
}

export default page;
