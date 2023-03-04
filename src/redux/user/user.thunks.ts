import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import api from '@/api/api';

export const getMe = createAsyncThunk('user/getMe', async (n, { rejectWithValue }) => {
  try {
    const response = await api.userApi.getMe();

    return response;
  } catch (error: unknown) {
    const typedError = error as AxiosError;

    if (!typedError.response) {
      throw typedError;
    }

    return rejectWithValue(typedError.response.data);
  }
});
