import { Box, Button, TextField, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { DateTime } from 'luxon';
import { useRouter } from 'next/router';
import React, { FormEvent, useMemo, useState } from 'react';

import { useExpensesContext } from '@/providers/expenses.provider';
import { IBudget } from '@/types/budgets.types';
import { ExpenseTypes } from '@/types/expenses.types';
import Expenses from 'components/pages/create-budget/components/Expenses/Expenses';

import classes from './EditBudgetForm.module.scss';

interface IEditBudgetFormProps {
  budget: IBudget;
}

const EditBudgetForm: React.FC<IEditBudgetFormProps> = ({ budget }) => {
  const router = useRouter();

  const [dateValue, setDateValue] = useState<DateTime | null>(DateTime.fromJSDate(new Date(budget.created_at)));
  const [incomeValue, setIncomeValue] = useState(budget.income);

  const { expenses } = useExpensesContext();

  const formIsValid = dateValue && incomeValue && expenses;

  const mandatoryExpenses = expenses.filter((expense) => expense.type === ExpenseTypes.MANDATORY);
  const otherExpenses = expenses.filter((expense) => expense.type === ExpenseTypes.OTHER);
  const investmentsExpenses = expenses.filter((expense) => expense.type === ExpenseTypes.INVESTMENTS);

  const incomeChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setIncomeValue(+event.target.value);
  };

  const dateChangeHandler = (newValue: DateTime | null): void => {
    setDateValue(newValue);
  };

  const mandatoryExpensesSum = useMemo(
    () => mandatoryExpenses.reduce((acc, expense) => acc + expense.amount, 0),
    [mandatoryExpenses],
  );

  const otherExpensesSum = useMemo(
    () => otherExpenses.reduce((acc, expense) => acc + expense.amount, 0),
    [otherExpenses],
  );

  const investmentsSum = useMemo(
    () => investmentsExpenses.reduce((acc, expense) => acc + expense.amount, 0),
    [investmentsExpenses],
  );

  const incomeWithoutMandatoryExpenses = incomeValue - mandatoryExpensesSum;
  const incomeWithoutMandatoryAndOtherExpenses = incomeWithoutMandatoryExpenses - otherExpensesSum;
  const incomeWithoutAllExpensesAndInvestments = incomeWithoutMandatoryAndOtherExpenses - investmentsSum;

  const moneyForOneDay =
    dateValue?.daysInMonth && incomeValue
      ? Math.round(incomeWithoutAllExpensesAndInvestments / dateValue?.daysInMonth)
      : null;

  const cancelHandler = (): void => {
    router.push('/');
  };

  const submitFormHandler = (event: FormEvent): void => {
    event.preventDefault();
  };

  return (
    <Box component="form" className={classes.form} onSubmit={submitFormHandler}>
      <Typography variant="h4" className={classes.title}>
        Budget 💰
      </Typography>

      <LocalizationProvider dateAdapter={AdapterLuxon}>
        <DatePicker
          label="Month"
          views={['month']}
          inputFormat="MMMM"
          value={dateValue}
          onChange={dateChangeHandler}
          renderInput={(params) => <TextField {...params} />}
          className={classes.input}
        />
      </LocalizationProvider>

      <TextField
        value={incomeValue}
        onChange={incomeChangeHandler}
        label="Income"
        type="number"
        className={classes.input}
      />

      <Expenses
        title="Mandatory Expenses"
        type={ExpenseTypes.MANDATORY}
        expenses={mandatoryExpenses}
        resultText="Income without Mandatory Expenses"
        resultSum={incomeWithoutMandatoryExpenses}
      />

      <Expenses
        title="Other Expenses"
        type={ExpenseTypes.OTHER}
        expenses={otherExpenses}
        resultText="Income without Mandatory and Other Expenses"
        resultSum={incomeWithoutMandatoryAndOtherExpenses}
      />

      <Expenses
        title="Investments"
        type={ExpenseTypes.INVESTMENTS}
        expenses={investmentsExpenses}
        resultText="Income without all expenses and investments"
        resultSum={incomeWithoutAllExpensesAndInvestments}
      />

      {moneyForOneDay && (
        <Typography className={classes.result}>
          You can spend <span>{moneyForOneDay}</span> for one day!
        </Typography>
      )}

      <Box className={classes.buttons}>
        <Button className={classes.button} variant="outlined" onClick={cancelHandler}>
          Back
        </Button>
        <Button type="submit" className={classes.button} variant="contained" disabled={!formIsValid}>
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default EditBudgetForm;