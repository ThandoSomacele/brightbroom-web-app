'use client';
import React, { useState, useRef } from 'react';
import ServiceCard from '../../components/parts/ServiceCard';
import ServicesData from '@/data/services.json';
import AddressInput from '../../components/parts/AddressInput';

// Service Default Prices
const _livingRoomPrice = ServicesData[0].price;
const _kitchenPrice = ServicesData[1].price;
const _bedroomDefaultPrice = ServicesData[2].price * Number(ServicesData[2].defaultRooms);
const _bathroomDefaultPrice = ServicesData[3].price * Number(ServicesData[3].defaultRooms);

// Service Default Hours
const _livingRoomHours = ServicesData[0].hours;
const _kitchenHours = ServicesData[1].hours;
const _bedroomDefaultHours = ServicesData[2].hours * Number(ServicesData[2].defaultRooms);
const _bathroomDefaultHours = ServicesData[3].hours * Number(ServicesData[3].defaultRooms);

// Componet
const Book = () => {
  // Set Total Price
  const [price, setPrice] = useState(_livingRoomPrice + _kitchenPrice + _bedroomDefaultPrice + _bathroomDefaultPrice);

  // Set Total Hours
  const [totalHours, setTotalHours] = useState(
    _livingRoomHours + _kitchenHours + _bedroomDefaultHours + _bathroomDefaultHours
  );

  // Refs
  const formRef = useRef(null);

  //
  const services = ServicesData.map((service: any, i: number) => {
    return (
      <ServiceCard
        service={service}
        key={i}
        price={price}
        setPrice={setPrice}
        totalHours={totalHours}
        setTotalHours={setTotalHours}
      />
    );
  });

  // Fetch Fn
  async function postData(data: BodyInit) {
    const res = await fetch('/api/createBooking', {
      method: 'POST',
      body: data,
    });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }

    return res.text();
  }

  const actionHandler = async (formData: FormData) => {
    // Display the key/value pairs
    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }
  };

  return (
    <div className='container py-10 flex flex-col gap-9 relative'>
      <form action={actionHandler}>
        <div className='sticky top-[79px] w-full z-10 bg-palettes-neutral-90 py-2 mb-8'>
          <div className='container flex justify-center md:ml-9 text-lg'>
            {totalHours} Hours • R {price}
          </div>
        </div>
        <AddressInput />
        <div className='service-selection flex flex-col gap-10 my-8'>{services}</div>
        <button type='submit' className='btn btn-primary w-full fixed bottom-0 right-0 rounded-none'>
          Book a Cleaner
        </button>
      </form>
      {/* <button className='btn btn-secondary fixed bottom-16 right-4'>down</button> */}
    </div>
  );
};

export default Book;
