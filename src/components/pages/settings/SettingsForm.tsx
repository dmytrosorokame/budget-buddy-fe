import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import React, { FormEvent, useEffect, useState } from 'react';

import { Currency, CURRENCY_ARRAY } from '@/constants/currency.constant';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { selectUserCurrency } from '@/redux/user/user.selectors';
import { getMe, updateUser } from '@/redux/user/user.thunks';

import classes from './SettingsForm.module.scss';

const SettingsForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const [currencyValue, setCurrencyValue] = useState<Currency | undefined>(Currency.USD);

  const userCurrency = useAppSelector(selectUserCurrency);

  const currencyChangeHandler = (event: SelectChangeEvent<Currency>): void => {
    const newValue = event.target.value as Currency;

    setCurrencyValue(newValue);
  };

  const formSubmitHandler = (event: FormEvent): void => {
    event.preventDefault();

    dispatch(updateUser({ currency: currencyValue }));
  };

  useEffect(() => {
    if (userCurrency) return;

    dispatch(getMe());
  }, [dispatch, userCurrency]);

  useEffect(() => {
    setCurrencyValue(userCurrency);
  }, [userCurrency]);

  return (
    <Box component="form" onSubmit={formSubmitHandler} className={classes.form}>
      <Typography className={classes.title} variant="h4">
        Your settings ⚙️
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="currency-input">Currency</InputLabel>
        <Select labelId="currency-input" label="Currency" value={currencyValue} onChange={currencyChangeHandler}>
          {CURRENCY_ARRAY.map((currency) => (
            <MenuItem value={currency} key={currency}>
              {currency}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box className={classes.wrapper}>
        <Button type="submit" variant="contained" className={classes.button}>
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default SettingsForm;
