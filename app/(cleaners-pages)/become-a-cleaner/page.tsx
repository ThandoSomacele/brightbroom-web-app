import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Become a Cleaner',
};

const BecomeACleaner = () => {
  return (
    <iframe
      // className="container"
      src="https://docs.google.com/forms/d/e/1FAIpQLSfj-hmBMxqYtWwkNhbMwpS3qqyVMqr94u29YPtk2haYzNXLDg/viewform?embedded=true"
      width="100%"
      height="3309"
    >
      Loading…
    </iframe>
  );
};

export default BecomeACleaner;
