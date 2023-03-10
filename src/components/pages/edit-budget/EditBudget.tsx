import { Box, CircularProgress } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

import BudgetForm from '@/components/generic/budgets/BudgetForm';
import Container from '@/components/shared/container/Container';
import Navigation from '@/components/shared/navigation/Navigation';
import { ExpensesProvider } from '@/providers/expenses.provider';
import { selectBudgetById } from '@/redux/budgets/budgets.selectors';
import { getBudget, updateBudget } from '@/redux/budgets/budgets.thunks';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { ISubmitBudgetFormData } from '@/types/budgets.types';

const EditBudget: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { id: budgetId } = router.query;
  const budget = useAppSelector((state) => selectBudgetById(Number(budgetId), state));

  const submitFormHandler = ({ id, date, income, expenses }: ISubmitBudgetFormData): void => {
    if (!id) {
      toast.error('No provided id');

      return;
    }

    dispatch(updateBudget({ budgetId: id, dto: { created_at: date, income, expenses } }));
  };

  useEffect(() => {
    if (budget || !Number(budgetId)) return;

    dispatch(getBudget(Number(budgetId)));
  }, [budget, budgetId, dispatch]);

  return (
    <Box>
      <Navigation />
      <Container>
        {budget ? (
          <ExpensesProvider defaultExpenses={budget.expenses}>
            <BudgetForm predefinedBudget={budget} onSubmit={submitFormHandler} />
          </ExpensesProvider>
        ) : (
          <CircularProgress />
        )}
      </Container>
    </Box>
  );
};

export default EditBudget;
