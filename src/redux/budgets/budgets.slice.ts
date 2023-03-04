import { createSlice } from '@reduxjs/toolkit';

import { IBudget } from './../../types/budgets.types';

export interface IBudgetsState {
  budgets: IBudget[];
  isLoading: boolean;
  error: string | null;
}

const initialState = {
  budgets: [],
  isLoading: false,
  error: null,
};

export const budgetsSlice = createSlice({
  name: 'budgets',
  initialState,
  reducers: {},
});
