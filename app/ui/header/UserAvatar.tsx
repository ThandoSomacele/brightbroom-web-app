import { auth } from '@/auth';
import Image from 'next/image';
// import AccountMenu from '../header/AccountMenu';
// import React, { Dispatch, SetStateAction, useState } from 'react';

export default async function UserAvatar() {
  // const [displayAccMenu, setDisplayAccMenu] = useState('hidden');

  const session = await auth();
  console.log(session?.user);

  if (!session?.user) return null;

  // const toggleAccMenu = () => {
  //   if (displayAccMenu === 'block') setDisplayAccMenu('hidden');
  //   else setDisplayAccMenu('block');
  // };

  return (
    <div>
      <Image
        src={`${session?.user.image}`}
        alt="User Avatar"
        width={40}
        height={40}
        className="cursor-pointer rounded-full object-cover md:h-12 md:w-12"
        // onClick={toggleAccMenu}
      />
      {/* <AccountMenu
        displayAccMenu={displayAccMenu}
        setDisplayAccMenu={setDisplayAccMenu}
      /> */}
    </div>
  );
}
