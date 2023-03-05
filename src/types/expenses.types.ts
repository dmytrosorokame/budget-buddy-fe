export enum ExpenseTypes {
  MANDATORY = 'mandatory',
  OTHER = 'other',
  INVESTMENTS = 'investments',
}

export interface IExpense {
  id: string;
  type: ExpenseTypes;
  name: string;
  amount: number;
}

export type TExpenseCreate = Omit<IExpense, 'id'>;
