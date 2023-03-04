import { IExpense } from './expenses.types';

export interface IBudget {
  id: number;
  created_at: Date;
  income: number;
  expenses: IExpense[];
}
