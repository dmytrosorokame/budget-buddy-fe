import { Box } from '@mui/material';
import React from 'react';

import Container from '@/components/shared/container/Container';
import Navigation from '@/components/shared/navigation/Navigation';

const EditBudget: React.FC = () => {
  return (
    <Box>
      <Navigation />
      <Container></Container>
    </Box>
  );
};

export default EditBudget;
