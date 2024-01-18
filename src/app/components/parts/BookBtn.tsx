import React from 'react';

function BookBtn() {
  return (
    <button type='submit' className='btn btn-primary w-full fixed bottom-0 right-0 rounded-none'>
      R {price} • {totalDuration} Hours
    </button>
  );
}

export default BookBtn;
