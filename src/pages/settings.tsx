import { Box } from '@mui/material';
import React from 'react';

import SettingsForm from '@/components/pages/settings/SettingsForm';
import Container from '@/components/shared/container/Container';
import Navigation from '@/components/shared/navigation/Navigation';

const SettingsPage: React.FC = () => {
  return (
    <Box>
      <Navigation />
      <Container>
        <SettingsForm />
      </Container>
    </Box>
  );
};

export default SettingsPage;
