import { Box } from '@mui/material';
import React from 'react';

import BudgetsList from './components/BudgetsList/BudgetsList';
import Navigation from './components/Navigation/Navigation';
import classes from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <Box>
      <Navigation />
      <Box className={classes.container}>
        <BudgetsList />
      </Box>
    </Box>
  );
};

export default Home;
