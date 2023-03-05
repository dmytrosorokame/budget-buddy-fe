export enum ExpensesTypes {
  MANDATORY = 'mandatory',
  OTHER = 'other',
  INVESTMENTS = 'investments',
}

export interface IExpense {
  id: string;
  type: ExpensesTypes;
  name: string;
  amount: string;
}

export type TExpenseCreate = Omit<IExpense, 'id'>;
