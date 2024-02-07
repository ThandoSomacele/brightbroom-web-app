'use client';
import React, { useState, useRef } from 'react';
import ServiceCard from '../../components/parts/ServiceCard';
import servicesData from '@/data/services.json';
import AddressInput from '../../components/parts/AddressInput';
import { BookingObject, FormEvent, ServiceObject } from '../../../../types';

// Service Default Prices
const _livingRoomPrice = servicesData['Living Room Areas'].price;
const _kitchenPrice = servicesData['Kitchen'].price;
const _bedroomDefaultPrice = servicesData['Bedrooms'].price * Number(servicesData['Bedrooms'].defaultRooms);
const _bathroomDefaultPrice = servicesData['Bathrooms'].price * Number(servicesData['Bathrooms'].defaultRooms);

// Service Default Hours
const _livingRoomHours = servicesData['Living Room Areas'].hours;
const _kitchenHours = servicesData['Kitchen'].hours;
const _bedroomDefaultHours = servicesData['Bedrooms'].hours * Number(servicesData['Bedrooms'].defaultRooms);
const _bathroomDefaultHours = servicesData['Bathrooms'].hours * Number(servicesData['Bathrooms'].defaultRooms);

// // Default Roomsw
// const _bedrooms = servicesData['Bedrooms'];
// const _bathrooms = servicesData['Bathrooms'];

// Componet
const Book = () => {
  // console.log(servicesData['']);
  // States
  const [price, setPrice] = useState(_livingRoomPrice + _kitchenPrice + _bedroomDefaultPrice + _bathroomDefaultPrice);
  const [totalHours, setTotalHours] = useState(
    _livingRoomHours + _kitchenHours + _bedroomDefaultHours + _bathroomDefaultHours
  );

  const formObj: BookingObject = {
    price,
    totalHours,
    'bedrooms': _bathroomDefaultHours,
    'bathrooms': _bathroomDefaultHours,
    'laundry & ironing': 'off',
    'oven': 'off',
    'fridge': 'off',
    'cabinets': 'off',
  };

  // Form Data State
  const [formData, setFormData] = useState(formObj);
  const servicesArray = Object.values(servicesData);
  const serviceCards = servicesArray.map((service: ServiceObject, i: number) => {
    return (
      <ServiceCard
        service={service}
        key={i}
        price={price}
        setPrice={setPrice}
        totalHours={totalHours}
        setTotalHours={setTotalHours}
        formData={formData}
        setFormData={setFormData}
      />
    );
  });

  // Fetch Fn

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    alert(`Price: ${formData.price}, Hours: ${formData.totalHours}`);
    // const res = await fetch('/api/createBooking', {
    //   method: 'POST',
    //   body: formData,
    // });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    // if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    // throw new Error('Failed to fetch data');
    // }
    // return res.json();
  };

  return (
    <div className='container py-10 flex flex-col gap-9 relative'>
      <form onSubmit={handleSubmit}>
        <div className='sticky top-[79px] w-full z-10 bg-palettes-neutral-90 py-2 mb-8'>
          <div className='container flex justify-center md:ml-9 text-lg'>
            {totalHours} Hours • R {price}
          </div>
        </div>
        <AddressInput />
        <div className='service-selection flex flex-col gap-10 my-8'>{serviceCards}</div>
        <button type='submit' className='btn btn-primary w-full fixed bottom-0 right-0 rounded-none z-40'>
          Book a Cleaner
        </button>
      </form>
      {/* <button className='btn btn-secondary fixed bottom-16 right-4'>down</button> */}
    </div>
  );
};

export default Book;
