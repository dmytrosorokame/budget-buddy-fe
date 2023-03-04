import CloseIcon from '@mui/icons-material/Close';
import { Box, Card, Divider, IconButton, Typography } from '@mui/material';
import cn from 'classnames';
import React from 'react';

import { IBudget } from '@/types/budgets.types';
import { getMonthFromDate } from '@/utils/date';

import classes from './BudgetItem.module.scss';

interface IBudgetItemProps {
  budget: IBudget;
}

const BudgetItem: React.FC<IBudgetItemProps> = ({ budget }) => {
  const formattedData = getMonthFromDate(new Date(budget.created_at));

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
        <IconButton className={classes.remove}>
          <CloseIcon className={classes.icon} />
        </IconButton>
      </Box>
    </Card>
  );
};

export default BudgetItem;
