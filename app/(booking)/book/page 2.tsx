'use client';
import React, { useState, useRef } from 'react';
import ServiceCard from '../../components/ui/ServiceCard';
import servicesData from '@/data/services.json';
import AddressInput from '../../components/ui/AddressInput';
import { BookingObject, ClickEvent, FormEvent, ServiceObject } from '../../lib/definitions';

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
    'bedrooms': _bedroomDefaultHours,
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

  const handleSubmit = async (event: ClickEvent) => {
    event.preventDefault();
    // console.log(formData);
    const res = fetch('/api/createBooking', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  };

  return (
    <div className='container py-10 flex flex-col gap-9 relative'>
      <form>
        <div className='sticky top-[79px] w-full z-10 bg-palettes-neutral-90 py-2 mb-8'>
          <div className='container flex justify-center md:ml-9 text-lg'>
            {totalHours} Hours • R {price}
          </div>
        </div>
        <AddressInput />
        <div className='service-selection flex flex-col gap-10 my-8'>{serviceCards}</div>
        <button
          type='submit'
          className='btn btn-primary w-full fixed bottom-0 right-0 rounded-none z-40'
          onClick={handleSubmit}>
          Book a Cleaner
        </button>
      </form>
      {/* <button className='btn btn-secondary fixed bottom-16 right-4'>down</button> */}
    </div>
  );
};

export default Book;
