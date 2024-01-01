import React from 'react';

function ToggleSwitch() {
  return (
    <div>
      <label className='relative inline-flex items-center cursor-pointer'>
        <input type='checkbox' value='' className='sr-only peer'></input>
        <div className="w-11 h-6 bg-light-surfaceVariant peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-light-onPrimaryContainer rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-light-onPrimary after:bg-light-surfaceVarian after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-light-primaryContainer"></div>
      </label>
    </div>
  );
}

export default ToggleSwitch;
