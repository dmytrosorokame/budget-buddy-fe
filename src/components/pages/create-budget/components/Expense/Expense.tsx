import { Box, TextField } from '@mui/material';
import React from 'react';

import { useDynamicExpensesContext } from '@/providers/dynamic-expenses.provider';
import { IExpense } from '@/types/expenses.types';

interface IExpenseProps {
  expense: IExpense;
}

const Expense: React.FC<IExpenseProps> = ({ expense }) => {
  const { expenseNameChangeHandler, expenseAmountChangeHandler } = useDynamicExpensesContext();

  const changeNameHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    expenseNameChangeHandler(expense.id, event.target.value);
  };

  const changeAmountHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    expenseAmountChangeHandler(expense.id, +event.target.value);
  };

  return (
    <Box>
      <TextField value={expense.name} onChange={changeNameHandler} />
      <TextField value={expense.amount} onChange={changeAmountHandler} type="number" fullWidth />
    </Box>
  );
};

export default Expense;
