'use client';
import React, { useState } from 'react';
import ServiceCard from '@/app/ui/book/ServiceCard';
import servicesData from '@/app/lib/services.json';
import AddressInput from '@/app/ui/book/AddressInput';
import { createBooking } from '@/app/lib/actions';
import { Service } from '@/app/lib/definitions';
import DateInput from '@/app/ui/book/DateInput';

// Service Default Amounts
const _livingRoomAmount = servicesData['Living Room Areas'].cost;
const _kitchenAmount = servicesData['Kitchen'].cost;
const _bedroomDefaultAmount =
  servicesData['Bedrooms'].cost * Number(servicesData['Bedrooms'].defaultRooms);
const _bathroomDefaultAmount =
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

// Componet
const Page = () => {
  // States
  const [amount, setAmount] = useState(
    _livingRoomAmount +
      _kitchenAmount +
      _bedroomDefaultAmount +
      _bathroomDefaultAmount,
  );
  const [totalHours, setTotalHours] = useState(
    _livingRoomHours +
      _kitchenHours +
      _bedroomDefaultHours +
      _bathroomDefaultHours,
  );

  // Service Cards
  const services = Object.values(servicesData);
  const serviceCards = services.map((service: Service, i: number) => {
    return (
      <ServiceCard
        service={service}
        key={i}
        amount={amount}
        setAmount={setAmount}
        totalHours={totalHours}
        setTotalHours={setTotalHours}
      />
    );
  });

  return (
    <>
      <title>Book | BrightBroom </title>
      <form action={createBooking}>
        <div className="container relative flex flex-col gap-9 py-10 pt-20">
          <div className="fixed right-0 top-[79px] z-10 mb-8 w-full bg-palettes-neutral-90 py-2">
            <div className="flex justify-center md:ml-9">
              <p className=" text-xl font-semibold">
                {totalHours} Hours • R {amount}
              </p>
            </div>
          </div>
          <AddressInput />
          <DateInput />
          <div className="hidden">
            <label
              htmlFor="totalHours"
              className="text-sm font-medium text-gray-700"
            >
              <span className="sr-only">Total Hours</span>
            </label>
            <input
              type="number"
              name="totalHours"
              defaultValue={totalHours}
              hidden
            />
          </div>
          <div className="hidden">
            <label
              htmlFor="amount"
              className="text-sm font-medium text-gray-700"
            >
              <span className="sr-only">Total Hours</span>
            </label>
            <input type="number" name="amount" defaultValue={amount} hidden />
          </div>
          <div className="flex flex-col gap-10">{serviceCards}</div>
          <button
            type="submit"
            className="btn btn-primary w-full py-4 text-lg"
            // onClick={handleSubmit}
          >
            Book Your Cleaner Now
          </button>
        </div>
      </form>
    </>
  );
};

export default Page;
