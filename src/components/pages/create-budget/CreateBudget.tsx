import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

import BudgetForm from '@/components/generic/budgets/BudgetForm';
import Container from '@/components/shared/container/Container';
import Navigation from '@/components/shared/navigation/Navigation';
import { createBudget, getAllBudgets } from '@/redux/budgets/budgets.thunks';
import { useAppDispatch } from '@/redux/store';
import { IBudgetCreate, ISubmitBudgetFormData } from '@/types/budgets.types';
import { TExpenseCreate } from '@/types/expenses.types';

const CreateBudget: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const submitFormHandler = ({ expenses, date, income }: ISubmitBudgetFormData): void => {
    const expensesWithoutId: TExpenseCreate[] = expenses.map((expense) => ({
      type: expense.type,
      name: expense.name,
      amount: expense.amount,
    }));

    const budgetData: IBudgetCreate = {
      created_at: date,
      income,
      expenses: expensesWithoutId,
    };

    dispatch(createBudget(budgetData));
    dispatch(getAllBudgets());

    router.push('/');
  };

  return (
    <Box>
      <Navigation title="Create budget" />
      <Container>
        <BudgetForm title="Create budget 💰" onSubmit={submitFormHandler} />
      </Container>
    </Box>
  );
};

export default CreateBudget;
