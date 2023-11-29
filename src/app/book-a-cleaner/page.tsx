import React from 'react';
import ServiceCard from '../components/parts/ServiceCard';
import ServicesData from '@/app/site-data/services.json';

const Book = () => {
  const services = ServicesData.map((service: Object, i: number) => {
    return <ServiceCard service={service} key={i} />;
  });

  return (
    <div className='container py-20 flex flex-col gap-9'>
      <div className='address-search'>
        <input type='text' placeholder='Your address' />
      </div>
      <div className='service-selection flex flex-col gap-10'>{services}</div>
    </div>
  );
};

export default Book;
