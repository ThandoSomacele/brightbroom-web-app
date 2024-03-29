import React from 'react';
import Image from 'next/image';

export default function ProvidedCleaner() {
  return (
    <div>
      <p className='mt-8 text-lg font-medium'>Provided Cleaner</p>
      <form className='mt-5 grid gap-6'>
        <div className='relative'>
          <input className='peer hidden' id='radio_1' type='radio' name='radio' readOnly defaultChecked />
          <span className='peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white'></span>
          <label
            className='peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4'
            htmlFor='radio_1'>
            <Image
              src={'/cleaners/cleaner.jpg'}
              alt='cleaner profile picture'
              width={14}
              height={14}
              className='w-14 object-contain rounded-full'
            />
            <div className='ml-5'>
              <span className='mt-2 font-semibold'>Friddah Masonke</span>
              <p className='text-slate-500 text-sm leading-6'>Vetted | Rating: 4.7</p>
            </div>
          </label>
        </div>
      </form>
    </div>
  );
}
