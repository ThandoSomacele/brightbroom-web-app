import React from 'react';
import { parseISO, format } from 'date-fns';

type Props = {
  datestring: string;
};

const DateFormatter = ({ datestring }: Props) => {
  const date = parseISO(datestring);
  return <time dateTime={datestring}>{format(date, 'LLLL	d, yyyy')}</time>;
};

export default DateFormatter;
