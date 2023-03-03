import { Box, Card, Typography } from '@mui/material';
import React from 'react';

import { getMonthFromDate } from '@/utils/date';

import classes from './BudgetItem.module.scss';

const BudgetItem: React.FC = () => {
  const data = {
    title: 'My plan for ',
    date: new Date(),
    income: 2000,
    investment: 2000,
  };

  const formattedData = getMonthFromDate(data.date);

  return (
    <Card className={classes.item}>
      <Box className={classes.wrapper}>
        <Typography variant="body1" color="#808080">
          {formattedData}
        </Typography>
      </Box>
    </Card>
  );
};

export default BudgetItem;
