import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ExpensesTypes, IExpense } from '@/types/expenses.types';

interface IExpensesState {
  [ExpensesTypes.MANDATORY]: IExpense[];
  [ExpensesTypes.OTHER]: IExpense[];
  [ExpensesTypes.INVESTMENTS]: IExpense[];
}

interface IExpensesContext {
  expenses: IExpensesState;
  addExpenseHandler: (type: ExpensesTypes) => void;
  expenseNameChangeHandler: (id: string, type: ExpensesTypes, name: string) => void;
  expenseAmountChangeHandler: (id: string, type: ExpensesTypes, amount: string) => void;
  removeExpenseHandler: (id: string, type: ExpensesTypes) => void;
}

const expensesContext = createContext<IExpensesContext>({
  expenses: {
    [ExpensesTypes.MANDATORY]: [],
    [ExpensesTypes.OTHER]: [],
    [ExpensesTypes.INVESTMENTS]: [],
  },
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
  const [expenses, setExpenses] = useState<IExpensesState>({ mandatory: [], other: [], investments: [] });

  const changeExpenseHandler = (id: string, type: ExpensesTypes, fieldName: keyof IExpense, value: string): void => {
    const expensesCopy = { ...expenses };

    const currentExpensesByTypeCopy = expensesCopy[type];

    const currentExpenseIndex = currentExpensesByTypeCopy.findIndex((expense) => expense.id === id);
    const currentExpenseCopy: IExpense = { ...currentExpensesByTypeCopy[currentExpenseIndex] };

    currentExpenseCopy[fieldName] = value as never;
    currentExpensesByTypeCopy[currentExpenseIndex] = currentExpenseCopy;

    setExpenses(expensesCopy);
  };

  const addExpenseHandler = (type: ExpensesTypes): void => {
    const newExpense: IExpense = { id: uuidv4(), name: '', amount: '' };

    setExpenses((prev) => ({ ...prev, [type]: [...prev[type], newExpense] }));
  };

  const removeExpenseHandler = (id: string, type: ExpensesTypes): void => {
    setExpenses((prev) => ({ ...prev, [type]: prev[type].filter((expense) => expense.id !== id) }));
  };

  const expenseNameChangeHandler = (id: string, type: ExpensesTypes, name: string): void => {
    changeExpenseHandler(id, type, 'name', name);
  };

  const expenseAmountChangeHandler = (id: string, type: ExpensesTypes, amount: string): void => {
    changeExpenseHandler(id, type, 'amount', amount);
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
