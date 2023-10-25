import Link from 'next/link';

const listGenerator = list => {
  list.map((link: string, i: number) => (
    <li className='nav-link' key={i}>
      <Link href={link.href}>{link.text}</Link>
    </li>
  ));
};

export default listGenerator;
