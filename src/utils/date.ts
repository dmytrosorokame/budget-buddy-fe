import { DateTime } from 'luxon';

import { EMOJI_FOR_SEASONS } from '@/constants/emoji.constant';

export const getMonthFromDate = (date: Date): string => {
  const isoDate = DateTime.fromJSDate(date);

  const monthName = isoDate.toLocaleString({ month: 'long' });

  return `${EMOJI_FOR_SEASONS[isoDate.month]} ${monthName}`;
};
