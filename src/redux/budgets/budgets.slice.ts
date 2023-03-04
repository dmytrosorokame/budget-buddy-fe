import { createSlice, AnyAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { IBudget } from './../../types/budgets.types';
import { getAllBudgets } from './budgets.thunks';

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
  extraReducers: (builder) => {
    builder.addCase(getAllBudgets.pending, (state) => {
      toast.loading('Getting budgets...');
      state.isLoading = true;
    });
    builder.addCase(getAllBudgets.fulfilled, (state, { payload }: AnyAction) => {
      toast.dismiss();
      toast.success('Your budgets loaded!');

      state.isLoading = false;
      state.budgets = payload;
    });
    builder.addCase(getAllBudgets.rejected, (state, { payload }: AnyAction) => {
      const errorMessage = payload?.message ?? 'Something went wrong';

      toast.dismiss();
      toast.error(errorMessage);

      state.isLoading = false;
      state.error = errorMessage;
    });
  },
});
