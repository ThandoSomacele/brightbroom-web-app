'use client';

import Image from 'next/image';
import React, { Dispatch, SetStateAction } from 'react';
import CounterInput from './CounterInput';
import SwitchInput from './SwitchInput';
import { Service, Booking } from '@/app/lib/definitions';

function ServiceCard({
  service,
  amount,
  setAmount,
  totalHours,
  setTotalHours,
}: {
  service: Service;
  amount: number;
  setAmount: Dispatch<SetStateAction<number>>;
  totalHours: number;
  setTotalHours: Dispatch<SetStateAction<number>>;
}) {
  const ClockIcon = function () {
    return (
      <React.Fragment>
        <Image
          src={'/icons/clock.svg'}
          width={24}
          height={24}
          alt="clock icon"
        />

        <p className="text-xs font-medium">
          {`approx. ${service.hours} ${Number(service.hours) > 1 ? 'hours' : 'hours'}`}
        </p>
      </React.Fragment>
    );
  };

  let serviceInput:
    | string
    | number
    | boolean
    | React.JSX.Element
    | Iterable<React.ReactNode>
    | React.PromiseLikeOfReactNode
    | null
    | undefined;
  if (service.input_type === 'increment')
    serviceInput = (
      <CounterInput
        service={service}
        setAmount={setAmount}
        amount={amount}
        totalHours={totalHours}
        setTotalHours={setTotalHours}
      />
    );
  else
    serviceInput = (
      <SwitchInput
        service={service}
        setAmount={setAmount}
        amount={amount}
        totalHours={totalHours}
        setTotalHours={setTotalHours}
      />
    );

  return (
    <div className="rounded-xl bg-white p-4 ring ring-light-primary sm:p-6 lg:p-8">
      <div className="flex flex-col items-center sm:gap-8 md:flex-row">
        <div
          className="service-icon w-full sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-light-primary"
          aria-hidden="true"
        >
          <div className="flex items-center gap-1">
            <Image
              src={`/icons/${service.icon}.svg`}
              className="object-contain"
              width={'45'}
              height={'45'}
              alt={`${service.name} icon`}
            />
          </div>
        </div>

        <div className="service-description w-full pt-2 md:w-4/6 md:pt-0">
          <h3 className="text-lg font-medium sm:text-xl">{service.name}</h3>

          <p className="mt-1.5 text-sm text-gray-700">{service.description}</p>

          <div className="mt-4 sm:flex sm:items-center sm:gap-2">
            <div className="hidden items-center gap-1 text-gray-500 md:flex">
              <ClockIcon />
            </div>
          </div>
        </div>

        <div className="service-controller flex w-full justify-between md:w-1/6 md:justify-end">
          <div className="mt-4 sm:flex sm:items-center sm:gap-2 md:hidden">
            <div className="flex items-center gap-1 text-gray-500">
              <ClockIcon />
            </div>
          </div>
          {serviceInput}
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
