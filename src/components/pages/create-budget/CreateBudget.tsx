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

  const incomeChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setIncomeValue(+event.target.value);
  };

  const dateChangeHandler = (newValue: Date | null): void => {
    setDateValue(newValue);
  };

  const mandatoryExpensesSum = mandatoryExpenses.reduce((acc, expense) => acc + +expense.amount, 0);

  const incomeSumWithoutMandatoryExpenses = +incomeValue - mandatoryExpensesSum;

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
            Income without Mandatory Expenses - {incomeSumWithoutMandatoryExpenses}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default CreateBudget;
