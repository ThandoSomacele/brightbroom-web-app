import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import { ServiceObject, ChangeEvent } from '../../../../types';

function ToggleSwitch({
  service,
  price,
  setPrice,
  totalDuration,
  setTotalDuration,
}: {
  service: ServiceObject;
  price: number;
  setPrice: Dispatch<SetStateAction<number>>;
  totalDuration: number;
  setTotalDuration: Dispatch<SetStateAction<number>>;
}) {
  const [isChecked, setChecked] = useState(false);

  const addonSwitchHandler = (e: ChangeEvent) => {
    // TODO
    if (isChecked === false && totalDuration < 10 && (totalDuration += service.duration) > 10) {
      setChecked(true);
      setPrice((price += service.price));
      setTotalDuration((totalDuration += service.duration));
    }

    if (isChecked === true && totalDuration > 3) {
      setChecked(false);
      setPrice((price -= service.price));
      setTotalDuration((totalDuration -= service.duration));
    }
  };

  return (
    <div>
      <label className='relative inline-flex items-center cursor-pointer'>
        <input type='checkbox' className='sr-only peer' onChange={addonSwitchHandler} checked={isChecked} />
        <div className="w-11 h-6 bg-light-surfaceVariant peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-light-onPrimaryContainer rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-light-onPrimary after:bg-light-surfaceVarian after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-light-primaryContainer"></div>
      </label>
    </div>
  );
}

export default ToggleSwitch;
