import { Card, Typography } from '@mui/material';
import React from 'react';

import { getMonthFromDate } from '@/utils/date';

import classes from './BudgetItem.module.scss';

const BudgetItem: React.FC = () => {
  const data = {
    title: 'Title',
    date: new Date(),
    income: 2000,
    investment: 2000,
  };

  const formattedData = getMonthFromDate(data.date);

  return (
    <Card className={classes.item}>
      <Typography>{data.title}</Typography>
      <Typography>{formattedData}</Typography>
    </Card>
  );
};

export default BudgetItem;
