// import { cookies } from 'next/headers';
// import qs, { stringify } from 'querystring';

export async function GET(request: Request) {
  const bookingData = request.body;
  console.log(bookingData);
  return new Response('bookingData', {
    status: 200,
    headers: { 'Set-Cookie': 'name=thando' },
  });
}

// export async function POST(request: Request) {
//   const formData = await request.formData()
//   const name = formData.get('name')
//   const email = formData.get('email')
//   return Response.json({ name, email })
// }
