import { IExpense, TExpenseCreate } from './expenses.types';

export interface IBudget {
  id: number;
  created_at: Date;
  income: number;
  expenses: IExpense[];
}

export interface IBudgetCreate {
  created_at: Date;
  income: number;
  expenses: TExpenseCreate[];
}
