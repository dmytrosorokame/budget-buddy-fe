import { DateTime } from 'luxon';

import { EMOJI_FOR_SEASONS } from '@/constants/emoji.constant';
import { IBudget } from '@/types/budgets.types';

export const getMonthFromDate = (date: Date): string => {
  const isoDate = DateTime.fromJSDate(date);

  const monthName = isoDate.toLocaleString({ month: 'long' });

  return `${EMOJI_FOR_SEASONS[isoDate.month]} ${monthName}`;
};

export const sortBudgetsByDate = (firstBudget: IBudget, secondBudget: IBudget): number => {
  const firstDate = DateTime.fromJSDate(new Date(firstBudget.created_at));
  const secondDate = DateTime.fromJSDate(new Date(secondBudget.created_at));

  if (firstDate < secondDate) {
    return -1;
  }
  if (firstDate > secondDate) {
    return 1;
  }

  return 0;
};
