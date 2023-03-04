import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { FormEvent, useEffect, useState } from 'react';

import Container from '@/components/shared/container/Container';
import Navigation from '@/components/shared/navigation/Navigation';
import { Currency, CURRENCY_ARRAY } from '@/constants/currency.constant';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { selectUserCurrency } from '@/redux/user/user.selectors';
import { getMe } from '@/redux/user/user.thunks';

const SettingsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const [currencyValue, setCurrencyValue] = useState<Currency | undefined>();

  const userCurrency = useAppSelector(selectUserCurrency);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    setCurrencyValue(userCurrency);
  }, [userCurrency]);

  const currencyChangeHandler = (event: SelectChangeEvent<Currency>): void => {
    const newValue = event.target.value as Currency;

    setCurrencyValue(newValue);
  };

  const formSubmitHandler = (event: FormEvent): void => {
    event.preventDefault();
  };

  return (
    <Box>
      <Navigation />
      <Container>
        <Box component="form" onSubmit={formSubmitHandler}>
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
          <Button type="submit" variant="contained">
            Save
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default SettingsPage;
