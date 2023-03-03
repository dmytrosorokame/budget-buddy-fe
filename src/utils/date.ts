import { DateTime } from 'luxon';

export const getMonthFromDate = (date: Date): string => {
  const isoDate = DateTime.fromJSDate(date);

  const monthName = isoDate.toLocaleString({ month: 'long' });

  return monthName;
};
