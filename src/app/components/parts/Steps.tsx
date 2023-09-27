import Image from 'next/image';

const Steps = () => {
  return (
    <ul className='steps'>
      <li className='step flex gap-3' key={1}>
        <Image src='/steps/step-1.webp' width={50} height={50} alt='Step 1 icon' />
        <div className='text'>
          <h3 className='text__title-large text-light-surface'>Step 1</h3>
          <p>Choose your location</p>
        </div>
      </li>
    </ul>
  );
};
export default Steps;
