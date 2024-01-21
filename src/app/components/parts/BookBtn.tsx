import { ClickEvent } from '../../../../types';

// Fetch Fn
async function getData() {
  const res = await fetch('/api/createBooking');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.text();
}

// Component
function BookBtn() {
  const actionHandler = async (e: ClickEvent) => {
    e.preventDefault();
    console.log(' coming...');
    const data = await getData();
    console.log(data);
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
