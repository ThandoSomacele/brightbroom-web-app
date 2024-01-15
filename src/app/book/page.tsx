import React from 'react';
import ServiceCard from '../components/parts/ServiceCard';
import ServicesData from '@/app-data/services.json';
import AddressInput from '../components/parts/AddressInput';

const Book = () => {
  const services = ServicesData.map((service: any, i: number) => {
    return <ServiceCard service={service} key={i} />;
  });

  return (
    <>
      <div className='container py-20 flex flex-col gap-9'>
        <form>
          <AddressInput />
          <div className='service-selection flex flex-col gap-10 my-8'>{services}</div>
        </form>
      </div>
      <button type='submit' className='btn btn-primary w-full fixed bottom-0'>
        Book Cleaner
      </button>
    </>
  );
};

export default Book;
