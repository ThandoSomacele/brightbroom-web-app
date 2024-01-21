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
    <div>
      <label className='relative inline-flex items-center cursor-pointer'>
        <input
          type='checkbox'
          className='sr-only peer'
          onChange={addonSwitchHandler}
          name={service.name}
          value='1'
          checked={isChecked}
        />
        <div className="w-11 h-6 bg-light-surfaceVariant peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-light-onPrimaryContainer rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-light-onPrimary after:bg-light-surfaceVarian after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-light-primaryContainer"></div>
      </label>
    </div>
  );
}

export default ToggleSwitch;
