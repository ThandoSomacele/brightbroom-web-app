import React, { useState, Dispatch, SetStateAction } from 'react';
import {
  ServiceObject,
  ClickEvent,
  BookingObject,
  ChangeEvent,
} from '@/app/lib/definitions';

function CounterInput({
  service,
  price,
  setPrice,
  totalHours,
  setTotalHours,
  formData,
  setFormData,
}: {
  service: ServiceObject;
  setPrice: Dispatch<SetStateAction<number>>;
  price: number;
  totalHours: number;
  setTotalHours: Dispatch<SetStateAction<number>>;
  formData: BookingObject;
  setFormData: Dispatch<SetStateAction<BookingObject>>;
}) {
  let [count, setCount] = useState(service.defaultRooms);

  // Coutner
  const handleIncrementClick = (event: ClickEvent) => {
    event.preventDefault();
    if (totalHours + service.hours > 10) {
      alert('Max hours is 10. \nAdjust to prioritise needed services.');
      return;
    }
    // const { name, value } = event.target;

    if (totalHours < 10) {
      setCount(count + 1);
      setPrice((price += service.cost));
      setTotalHours((totalHours += service.hours));

      // formData change
      setFormData((prevFormData) => ({
        ...prevFormData,
        price,
        totalHours,
        [service.name]: count,
      }));
      console.log(formData);
    }
  };

  const handleDecrementClick = (event: ClickEvent) => {
    event.preventDefault();
    if (totalHours - service.hours < 4) {
      alert('Minimum hours is 4. \nAdjust to prioritise needed services.');
      return;
    }

    if (count > 1) {
      setCount(count - 1);
      setPrice((price -= service.cost));
      setTotalHours((totalHours -= service.hours));

      // formData change
      setFormData((prevFormData) => ({
        ...prevFormData,
        price,
        totalHours,
        [service.name]: count,
      }));
      console.log(formData);
    }
  };

  // const handleChange = (event: ChangeEvent) => {
  //   event.preventDefault();
  //   const { name } = event.target;

  //   // formData change
  //   setFormData(prevFormData => ({ ...prevFormData, price, totalHours, [name]: count }));
  //   console.log(formData);
  // };

  // const minusCounter;
  return (
    <div className="custom-number-input w-32">
      <label
        htmlFor={service.name}
        className="hidden w-full text-sm font-semibold text-light-onPrimaryFixed"
      >
        Counter Input
      </label>
      <div className="relative mt-1 flex h-10 w-full flex-row rounded-lg bg-transparent">
        <button
          onClick={handleDecrementClick}
          data-action="increment"
          className={`${service.isDisabled ? 'bg-palettes-neutralVariant-95' : 'bg-light-primaryFixed'} ${
            service.isDisabled
              ? 'text-palettes-neutralVariant-95'
              : 'text-light-onPrimaryFixed'
          } ${service.isDisabled ? 'text-palettes-neutralVariant-95' : 'hover:text-light-onPrimaryFixed'} 
          ${
            service.isDisabled
              ? 'bg-palettes-neutralVariant-95'
              : 'hover:bg-light-primaryFixedDim'
          }  h-full w-20 rounded-l ${service.isDisabled ? 'cursor-default' : 'cursor-pointer'} outline-none `}
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input
          type="number"
          className={`w-full text-center outline-none focus:outline-none ${
            service.isDisabled
              ? 'bg-palettes-neutralVariant-95'
              : 'bg-light-primaryFixed'
          } ${
            service.isDisabled
              ? 'text-palettes-neutralVariant-95'
              : 'text-light-onPrimaryFixed'
          } text-md md:text-basecursor-default flex items-center hover:text-black focus:text-black`}
          name={service.name}
          value={count}
          disabled={service.isDisabled ? true : false}
          readOnly
        ></input>
        <button
          onClick={handleIncrementClick}
          data-action="decrement"
          className={`${service.isDisabled ? 'bg-palettes-neutralVariant-95' : 'bg-light-primaryFixed'} ${
            service.isDisabled
              ? 'text-palettes-neutralVariant-95'
              : 'text-light-onPrimaryFixed'
          } ${service.isDisabled ? 'text-palettes-neutralVariant-95' : 'hover:text-light-onPrimaryFixed'} ${
            service.isDisabled
              ? 'bg-palettes-neutralVariant-95'
              : 'hover:bg-light-primaryFixedDim'
          } h-full w-20 rounded-r ${service.isDisabled ? 'cursor-default' : 'cursor-pointer'}`}
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
}

export default CounterInput;
