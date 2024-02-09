import { cookies } from 'next/headers';
// import qs, { stringify } from 'querystring';

export async function POST(request: Request) {
  const bookingData = await request.json();
  bookingData.name = 'Thando';
  bookingData.email = 'tsomacele@gmail.com';
  bookingData.address = '123 ABC street, Fourways, 2191';
  console.log(bookingData);
  return new Response(JSON.stringify(bookingData), {
    status: 200,
  });
}

// export async function POST(request: Request) {
//   const formData = await request.formData()
//   const name = formData.get('name')
//   const email = formData.get('email')
//   return Response.json({ name, email })
// }
