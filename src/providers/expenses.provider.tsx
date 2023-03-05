import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ExpenseTypes, IExpense } from '@/types/expenses.types';

interface IExpensesContext {
  expenses: IExpense[];
  addExpenseHandler: (type: ExpenseTypes) => void;
  expenseNameChangeHandler: (id: string, name: string) => void;
  expenseAmountChangeHandler: (id: string, amount: number) => void;
  removeExpenseHandler: (id: string) => void;
}

const expensesContext = createContext<IExpensesContext>({
  expenses: [],
  addExpenseHandler: () => {
    return;
  },
  expenseNameChangeHandler: () => {
    return;
  },
  expenseAmountChangeHandler: () => {
    return;
  },
  removeExpenseHandler: () => {
    return;
  },
});

export const useExpensesContext = (): IExpensesContext => useContext(expensesContext);

export const ExpensesProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [expenses, setExpenses] = useState<IExpense[]>([]);

  const changeExpenseHandler = (id: string, fieldName: keyof IExpense, value: string): void => {
    const expensesCopy = [...expenses];

    const currentExpenseIndex = expensesCopy.findIndex((expense) => expense.id === id);
    const currentExpenseCopy = expensesCopy[currentExpenseIndex];

    currentExpenseCopy[fieldName] = value as never;
    expensesCopy[currentExpenseIndex] = currentExpenseCopy;

    setExpenses(expensesCopy);
  };

  const addExpenseHandler = (type: ExpenseTypes): void => {
    const newExpense: IExpense = { id: uuidv4(), name: '', amount: 0, type };

    setExpenses([...expenses, newExpense]);
  };

  const removeExpenseHandler = (id: string): void => {
    const filteredExpenses = expenses.filter((expense) => expense.id !== id);

    setExpenses(filteredExpenses);
  };

  const expenseNameChangeHandler = (id: string, name: string): void => {
    changeExpenseHandler(id, 'name', name);
  };

  const expenseAmountChangeHandler = (id: string, amount: number): void => {
    changeExpenseHandler(id, 'amount', amount);
  };

  return (
    <expensesContext.Provider
      value={{
        expenses,
        addExpenseHandler,
        expenseNameChangeHandler,
        expenseAmountChangeHandler,
        removeExpenseHandler,
      }}
    >
      {children}
    </expensesContext.Provider>
  );
};
