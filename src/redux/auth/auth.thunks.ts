import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '@/api/api';

import { IAuthDto } from './../../api/auth/auth.dto';

export const singUp = createAsyncThunk('auth/signUp', async (payload: IAuthDto) => {
  return api.authApi.signUp(payload);
});

export const login = createAsyncThunk('auth/login', async (payload: IAuthDto) => {
  return api.authApi.login(payload);
});
