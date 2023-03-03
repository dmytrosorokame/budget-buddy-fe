import { Card, Typography } from '@mui/material';
import React from 'react';

import classes from './BudgetItem.scss';

const BudgetItem: React.FC = () => {
  const data = {
    title: 'Title',
    date: Date.now(),
    income: 2000,
    investment: 2000,
  };

  return (
    <Card className={classes.item}>
      <Typography>{data.title}</Typography>
    </Card>
  );
};

export default BudgetItem;
