import React from 'react';

import CreateBudget from '@/components/pages/create-budget/CreateBudget';
import { ExpensesProvider } from '@/providers/dynamic-expenses.provider';

const CreateBudgetPage: React.FC = () => {
  return (
    <ExpensesProvider>
      <CreateBudget />
    </ExpensesProvider>
  );
};

export default CreateBudgetPage;
