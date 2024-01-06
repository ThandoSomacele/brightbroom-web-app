import React from 'react';
import CheckoutProgressBar from '../components/parts/CheckoutProgressBar';
import ProvidedCleaner from '../components/parts/ProvidedCleaner';
import BookingSummary from '../components/parts/BookingSummary';
import CardPayment from '../components/parts/CardPayment';

function page() {
  return (
    <div>
      <CheckoutProgressBar />
      <div className='grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32'>
        <BookingSummary>
          <ProvidedCleaner />
        </BookingSummary>
        <CardPayment />
      </div>
    </div>
  );
}

export default page;
