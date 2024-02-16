import React from 'react';
import Image from 'next/image';

function BookedItems() {
  return (
    <ul className='space-y-4'>
      <li className='flex items-center gap-8'>
        {/* service icon */}
        <div className='shrink-0 rounded-full bg-palettes-primary-98 flex place-content-center p-3'>
          <Image
            src='/icons/bedroom.svg'
            alt='bedroom icon'
            className='h-10 w-10 rounded object-contain'
            width={16}
            height={16}
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>

        <div>
          <h3 className='text-sm'>Bedrooms</h3>

          <dl className='mt-0.5 space-y-px text-base'>
            <div>
              <dd className='inline'>3</dd>
            </div>
          </dl>
        </div>

        <div className='flex flex-1 items-center justify-end gap-2'>
          <form>
            <label htmlFor='BedromQty' className='sr-only'>
              {' '}
              Quantity{' '}
            </label>

            <input
              readOnly
              hidden
              type='number'
              min='1'
              value='3'
              id='BedromQty'
              className='h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-base text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none'
            />
          </form>

          <button className='text-palettes-neutral-20 transition hover:text-light-primaryFixed'>
            <span className='sr-only'>Edit item</span>

            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' className='h-4 w-4'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z'
              />
            </svg>
          </button>
        </div>
      </li>
      <li className='flex items-center gap-8'>
        {/* service icon */}
        <div className='shrink-0 rounded-full bg-palettes-primary-98 flex place-content-center p-3'>
          <Image
            src='/icons/bathroom.svg'
            alt='bathroom icon'
            className='h-10 w-10 rounded object-contain'
            width={16}
            height={16}
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>

        <div>
          <h3 className='text-sm'>Bathrooms</h3>

          <dl className='mt-0.5 space-y-px text-base'>
            <div>
              <dd className='inline'>2</dd>
            </div>
          </dl>
        </div>

        <div className='flex flex-1 items-center justify-end gap-2'>
          <form>
            <label htmlFor='BathroomQty' className='sr-only'>
              {' '}
              Quantity{' '}
            </label>

            <input
              readOnly
              hidden
              type='number'
              min='1'
              value='2'
              id='BathroomQty'
              className='h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-base text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none'
            />
          </form>

          <button className='text-palettes-neutral-20 transition hover:text-light-primaryFixed'>
            <span className='sr-only'>Edit item</span>

            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' className='h-4 w-4'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z'
              />
            </svg>
          </button>
        </div>
      </li>
      <li className='flex items-center gap-8'>
        {/* service icon */}
        <div className='shrink-0 rounded-full bg-palettes-primary-98 flex place-content-center p-3'>
          <Image
            src='/icons/laundry.svg'
            alt='bedroom icon'
            className='h-10 w-10 rounded object-contain'
            width={16}
            height={16}
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>

        <div>
          <h3 className='text-sm'>Laundry & Ironing</h3>

          <dl className='mt-0.5 space-y-px text-base'>
            <div>
              <dd className='inline'>Added</dd>
            </div>
          </dl>
        </div>

        <div className='flex flex-1 items-center justify-end gap-2'>
          <form>
            <label htmlFor='BedromQty' className='sr-only'>
              {' '}
              Quantity{' '}
            </label>

            <input
              readOnly
              hidden
              type='text'
              min='1'
              value='Added'
              id='BedromQty'
              className='h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-base text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none'
            />
          </form>

          <button className='text-palettes-neutral-20 transition hover:text-light-primaryFixed'>
            <span className='sr-only'>Edit item</span>

            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' className='h-4 w-4'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z'
              />
            </svg>
          </button>
        </div>
      </li>
    </ul>
  );
}

export default BookedItems;
