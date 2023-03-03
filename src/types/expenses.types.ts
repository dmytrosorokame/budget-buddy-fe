export interface IExpense {
  id: string;
  name: string;
  amount: string;
}

export enum ExpensesTypes {
  MANDATORY = 'mandatory',
  OTHER = 'other',
  INVESTMENTS = 'investments',
}
