import { Box, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import React, { useState } from 'react';

import Container from '@/components/shared/container/Container';
import Navigation from '@/components/shared/navigation/Navigation';

import Expenses from './components/Expenses/Expenses';
import classes from './CreateBudget.module.scss';

const CreateBudget: React.FC = () => {
  const [value, setValue] = useState<Date | null>(null);

  const dateChangeHandler = (newValue: Date | null): void => {
    setValue(newValue);
  };

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
              value={value}
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

          <TextField label="Sum" type="number" className={classes.input} />

          <Typography className={classes.subtitle}>Mandatory Expenses</Typography>
          <Expenses />
        </Box>
      </Container>
    </Box>
  );
};

export default CreateBudget;
