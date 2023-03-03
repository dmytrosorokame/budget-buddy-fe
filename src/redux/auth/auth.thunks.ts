import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import api from '@/api/api';

import { IAuthDto } from './../../api/auth/auth.dto';

export const singUp = createAsyncThunk('auth/signUp', async (payload: IAuthDto, { rejectWithValue }) => {
  try {
    const result = await api.authApi.signUp(payload);

    return result;
  } catch (error: unknown) {
    const typedError = error as AxiosError;

    if (!typedError.response) {
      throw typedError;
    }

    return rejectWithValue(typedError.response.data);
  }
});

export const login = createAsyncThunk('auth/login', async (payload: IAuthDto, { rejectWithValue }) => {
  try {
    const result = await api.authApi.login(payload);

    return result;
  } catch (error: unknown) {
    const typedError = error as AxiosError;

    if (!typedError.response) {
      throw typedError;
    }

    return rejectWithValue(typedError.response.data);
  }
});
