import React from 'react';

function CounterInput() {
  return (
    <div className='custom-number-input w-32'>
      <label htmlFor='custom-input-number' className='hidden w-full text-light-onPrimaryFixed text-sm font-semibold'>
        Counter Input
      </label>
      <div className='flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1'>
        <button
          data-action='decrement'
          className='  bg-light-primaryFixed text-light-onPrimaryFixed hover:text-light-onPrimaryFixed hover:bg-light-primaryFixedDim h-full w-20 rounded-l cursor-pointer outline-none'>
          <span className='m-auto text-2xl font-thin'>−</span>
        </button>
        <input
          type='number'
          className='outline-none focus:outline-none text-center w-full  bg-light-primaryFixed text-light-onPrimaryFixed text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center'
          name='custom-input-number'
          value='0'></input>
        <button
          data-action='increment'
          className=' bg-light-primaryFixed text-light-onPrimaryFixed hover:text-light-onPrimaryFixed hover:bg-light-primaryFixedDim h-full w-20 rounded-r cursor-pointer'>
          <span className='m-auto text-2xl font-thin'>+</span>
        </button>
      </div>
    </div>
  );
}

export default CounterInput;
