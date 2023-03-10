import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import api from '@/api/api';
import { IBudget, IBudgetCreate } from '@/types/budgets.types';

export const getAllBudgets = createAsyncThunk('budgets/getAllBudgets', async (n, { rejectWithValue }) => {
  try {
    const result = await api.budgetsApi.getAll();

    return result;
  } catch (error: unknown) {
    const typedError = error as AxiosError;

    if (!typedError.response) {
      throw typedError;
    }

    return rejectWithValue(typedError.response.data);
  }
});

export const getBudget = createAsyncThunk('budgets/getBudget', async (budgetId: number, { rejectWithValue }) => {
  try {
    const result = await api.budgetsApi.getOne(budgetId);

    return result;
  } catch (error: unknown) {
    const typedError = error as AxiosError;

    if (!typedError.response) {
      throw typedError;
    }

    return rejectWithValue(typedError.response.data);
  }
});

export const deleteBudget = createAsyncThunk('budgets/deleteBudget', async (budgetId: number, { rejectWithValue }) => {
  try {
    const result = await api.budgetsApi.delete(budgetId);

    return result;
  } catch (error: unknown) {
    const typedError = error as AxiosError;

    if (!typedError.response) {
      throw typedError;
    }

    return rejectWithValue(typedError.response.data);
  }
});

export const createBudget = createAsyncThunk(
  'budgets/createBudget',
  async (payload: IBudgetCreate, { rejectWithValue }) => {
    try {
      const result = await api.budgetsApi.create(payload);

      return result;
    } catch (error: unknown) {
      const typedError = error as AxiosError;

      if (!typedError.response) {
        throw typedError;
      }

      return rejectWithValue(typedError.response.data);
    }
  },
);

export const updateBudget = createAsyncThunk(
  'budgets/updateBudget',
  async (payload: { budgetId: number; dto: Partial<IBudget> }, { rejectWithValue }) => {
    try {
      const result = await api.budgetsApi.create(payload);

      return result;
    } catch (error: unknown) {
      const typedError = error as AxiosError;

      if (!typedError.response) {
        throw typedError;
      }

      return rejectWithValue(typedError.response.data);
    }
  },
);
