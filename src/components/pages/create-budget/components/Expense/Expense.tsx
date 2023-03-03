import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Box, IconButton, TextField } from '@mui/material';
import React from 'react';

import { useDynamicExpensesContext } from '@/providers/dynamic-expenses.provider';
import { IExpense } from '@/types/expenses.types';

import classes from './Expense.module.scss';

interface IExpenseProps {
  expense: IExpense;
}

const Expense: React.FC<IExpenseProps> = ({ expense }) => {
  const { expenseNameChangeHandler, expenseAmountChangeHandler, removeExpenseHandler } = useDynamicExpensesContext();

  const changeNameHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    expenseNameChangeHandler(expense.id, event.target.value);
  };

  const changeAmountHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    expenseAmountChangeHandler(expense.id, event.target.value);
  };

  return (
    <Box className={classes.wrapper}>
      <TextField label="Name" value={expense.name} onChange={changeNameHandler} className={classes.input} />
      <TextField
        label="Amount"
        value={expense.amount}
        onChange={changeAmountHandler}
        type="number"
        className={classes.input}
      />
      <IconButton onClick={removeExpenseHandler.bind(this, expense.id)}>
        <RemoveCircleIcon color="error" />
      </IconButton>
    </Box>
  );
};

export default Expense;
