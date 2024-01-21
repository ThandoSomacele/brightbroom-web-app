// import { cookies } from 'next/headers';

export async function GET(request: Request) {
  // const cookieStore = cookies();
  // const token = cookieStore.get('token');

  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { 'Set-Cookie': `name=thando` },
  });
}

// export async function POST(request: Request) {
//   const formData = await request.formData()
//   const name = formData.get('name')
//   const email = formData.get('email')
//   return Response.json({ name, email })
// }
