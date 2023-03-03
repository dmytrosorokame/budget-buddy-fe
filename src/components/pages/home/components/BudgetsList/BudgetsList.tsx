import { Box } from '@mui/material';
import React from 'react';

import AddBudget from 'components/pages/home/components/AddBudget/AddBudget';
import BudgetItem from 'components/pages/home/components/BudgetItem/BudgetItem';

import classes from './BudgetsList.module.scss';

const BudgetsList: React.FC = () => {
  return (
    <Box className={classes.list}>
      <AddBudget />
      <BudgetItem />
    </Box>
  );
};

export default BudgetsList;
