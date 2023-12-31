import React from 'react';

interface ServiceObject {
  name: String;
  description: String;
  duration: Number;
  icon: String;
  price: Number;
  input_type: String;
  isDisabled: Boolean;
}

function CounterInput({ service }: { service: ServiceObject }) {
  return (
    <div className='custom-number-input w-32'>
      <label htmlFor='custom-input-number' className='hidden w-full text-light-onPrimaryFixed text-sm font-semibold'>
        Counter Input
      </label>
      <div className='flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1'>
        <button
          data-action='decrement'
          className={`${service.isDisabled ? 'bg-light-surfaceDim' : 'bg-light-primaryFixed'} ${
            service.isDisabled ? 'text-light-surfaceDim' : 'text-light-onPrimaryFixed'
          } hover:text-light-onPrimaryFixed ${
            service.isDisabled ? 'bg-light-surfaceDim' : 'hover:bg-light-primaryFixedDim'
          }  h-full w-20 rounded-l ${service.isDisabled ? 'cursor-default' : 'cursor-pointer'} outline-none `}>
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
          defaultValue='1'
          disabled={service.isDisabled ? true : false}></input>
        <button
          data-action='increment'
          className={`${service.isDisabled ? 'bg-light-surfaceDim' : 'bg-light-primaryFixed'} ${
            service.isDisabled ? 'text-light-surfaceDim' : 'text-light-onPrimaryFixed'
          } hover:text-light-onPrimaryFixed ${
            service.isDisabled ? 'bg-light-surfaceDim' : 'hover:bg-light-primaryFixedDim'
          } h-full w-20 rounded-r ${service.isDisabled ? 'cursor-default' : 'cursor-pointer'}`}>
          <span className='m-auto text-2xl font-thin'>+</span>
        </button>
      </div>
    </div>
  );
}

export default CounterInput;
