import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';

import Container from '@/components/shared/container/Container';
import { selectAllBudgets } from '@/redux/budgets/budgets.selectors';
import { getAllBudgets } from '@/redux/budgets/budgets.thunks';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import Navigation from 'components/shared/navigation/Navigation';

import BudgetsList from './components/BudgetsList/BudgetsList';
import classes from './Home.module.scss';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const budgets = useAppSelector(selectAllBudgets);

  useEffect(() => {
    if (budgets.length) return;

    dispatch(getAllBudgets());
  }, [dispatch, budgets]);

  return (
    <Box>
      <Navigation />
      <Container>
        <Box className={classes.header}>
          <Typography variant="h2" className={classes.title}>
            Welcome back!
          </Typography>
          <Typography variant="h5">This is your budget 🤑</Typography>
        </Box>

        <BudgetsList budgets={budgets} />
      </Container>
    </Box>
  );
};

export default Home;
