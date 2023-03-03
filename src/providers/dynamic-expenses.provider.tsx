import { createContext, Dispatch, SetStateAction, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { IExpense } from '@/types/expenses.types';

interface IDynamicExpensesContext {
  expenses: IExpense[];
  addExpenseHandler: () => void;
  expenseNameChangeHandler: (id: string, name: string) => void;
  expenseAmountChangeHandler: (id: string, amount: string) => void;
  removeExpenseHandler: (id: string) => void;
}

const dynamicExpensesContext = createContext<IDynamicExpensesContext>({
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

export const useDynamicExpensesContext = (): IDynamicExpensesContext => useContext(dynamicExpensesContext);

interface IDynamicExpensesProviderProps {
  expenses: IExpense[];
  setExpenses: Dispatch<SetStateAction<IExpense[]>>;
  children: JSX.Element;
}

export const DynamicExpensesProvider: React.FC<IDynamicExpensesProviderProps> = ({
  expenses,
  setExpenses,
  children,
}) => {
  const changeExpenseHandler = (id: string, fieldName: keyof IExpense, value: string): void => {
    const expensesCopy = [...expenses];

    const currentExpenseIndex = expensesCopy.findIndex((expense) => expense.id === id);
    const currentExpenseCopy: IExpense = { ...expensesCopy[currentExpenseIndex] };

    currentExpenseCopy[fieldName] = value as never;
    expensesCopy[currentExpenseIndex] = currentExpenseCopy;

    setExpenses(expensesCopy);
  };

  const addExpenseHandler = (): void => {
    const newExpense: IExpense = { id: uuidv4(), name: '', amount: '' };

    setExpenses((prev) => [...prev, newExpense]);
  };

  const removeExpenseHandler = (id: string): void => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  const expenseNameChangeHandler = (id: string, name: string): void => {
    changeExpenseHandler(id, 'name', name);
  };

  const expenseAmountChangeHandler = (id: string, amount: string): void => {
    changeExpenseHandler(id, 'amount', amount);
  };

  return (
    <dynamicExpensesContext.Provider
      value={{
        expenses,
        addExpenseHandler,
        expenseNameChangeHandler,
        expenseAmountChangeHandler,
        removeExpenseHandler,
      }}
    >
      {children}
    </dynamicExpensesContext.Provider>
  );
};
