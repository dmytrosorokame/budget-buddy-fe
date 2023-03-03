import { Box, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import React, { useState } from 'react';

import Container from '@/components/shared/container/Container';
import Navigation from '@/components/shared/navigation/Navigation';
import { IExpense } from '@/types/expenses.types';

import Expenses from './components/Expenses/Expenses';
import classes from './CreateBudget.module.scss';

const CreateBudget: React.FC = () => {
  const [dateValue, setDateValue] = useState<Date | null>(null);
  const [incomeValue, setIncomeValue] = useState(0);

  const [mandatoryExpenses, setMandatoryExpenses] = useState<IExpense[]>([]);
  const [otherExpenses, setOtherExpenses] = useState<IExpense[]>([]);
  const [investments, setInvestments] = useState<IExpense[]>([]);

  const incomeChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setIncomeValue(+event.target.value);
  };

  const dateChangeHandler = (newValue: Date | null): void => {
    setDateValue(newValue);
  };

  const mandatoryExpensesSum = mandatoryExpenses.reduce((acc, expense) => acc + +expense.amount, 0);
  const otherExpensesSum = otherExpenses.reduce((acc, expense) => acc + +expense.amount, 0);
  const investmentsSum = investments.reduce((acc, investment) => acc + +investment.amount, 0);

  const incomeWithoutMandatoryExpenses = +incomeValue - mandatoryExpensesSum;
  const incomeWithoutMandatoryAndOtherExpenses = incomeWithoutMandatoryExpenses - otherExpensesSum;
  const incomeWithoutAllExpensesAndInvestments = incomeWithoutMandatoryAndOtherExpenses - investmentsSum;

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

          <Typography className={classes.subtitle}>Mandatory Expenses</Typography>
          <Expenses expenses={mandatoryExpenses} setExpenses={setMandatoryExpenses} />

          <Typography className={classes.subtitle}>
            Income without Mandatory Expenses - {incomeWithoutMandatoryExpenses}
          </Typography>

          <Typography className={classes.subtitle}>Others Expenses</Typography>
          <Expenses expenses={otherExpenses} setExpenses={setOtherExpenses} />

          <Typography className={classes.subtitle}>
            Income without Mandatory and Other Expenses - {incomeWithoutMandatoryAndOtherExpenses}
          </Typography>

          <Typography className={classes.subtitle}>Investments</Typography>
          <Expenses expenses={investments} setExpenses={setInvestments} />

          <Typography className={classes.subtitle}>
            Income without all expenses and investments - {incomeWithoutAllExpensesAndInvestments}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default CreateBudget;
