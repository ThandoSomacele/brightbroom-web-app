import React from 'react';
import ServiceCard from '../components/parts/ServiceCard';

const Book = () => {
  return (
    <div className='container py-20 flex flex-col gap-9'>
      <div className='address-search'>
        <input type='text' placeholder='Your address' />
      </div>
      <div className='service-selection flex flex-col gap-10'>
        <ServiceCard />
      </div>
    </div>
  );
};

export default Book;
