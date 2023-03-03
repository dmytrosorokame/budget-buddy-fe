import { Box, Card, Divider, Typography } from '@mui/material';
import cn from 'classnames';
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
        <Typography className={classes.month} variant="h6">
          {formattedData}
        </Typography>
        <Box className={classes.stats}>
          <Box>
            <Typography className={cn(classes.text, classes.green)}>INCOME</Typography>
            <Divider />
          </Box>
          <Box>
            <Typography className={cn(classes.text, classes.red)}>EXPENSES</Typography>
            <Divider />
          </Box>
          <Box>
            <Typography className={cn(classes.text, classes.yellow)}>INVESTMENTS</Typography>
            <Divider />
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default BudgetItem;
