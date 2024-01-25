import React, { useState, Dispatch, SetStateAction } from 'react';
import { ServiceObject, ClickEvent } from '../../../../types';
import BookingAlert from '../alerts/BookingAlert';

function CounterInput({
  service,
  price,
  setPrice,
  totalHours,
  setTotalHours,
}: {
  service: ServiceObject;
  setPrice: Dispatch<SetStateAction<number>>;
  price: number;
  totalHours: number;
  setTotalHours: Dispatch<SetStateAction<number>>;
}) {
  let [count, setCount] = useState(service.defaultRooms);

  // Coutner

  const incrementCounterHandler = (e: ClickEvent) => {
    e.preventDefault();
    if (totalHours + service.hours > 10) {
      alert('Max hours is 10. \nAdjust to prioritise needed services.');
    }

    if (totalHours < 10) {
      setCount(count + 1);
      setPrice((price += service.price));
      setTotalHours((totalHours += service.hours));
    }
  };
  const decrementCounterHandler = (e: ClickEvent) => {
    e.preventDefault();

    if (totalHours - service.hours < 4) {
      alert('Minimum hours is 4. \nAdjust to prioritise needed services.');
    }

    if (count > 1) {
      setCount(count - 1);
      setPrice((price -= service.price));
      setTotalHours((totalHours -= service.hours));
    }
  };

  // const minusCounter;

  return (
    <div className='custom-number-input w-32'>
      <label htmlFor={service.name} className='hidden w-full text-light-onPrimaryFixed text-sm font-semibold'>
        Counter Input
      </label>
      <div className='flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1'>
        <button
          onClick={decrementCounterHandler}
          data-action='increment'
          className={`${service.isDisabled ? 'bg-palettes-neutralVariant-95' : 'bg-light-primaryFixed'} ${
            service.isDisabled ? 'text-palettes-neutralVariant-95' : 'text-light-onPrimaryFixed'
          } ${service.isDisabled ? 'text-palettes-neutralVariant-95' : 'hover:text-light-onPrimaryFixed'} 
          ${
            service.isDisabled ? 'bg-palettes-neutralVariant-95' : 'hover:bg-light-primaryFixedDim'
          }  h-full w-20 rounded-l ${service.isDisabled ? 'cursor-default' : 'cursor-pointer'} outline-none `}>
          <span className='m-auto text-2xl font-thin'>−</span>
        </button>
        <input
          type='number'
          className={`outline-none focus:outline-none text-center w-full ${
            service.isDisabled ? 'bg-palettes-neutralVariant-95' : 'bg-light-primaryFixed'
          } ${
            service.isDisabled ? 'text-palettes-neutralVariant-95' : 'text-light-onPrimaryFixed'
          } text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center`}
          name={service.name}
          value={count}
          disabled={service.isDisabled ? true : false}
          readOnly></input>
        <button
          onClick={incrementCounterHandler}
          data-action='decrement'
          className={`${service.isDisabled ? 'bg-palettes-neutralVariant-95' : 'bg-light-primaryFixed'} ${
            service.isDisabled ? 'text-palettes-neutralVariant-95' : 'text-light-onPrimaryFixed'
          } ${service.isDisabled ? 'text-palettes-neutralVariant-95' : 'hover:text-light-onPrimaryFixed'} ${
            service.isDisabled ? 'bg-palettes-neutralVariant-95' : 'hover:bg-light-primaryFixedDim'
          } h-full w-20 rounded-r ${service.isDisabled ? 'cursor-default' : 'cursor-pointer'}`}>
          <span className='m-auto text-2xl font-thin'>+</span>
        </button>
      </div>
    </div>
  );
}

export default CounterInput;
