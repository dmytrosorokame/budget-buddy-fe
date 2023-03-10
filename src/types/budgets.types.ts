import { IExpense, TExpenseCreate } from './expenses.types';

export interface IBudget {
  id: number;
  created_at: Date | string;
  income: number;
  expenses: IExpense[];
}

export interface IBudgetCreate {
  created_at: string;
  income: number;
  expenses: TExpenseCreate[];
}

export interface ISubmitBudgetFormData {
  id: number | null;
  expenses: IExpense[];
  date: string;
  income: number;
}
