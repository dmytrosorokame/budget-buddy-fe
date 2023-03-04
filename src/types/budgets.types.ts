import { IExpense } from './expenses.types';

export interface IBudget {
  created_at: Date;
  income: number;
  expenses: IExpense[];
}
