import { Box } from '@mui/material';
import React from 'react';

import { IBudget } from '@/types/budgets.types';
import AddBudget from 'components/pages/home/components/AddBudget/AddBudget';
import BudgetItem from 'components/pages/home/components/BudgetItem/BudgetItem';

import classes from './BudgetsList.module.scss';

interface IBudgetsListProps {
  budgets: IBudget[];
}

const BudgetsList: React.FC<IBudgetsListProps> = ({ budgets }) => {
  return (
    <Box className={classes.list}>
      <AddBudget />
      {budgets.map((budget) => (
        <BudgetItem key={budget.id} budget={budget} />
      ))}
    </Box>
  );
};

export default BudgetsList;
