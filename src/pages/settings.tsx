import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

import Container from '@/components/shared/container/Container';
import Navigation from '@/components/shared/navigation/Navigation';
import { CURRENCY_ARRAY } from '@/constants/currency.constant';

const SettingsPage: React.FC = () => {
  return (
    <Box>
      <Navigation />
      <Container>
        <FormControl fullWidth>
          <InputLabel id="currency-input">Currency</InputLabel>
          <Select labelId="currency-input" label="Currency">
            {CURRENCY_ARRAY.map((currency) => (
              <MenuItem value={currency} key={currency}>
                {currency}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Container>
    </Box>
  );
};

export default SettingsPage;
