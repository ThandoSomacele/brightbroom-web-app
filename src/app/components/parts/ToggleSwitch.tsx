import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import { ServiceObject, ChangeEvent } from '../../../../types';

function ToggleSwitch({
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
  const [isChecked, setChecked] = useState(false);

  const addonSwitchHandler = (e: ChangeEvent) => {
    e.preventDefault();
    // TODO
    if (totalHours + service.hours > 10) {
      alert('Maximum hours is 10. \nAdjust to prioritise needed services.');
    }

    if (isChecked === false && totalHours + service.hours <= 10) {
      setChecked(true);
      setPrice((price += service.price));
      setTotalHours((totalHours += service.hours));
    }

    if (totalHours - service.hours < 4) {
      alert('Minimum hours is 4. \nAdjust to prioritise needed services.');
    }

    if (isChecked === true && totalHours >= 4) {
      setChecked(false);
      setPrice(price - service.price);
      setTotalHours((totalHours -= service.hours));
    }
  };

  return (
    <label
      htmlFor={service.name}
      className='relative h-8 w-14 cursor-pointer [-webkit-tap-highlight-color:_transparent]'>
      <input
        type='checkbox'
        onChange={addonSwitchHandler}
        id={service.name}
        name={service.name}
        value='Added'
        defaultChecked={false}
        className='peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden'
      />

      <span className='absolute inset-y-0 start-0 z-10 m-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-light-onPrimary text-palettes-neutralVariant-80 transition-all peer-checked:start-6 peer-checked:text-light-primary'>
        <svg
          data-unchecked-icon
          xmlns='http://www.w3.org/2000/svg'
          className='h-4 w-4'
          viewBox='0 0 20 20'
          fill='currentColor'>
          <path
            fill-rule='evenodd'
            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
            clip-rule='evenodd'
          />
        </svg>

        <svg
          data-checked-icon
          xmlns='http://www.w3.org/2000/svg'
          className='hidden h-4 w-4'
          viewBox='0 0 20 20'
          fill='currentColor'>
          <path
            fill-rule='evenodd'
            d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
            clip-rule='evenodd'
          />
        </svg>
      </span>

      <span className='absolute inset-0 rounded-full bg-palettes-neutralVariant-80 transition peer-checked:bg-light-primaryContainer'></span>
    </label>
  );
}

export default ToggleSwitch;
