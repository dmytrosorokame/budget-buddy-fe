import { Box } from '@mui/material';
import React from 'react';

import Container from '@/components/shared/container/Container';
import Navigation from '@/components/shared/navigation/Navigation';

const CreateBudget: React.FC = () => {
  return (
    <Box>
      <Navigation title="Create budget" />
      <Container></Container>
    </Box>
  );
};

export default CreateBudget;
