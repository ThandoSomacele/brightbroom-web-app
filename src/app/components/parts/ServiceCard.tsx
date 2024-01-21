'use client';

import Image from 'next/image';
import React, { Dispatch, SetStateAction } from 'react';

import CounterInput from './CounterInput';
import ToggleSwitch from './ToggleSwitch';
import { ServiceObject } from '../../../../types';

function ServiceCard({
  service,
  price,
  setPrice,
  totalHours,
  setTotalHours,
}: {
  service: ServiceObject;
  price: number;
  setPrice: Dispatch<SetStateAction<number>>;
  totalHours: number;
  setTotalHours: Dispatch<SetStateAction<number>>;
}) {
  const ClockIcon = function () {
    return (
      <React.Fragment>
        <Image src={'/icons/clock.svg'} width={24} height={24} alt='clock icon' />

        <p className='text-xs font-medium'>
          {`approx. ${service.hours} ${Number(service.hours) > 1 ? 'hours' : 'hours'}`}
        </p>
      </React.Fragment>
    );
  };

  let inputBtn;
  if (service.input_type === 'increment')
    inputBtn = (
      <CounterInput
        service={service}
        setPrice={setPrice}
        price={price}
        totalHours={totalHours}
        setTotalHours={setTotalHours}
      />
    );
  else
    inputBtn = (
      <ToggleSwitch
        service={service}
        setPrice={setPrice}
        price={price}
        totalHours={totalHours}
        setTotalHours={setTotalHours}
      />
    );

  return (
    <div className='rounded-xl bg-white p-4 ring ring-light-primary sm:p-6 lg:p-8'>
      <div className='flex flex-col md:flex-row items-center sm:gap-8'>
        <div
          className='service-icon sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-light-primary w-full'
          aria-hidden='true'>
          <div className='flex items-center gap-1'>
            <Image
              src={`/icons/${service.icon}.svg`}
              className='object-contain'
              width={'45'}
              height={'45'}
              alt={`${service.name} icon`}
            />
          </div>
        </div>

        <div className='service-description w-full md:w-4/6 pt-2 md:pt-0'>
          <h3 className='text-lg font-medium sm:text-xl'>{service.name}</h3>

          <p className='mt-1.5 text-sm text-gray-700'>{service.description}</p>

          <div className='mt-4 sm:flex sm:items-center sm:gap-2'>
            <div className='hidden md:flex items-center gap-1 text-gray-500'>
              <ClockIcon />
            </div>
          </div>
        </div>

        <div className='service-controller flex justify-between md:justify-end w-full md:w-1/6'>
          <div className='mt-4 sm:flex sm:items-center sm:gap-2 md:hidden'>
            <div className='flex items-center gap-1 text-gray-500'>
              <ClockIcon />
            </div>
          </div>
          {inputBtn}
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
