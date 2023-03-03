import { Box, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { DateTime } from 'luxon';
import React, { useMemo, useState } from 'react';

import Container from '@/components/shared/container/Container';
import Navigation from '@/components/shared/navigation/Navigation';
import { useExpensesContext } from '@/providers/dynamic-expenses.provider';
import { ExpensesTypes } from '@/types/expenses.types';

import Expenses from './components/Expenses/Expenses';
import classes from './CreateBudget.module.scss';

const CreateBudget: React.FC = () => {
  const [dateValue, setDateValue] = useState<DateTime | null>(null);
  const [incomeValue, setIncomeValue] = useState('');

  const { expenses } = useExpensesContext();

  const incomeChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setIncomeValue(event.target.value);
  };

  const dateChangeHandler = (newValue: DateTime | null): void => {
    setDateValue(newValue);
  };

  const mandatoryExpensesSum = useMemo(
    () => expenses[ExpensesTypes.MANDATORY].reduce((acc, expense) => acc + +expense.amount, 0),
    [expenses],
  );

  const otherExpensesSum = useMemo(
    () => expenses[ExpensesTypes.OTHER].reduce((acc, expense) => acc + +expense.amount, 0),
    [expenses],
  );

  const investmentsSum = useMemo(
    () => expenses[ExpensesTypes.INVESTMENTS].reduce((acc, expense) => acc + +expense.amount, 0),
    [expenses],
  );

  const incomeWithoutMandatoryExpenses = +incomeValue - mandatoryExpensesSum;
  const incomeWithoutMandatoryAndOtherExpenses = incomeWithoutMandatoryExpenses - otherExpensesSum;
  const incomeWithoutAllExpensesAndInvestments = incomeWithoutMandatoryAndOtherExpenses - investmentsSum;

  const moneyForOneDay =
    dateValue?.daysInMonth && incomeValue
      ? Math.round(incomeWithoutAllExpensesAndInvestments / dateValue?.daysInMonth)
      : null;

  return (
    <Box>
      <Navigation title="Create budget" />
      <Container>
        <Box component="form" className={classes.form}>
          <Typography variant="h4" className={classes.title}>
            Create budget 💰
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

          <FormControl fullWidth className={classes.input}>
            <InputLabel id="currency-input">Currency</InputLabel>
            <Select labelId="currency-input" label="Currency">
              <MenuItem value="UAH">UAH</MenuItem>
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="EUR">EUR</MenuItem>
            </Select>
          </FormControl>

          <TextField
            value={incomeValue}
            onChange={incomeChangeHandler}
            label="Income"
            type="number"
            className={classes.input}
          />

          <Expenses
            title="Mandatory Expenses"
            type={ExpensesTypes.MANDATORY}
            resultText="Income without Mandatory Expenses"
            resultSum={incomeWithoutMandatoryExpenses}
          />

          <Expenses
            title="Other Expenses"
            type={ExpensesTypes.OTHER}
            resultText="Income without Mandatory and Other Expenses"
            resultSum={incomeWithoutMandatoryAndOtherExpenses}
          />

          <Expenses
            title="Investments"
            type={ExpensesTypes.INVESTMENTS}
            resultText="Income without all expenses and investments"
            resultSum={incomeWithoutAllExpensesAndInvestments}
          />

          {moneyForOneDay && (
            <Typography className={classes.result}>
              You can spend <span>{moneyForOneDay}</span> for one day!
            </Typography>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default CreateBudget;
