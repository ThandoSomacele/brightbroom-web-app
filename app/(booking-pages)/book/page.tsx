'use client';
import React, { useState, useRef } from 'react';
import ServiceCard from '@/app/ui/book/ServiceCard';
import servicesData from '@/app/lib/services.json';
import AddressInput from '@/app/ui/book/AddressInput';
import {
  BookingObject,
  ClickEvent,
  FormEvent,
  ServiceObject,
} from '@/app/lib/definitions';

// Service Default Prices
const _livingRoomPrice = servicesData['Living Room Areas'].cost;
const _kitchenPrice = servicesData['Kitchen'].cost;
const _bedroomDefaultPrice =
  servicesData['Bedrooms'].cost * Number(servicesData['Bedrooms'].defaultRooms);
const _bathroomDefaultPrice =
  servicesData['Bathrooms'].cost *
  Number(servicesData['Bathrooms'].defaultRooms);

// Service Default Hours
const _livingRoomHours = servicesData['Living Room Areas'].hours;
const _kitchenHours = servicesData['Kitchen'].hours;
const _bedroomDefaultHours =
  servicesData['Bedrooms'].hours *
  Number(servicesData['Bedrooms'].defaultRooms);
const _bathroomDefaultHours =
  servicesData['Bathrooms'].hours *
  Number(servicesData['Bathrooms'].defaultRooms);

// // Default Roomsw
// const _bedrooms = servicesData['Bedrooms'];
// const _bathrooms = servicesData['Bathrooms'];

// Componet
const Page = () => {
  // console.log(servicesData['']);
  // States
  const [price, setPrice] = useState(
    _livingRoomPrice +
      _kitchenPrice +
      _bedroomDefaultPrice +
      _bathroomDefaultPrice,
  );
  const [totalHours, setTotalHours] = useState(
    _livingRoomHours +
      _kitchenHours +
      _bedroomDefaultHours +
      _bathroomDefaultHours,
  );

  const formObj: BookingObject = {
    price,
    totalHours,
    bedrooms: _bedroomDefaultHours,
    bathrooms: _bathroomDefaultHours,
    'laundry & ironing': 'off',
    oven: 'off',
    fridge: 'off',
    cabinets: 'off',
  };

  // Form Data State
  const [formData, setFormData] = useState(formObj);
  const servicesArray = Object.values(servicesData);
  const serviceCards = servicesArray.map(
    (service: ServiceObject, i: number) => {
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
    },
  );

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
    <div className="container relative flex flex-col gap-9 py-10 pt-20">
      <form>
        <div className="fixed right-0 top-[79px] z-10 mb-8 w-full bg-palettes-neutral-90 py-2">
          <div className="flex justify-center md:ml-9">
            <p className=" text-xl font-semibold">
              {totalHours} Hours • R {price}
            </p>
          </div>
        </div>
        <AddressInput />
        <div className="service-selection my-8 flex flex-col gap-10">
          {serviceCards}
        </div>
        <button
          type="submit"
          className="btn btn-primary w-full py-4 text-lg"
          onClick={handleSubmit}
        >
          Book Your Cleaner Now
        </button>
      </form>
    </div>
  );
};

export default Page;
