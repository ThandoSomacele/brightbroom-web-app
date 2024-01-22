import { useRef } from 'react';
import { ClickEvent } from '../../../../types';

interface BookingData {
  'bedroom': number;
  'bathroom': number;
  'laundary & ironing': string;
  'fridge': string;
  'oven': string;
  'cabinents': string;
  'totalHour': number;
}

// Fetch Fn
async function postData(data: BodyInit) {
  const res = await fetch('/api/createBooking', {
    method: 'POST',
    body: data,
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.text();
}

// Component
function BookBtn({ totalHours }: { totalHours: number }) {
  const bookingForm = useRef(document.querySelector('#bookingForm'));
  const actionHandler = async (e: ClickEvent) => {
    e.preventDefault();

    console.log(bookingForm);

    const bookingFormData = new FormData(bookingForm);

    // bookingFormData.append('hours', '2');
    console.log(bookingFormData.keys());

    // const data = await postData(bookingFormData);
  };

  return (
    <button
      type='submit'
      onClick={actionHandler}
      className='btn btn-primary w-full fixed bottom-0 right-0 rounded-none'>
      Book a Cleaner
    </button>
  );
}

export default BookBtn;
