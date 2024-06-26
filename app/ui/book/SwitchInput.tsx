import React, { Dispatch, SetStateAction, useState } from 'react';
import { Service, ChangeEvent, ClickEvent } from '@/app/lib/definitions';

function SwitchInput({
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
  const [addonAdded, setAddonAdded] = useState(service.added);
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = (event: ClickEvent) => {
    if (!isChecked) {
      if (totalHours + service.hours > 10) {
        alert('Maximum hours is 10. \nAdjust to prioritise needed services.');
        return;
      }
      setAmount((amount += service.cost));
      setTotalHours((totalHours += service.hours));
      setIsChecked(true);
      setAddonAdded('Yes');
    } else {
      if (totalHours - service.hours < 4) {
        alert('Minimum hours is 4. \nAdjust to prioritise needed services.');
        return;
      }
      setAmount((amount -= service.cost));
      setTotalHours((totalHours -= service.hours));
      setIsChecked(false);
      setAddonAdded('No');
    }
  };

  return (
    <label
      htmlFor={service.name}
      className="relative h-8 w-14 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
    >
      <span className="sr-only">{service.name}</span>
      <input
        type="checkbox"
        // onChange={handleClick}
        name={service.name}
        checked={isChecked}
        value={addonAdded}
        className="peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden"
        readOnly
      />

      <span className="absolute inset-y-0 start-0 z-[5] m-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-light-onPrimary text-palettes-neutralVariant-80 transition-all peer-checked:start-6 peer-checked:text-light-primary">
        <svg
          data-unchecked-icon
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>

        <svg
          data-checked-icon
          xmlns="http://www.w3.org/2000/svg"
          className="hidden h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </span>

      <span
        className="absolute inset-0 rounded-full bg-palettes-neutralVariant-80 transition peer-checked:bg-light-primaryContainer"
        onClick={handleClick}
      ></span>
    </label>
  );
}

export default SwitchInput;
