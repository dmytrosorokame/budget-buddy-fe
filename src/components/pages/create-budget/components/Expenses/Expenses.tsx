import React from 'react';

import { DynamicExpensesProvider } from '@/providers/dynamic-expenses.provider';
import ExpensesList from 'components/pages/create-budget/components/ExpensesList/ExpensesList';

const Expenses: React.FC = () => {
  return (
    <DynamicExpensesProvider>
      <ExpensesList />
    </DynamicExpensesProvider>
  );
};

export default Expenses;
