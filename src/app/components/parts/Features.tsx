import Image from 'next/image';

const Features = () => {
  const featuresList = [
    {
      order: 1,
      title: 'Hassle-Free Booking',
      desc: 'With us, you don’t have to worry about labour law.',
      icon: '/features/hassle-free-icon.webp',
    },
    {
      order: 2,
      title: 'Skilled Cleaners, Trusted Service',
      desc: 'Trained and vetted cleaners.',
      icon: '/features/skilled-cleaners-icon.webp',
    },
    {
      order: 3,
      title: 'Competitive Pricing',
      desc: 'Our competitive rates don’t compromise on excellence.',
      icon: '/features/competitive-pricing-icon.webp',
    },
    {
      order: 4,
      title: 'No Long-Term Commitments',
      desc: 'Book when you need, cancel when you want.',
      icon: '/features/no-commitments-icon.webp',
    },
  ];

  return (
    <ul className='features flex flex-wrap gap-4'>
      {featuresList.map(feature => (
        <li
          className='feature flex flex-col gap-3 bg-light-onPrimary drop-shadow-md rounded-lg p-8 w-full md:w-[48%]'
          key={feature.order}>
          <Image
            src={feature.icon}
            width={70}
            height={70}
            alt={`${feature.title} icon`}
            style={{ objectFit: 'contain' }}
          />
          <div className='text flex flex-col gap-3'>
            <h3 className='text-lg font-bold w-40'>{feature.title}</h3>
            <p className='text__body-large'>{feature.desc}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Features;
