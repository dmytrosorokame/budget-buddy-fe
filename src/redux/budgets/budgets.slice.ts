import { createSlice, AnyAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { sortBudgetsByDate } from '@/utils/date';

import { IBudget } from './../../types/budgets.types';
import { createBudget, deleteBudget, getAllBudgets, getBudget } from './budgets.thunks';

export interface IBudgetsState {
  budgets: IBudget[] | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: IBudgetsState = {
  budgets: null,
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

      const sortedBudgets = payload.sort(sortBudgetsByDate);

      state.isLoading = false;
      state.budgets = sortedBudgets;
    });
    builder.addCase(getAllBudgets.rejected, (state, { payload }: AnyAction) => {
      const errorMessage = payload?.message ?? 'Something went wrong';

      toast.dismiss();
      toast.error(errorMessage);

      state.isLoading = false;
      state.error = errorMessage;
    });

    builder.addCase(getBudget.pending, (state) => {
      toast.loading('Getting budget...');
      state.isLoading = true;
    });
    builder.addCase(getBudget.fulfilled, (state, { payload }: AnyAction) => {
      toast.dismiss();
      toast.success('Your budget loaded!');

      if (state.budgets) {
        state.budgets.push(payload);
        state.budgets = state.budgets.sort(sortBudgetsByDate);
      } else {
        state.budgets = [payload];
      }

      state.isLoading = false;
    });
    builder.addCase(getBudget.rejected, (state, { payload }: AnyAction) => {
      const errorMessage = payload?.message ?? 'Something went wrong';

      toast.dismiss();
      toast.error(errorMessage);

      state.isLoading = false;
      state.error = errorMessage;
    });

    builder.addCase(deleteBudget.fulfilled, (state, { payload }: AnyAction) => {
      toast.success('Budget deleted!');

      if (state.budgets) {
        state.budgets = state.budgets.filter((budget) => budget.id !== payload.id);
      }
    });
    builder.addCase(deleteBudget.rejected, (state, { payload }: AnyAction) => {
      const errorMessage = payload?.message ?? 'Something went wrong';

      toast.error(errorMessage);

      state.error = errorMessage;
    });

    builder.addCase(createBudget.pending, (state) => {
      toast.loading('Budget creating...');
      state.isLoading = true;
    });
    builder.addCase(createBudget.fulfilled, (state, { payload }: AnyAction) => {
      toast.dismiss();
      toast.success('Budget created!');

      state.isLoading = false;
      state.budgets = state.budgets ? [...state.budgets, payload] : [payload];
    });
    builder.addCase(createBudget.rejected, (state, { payload }: AnyAction) => {
      const errorMessage = payload?.message ?? 'Something went wrong';

      toast.dismiss();
      toast.error(errorMessage);

      state.isLoading = false;
      state.error = errorMessage;
    });
  },
});
