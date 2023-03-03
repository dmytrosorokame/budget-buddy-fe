import { Box, Typography } from '@mui/material';
import React from 'react';

import Expenses from 'components/pages/create-budget/components/Expenses/Expenses';

const MandatoryExpenses: React.FC = () => {
  return (
    <Box>
      <Typography>Mandatory Expenses</Typography>
      <Expenses />
    </Box>
  );
};

export default MandatoryExpenses;
