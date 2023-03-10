import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import Container from '@/components/shared/container/Container';
import Navigation from '@/components/shared/navigation/Navigation';
import { selectBudgetById } from '@/redux/budgets/budgets.selectors';
import { getBudget } from '@/redux/budgets/budgets.thunks';
import { useAppDispatch, useAppSelector } from '@/redux/store';

const EditBudget: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id: budgetId } = router.query;

  const budget = useAppSelector((state) => selectBudgetById(Number(budgetId), state));

  useEffect(() => {
    if (budget || !Number(budgetId)) return;

    dispatch(getBudget(Number(budgetId)));
  }, [budget, dispatch, budgetId]);

  return (
    <Box>
      <Navigation />
      <Container>{budget?.expenses.map((expense) => expense.name)}</Container>
    </Box>
  );
};

export default EditBudget;
