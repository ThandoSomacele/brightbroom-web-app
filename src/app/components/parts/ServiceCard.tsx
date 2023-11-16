import Image from 'next/image';
import React from 'react';
import CounterInput from '../ui/CounterInput';

function ServiceCard() {
  return (
    <div className='rounded-xl bg-white p-4 ring ring-light-primary sm:p-6 lg:p-8'>
      <div className='flex items-center sm:gap-8'>
        <div
          className='service-icon hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-light-primary w-1/6'
          aria-hidden='true'>
          <div className='flex items-center gap-1'>
            <Image
              src='/booking-services/bedroom.webp'
              className='object-contain'
              width={'45'}
              height={'45'}
              alt='bedroom icon'
            />
          </div>
        </div>

        <div className='service-description w-4/6'>
          <h3 className='text-lg font-medium sm:text-xl'>
            <a href='' className='hover:underline'>
              Bedroom
            </a>
          </h3>

          <p className='mt-1 text-sm text-gray-700'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam nulla amet voluptatum sit rerum, atque, quo
            culpa ut necessitatibus eius suscipit eum accusamus, aperiam voluptas exercitationem facere aliquid fuga.
            Sint.
          </p>

          <div className='mt-4 sm:flex sm:items-center sm:gap-2'>
            <div className='flex items-center gap-1 text-gray-500'>
              <svg
                className='h-4 w-4'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'></path>
              </svg>

              <p className='text-xs font-medium'>
                approx. 60 minutes<sup>*</sup>
              </p>
            </div>
          </div>
        </div>

        <div className='service-controller flex justify-end w-1/6'>
          <CounterInput />
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
