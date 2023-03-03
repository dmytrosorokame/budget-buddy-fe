import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Box, IconButton } from '@mui/material';
import React from 'react';

import { useDynamicExpensesContext } from '@/providers/dynamic-expenses.provider';
import Expense from 'components/pages/create-budget/components/Expense/Expense';

const ExpensesList: React.FC = () => {
  const { expenses, addExpenseHandler } = useDynamicExpensesContext();

  return (
    <Box>
      {expenses.map((expense) => (
        <Expense key={expense.id} expense={expense} />
      ))}
      <IconButton onClick={addExpenseHandler}>
        <AddCircleIcon />
      </IconButton>
    </Box>
  );
};

export default ExpensesList;
