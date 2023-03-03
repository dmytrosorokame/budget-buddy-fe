import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Box, Divider, IconButton, Typography } from '@mui/material';
import React from 'react';

import { useExpensesContext } from '@/providers/dynamic-expenses.provider';
import { ExpensesTypes } from '@/types/expenses.types';
import Expense from 'components/pages/create-budget/components/Expense/Expense';

import classes from './Expenses.module.scss';

interface IExpensesProps {
  type: ExpensesTypes;
  title: string;
  resultText: string;
  resultSum: number;
  withDivider?: boolean;
}

const Expenses: React.FC<IExpensesProps> = ({ type, title, resultText, resultSum, withDivider = true }) => {
  const { expenses, addExpenseHandler } = useExpensesContext();

  const expensesByType = expenses[type];

  return (
    <Box className={classes.expenses}>
      <Typography className={classes.subtitle}>{title}</Typography>

      <Box>
        {expensesByType.map((expense) => (
          <Expense key={expense.id} expense={expense} type={type} />
        ))}
        <IconButton onClick={addExpenseHandler.bind(this, type)} className={classes.button}>
          <AddCircleIcon color="primary" />
        </IconButton>
      </Box>

      <Box className={classes.result}>
        <Typography className={classes.text}>{resultText}:</Typography>
        <Typography className={classes.text}>{resultSum}</Typography>
      </Box>

      {withDivider && <Divider />}
    </Box>
  );
};

export default Expenses;
