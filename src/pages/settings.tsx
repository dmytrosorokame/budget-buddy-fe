import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { FormEvent, useState } from 'react';

import Container from '@/components/shared/container/Container';
import Navigation from '@/components/shared/navigation/Navigation';
import { Currency, CURRENCY_ARRAY } from '@/constants/currency.constant';

const SettingsPage: React.FC = () => {
  const [currencyValue, setCurrencyValue] = useState<Currency | undefined>();

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
        </Box>
      </Container>
    </Box>
  );
};

export default SettingsPage;
