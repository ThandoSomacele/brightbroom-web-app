import React, { useState, Dispatch, SetStateAction } from 'react';
import { ServiceObject, ClickEvent } from '../../../../types';
import BookingAlert from '../alerts/BookingAlert';

function CounterInput({
  service,
  price,
  setPrice,
  totalDuration,
  setTotalDuration,
}: {
  service: ServiceObject;
  setPrice: Dispatch<SetStateAction<number>>;
  price: number;
  totalDuration: number;
  setTotalDuration: Dispatch<SetStateAction<number>>;
}) {
  let [count, setCount] = useState(service.defaultRooms);

  // Coutner

  const incrementCounterHandler = (e: ClickEvent) => {
    e.preventDefault();
    if (totalDuration + service.duration > 10) {
      alert('Max hours is 10. \nAdjust to prioritise needed services.');
      return;
    }

    if (totalDuration < 10) {
      setCount(count + 1);
      setPrice((price += service.price));
      setTotalDuration((totalDuration += service.duration));
      return;
    }
  };
  const decrementCounterHandler = (e: ClickEvent) => {
    e.preventDefault();

    if (totalDuration - service.duration < 4) {
      alert('Minimum hours is 4. \nAdjust to prioritise needed services.');
      return;
    }

    if (count > 1) {
      setCount(count - 1);
      setPrice((price -= service.price));
      setTotalDuration((totalDuration -= service.duration));
      return;
    }
  };

  // const minusCounter;

  return (
    <div className='custom-number-input w-32'>
      <label htmlFor='custom-input-number' className='hidden w-full text-light-onPrimaryFixed text-sm font-semibold'>
        Counter Input
      </label>
      <div className='flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1'>
        <button
          onClick={decrementCounterHandler}
          data-action='increment'
          className={`${service.isDisabled ? 'bg-light-surfaceDim' : 'bg-light-primaryFixed'} ${
            service.isDisabled ? 'text-light-surfaceDim' : 'text-light-onPrimaryFixed'
          } ${service.isDisabled ? 'text-light-surfaceDim' : 'hover:text-light-onPrimaryFixed'} 
          ${service.isDisabled ? 'bg-light-surfaceDim' : 'hover:bg-light-primaryFixedDim'}  h-full w-20 rounded-l ${
            service.isDisabled ? 'cursor-default' : 'cursor-pointer'
          } outline-none `}>
          <span className='m-auto text-2xl font-thin'>−</span>
        </button>
        <input
          type='number'
          className={`outline-none focus:outline-none text-center w-full ${
            service.isDisabled ? 'bg-light-surfaceDim' : 'bg-light-primaryFixed'
          } ${
            service.isDisabled ? 'text-light-surfaceDim' : 'text-light-onPrimaryFixed'
          } text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center`}
          name='custom-input-number'
          defaultValue={count}
          disabled={service.isDisabled ? true : false}></input>
        <button
          onClick={incrementCounterHandler}
          data-action='decrement'
          className={`${service.isDisabled ? 'bg-light-surfaceDim' : 'bg-light-primaryFixed'} ${
            service.isDisabled ? 'text-light-surfaceDim' : 'text-light-onPrimaryFixed'
          } ${service.isDisabled ? 'text-light-surfaceDim' : 'hover:text-light-onPrimaryFixed'} ${
            service.isDisabled ? 'bg-light-surfaceDim' : 'hover:bg-light-primaryFixedDim'
          } h-full w-20 rounded-r ${service.isDisabled ? 'cursor-default' : 'cursor-pointer'}`}>
          <span className='m-auto text-2xl font-thin'>+</span>
        </button>
      </div>
    </div>
  );
}

export default CounterInput;
