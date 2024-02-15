import React from 'react';
import Link from 'next/link';

interface linkObject {
  href: string;
  text: string;
}
const LinkList = (linkList: Array<linkObject>) => {
  return linkList.map((linkItem: linkObject, i: number) => (
    <li key={i}>
      <Link href={linkItem.href}>{linkItem.text}</Link>
    </li>
  ));
};

export default LinkList;
