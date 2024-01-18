'use client';
import React, { useState } from 'react';
import ServiceCard from '../components/parts/ServiceCard';
import ServicesData from '@/data/services.json';
import AddressInput from '../components/parts/AddressInput';

// Service Default Prices
const _livingRoomPrice = ServicesData[0].price;
const _kitchenPrice = ServicesData[1].price;
const _bedroomDefaultPrice = ServicesData[2].price * Number(ServicesData[2].defaultRooms);
const _bathroomDefaultPrice = ServicesData[3].price * Number(ServicesData[3].defaultRooms);

// Service Default Duration
const _livingRoomDuration = ServicesData[0].duration;
const _kitchenDuration = ServicesData[1].duration;
const _bedroomDefaultDuration = ServicesData[2].duration * Number(ServicesData[2].defaultRooms);
const _bathroomDefaultDuration = ServicesData[3].duration * Number(ServicesData[3].defaultRooms);

// Componet
const Book = () => {
  // Set Total Price
  const [price, setPrice] = useState(_livingRoomPrice + _kitchenPrice + _bedroomDefaultPrice + _bathroomDefaultPrice);

  // Set Total Duration
  const [totalDuration, setTotalDuration] = useState(
    _livingRoomDuration + _kitchenDuration + _bedroomDefaultDuration + _bathroomDefaultDuration
  );

  //
  const services = ServicesData.map((service: any, i: number) => {
    return (
      <ServiceCard
        service={service}
        key={i}
        price={price}
        setPrice={setPrice}
        totalDuration={totalDuration}
        setTotalDuration={setTotalDuration}
      />
    );
  });

  return (
    <div className='container py-20 flex flex-col gap-9 relative'>
      <form>
        <div className='fixed top-[79px] right-0 left-0 w-full z-10 bg-palettes-neutral-90 py-2'>
          <div className='container'>
            {totalDuration} Hours • R {price}
          </div>
        </div>
        <AddressInput />
        <div className='service-selection flex flex-col gap-10 my-8'>{services}</div>
        <button type='submit' className='btn btn-primary w-full fixed bottom-0 right-0 rounded-none'>
          R {price} • {totalDuration} Hours
        </button>
      </form>
    </div>
  );
};

export default Book;
