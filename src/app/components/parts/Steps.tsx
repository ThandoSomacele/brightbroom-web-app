import Image from 'next/image';

const Steps = () => {
  const howItWorks = [
    { order: 1, desc: 'Choose your location' },
    { order: 2, desc: 'Select a date and time' },
    { order: 3, desc: 'Book your cleaner' },
    { order: 4, desc: 'Enjoy life’s moments' },
  ];

  return (
    <ul className='steps flex flex-col gap-8'>
      {howItWorks.map(step => (
        <li className='step flex gap-6' key={step.order}>
          <Image src={`/steps/step-${step.order}.webp`} width={50} height={50} alt='Step ${step.order} icon' />
          <div className='text flex flex-col'>
            <h3 className='text-lg font-bold text-light-surface'>Step {step.order}</h3>
            <p className='text-2xl text-light-surface'>{step.desc}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Steps;
