import React, { Dispatch, SetStateAction } from 'react';

import { DynamicExpensesProvider } from '@/providers/dynamic-expenses.provider';
import { IExpense } from '@/types/expenses.types';
import ExpensesList from 'components/pages/create-budget/components/ExpensesList/ExpensesList';

interface IExpensesProps {
  expenses: IExpense[];
  setExpenses: Dispatch<SetStateAction<IExpense[]>>;
}

const Expenses: React.FC<IExpensesProps> = ({ expenses, setExpenses }) => (
  <DynamicExpensesProvider expenses={expenses} setExpenses={setExpenses}>
    <ExpensesList />
  </DynamicExpensesProvider>
);

export default Expenses;
