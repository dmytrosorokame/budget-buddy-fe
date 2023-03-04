import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import api from '@/api/api';

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
