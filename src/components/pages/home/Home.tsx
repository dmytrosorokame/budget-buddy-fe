import { Box, Typography } from '@mui/material';
import React from 'react';

import BudgetsList from './components/BudgetsList/BudgetsList';
import Navigation from './components/Navigation/Navigation';
import classes from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <Box>
      <Navigation />
      <Box className={classes.container}>
        <Box className={classes.header}>
          <Typography variant="h2" className={classes.title}>
            Welcome back!
          </Typography>
          <Typography variant="h5">This is your budget 🤑</Typography>
        </Box>

        <BudgetsList />
      </Box>
    </Box>
  );
};

export default Home;
