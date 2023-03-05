import { IState } from 'redux/store';

import { IBudget } from './../../types/budgets.types';

export const selectAllBudgets = (state: IState): IBudget[] | null => state.budgets.budgets;

export const selectBudgetsIsLoading = (state: IState): boolean => state.budgets.isLoading;
