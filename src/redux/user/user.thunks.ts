import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import api from '@/api/api';

import { IUser } from './../../types/user.types';

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

export const updateUser = createAsyncThunk('user/updateUser', async (payload: Partial<IUser>, { rejectWithValue }) => {
  try {
    const response = await api.userApi.updateUser(payload);

    return response;
  } catch (error: unknown) {
    const typedError = error as AxiosError;

    if (!typedError.response) {
      throw typedError;
    }

    return rejectWithValue(typedError.response.data);
  }
});
