import { AnyAction, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { login, singUp } from './auth.thunks';

let token = '';

if (typeof window !== 'undefined') {
  const tokenFromStorage = window.localStorage.getItem('token');

  if (tokenFromStorage) {
    token = tokenFromStorage;
  }
}

export interface IAuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: IAuthState = {
  isAuthenticated: !!token,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state): void => {
      state.isAuthenticated = false;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(singUp.pending, (state): void => {
      toast.loading('SignUp pending');
      state.isLoading = true;
    });
    builder.addCase(singUp.fulfilled, (state, { payload }): void => {
      toast.dismiss();
      toast.success('You registered!');

      state.isLoading = false;
      state.isAuthenticated = true;

      localStorage.setItem('token', payload.access_token);
    });
    builder.addCase(singUp.rejected, (state, { payload }: AnyAction): void => {
      const errorMessage = payload.message ?? 'Something went wrong';

      toast.dismiss();
      toast.error('Register failed!');

      state.isLoading = false;
      state.error = errorMessage;
    });
    builder.addCase(login.pending, (state): void => {
      toast.loading('Login pending');
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, { payload }): void => {
      toast.dismiss();
      toast.success('You loggedIn!');

      state.isLoading = false;
      state.isAuthenticated = true;

      localStorage.setItem('token', payload.access_token);
    });
    builder.addCase(login.rejected, (state, { payload }: AnyAction): void => {
      const errorMessage = payload.message ?? 'Something went wrong';

      toast.dismiss();
      toast.error(errorMessage);

      state.isLoading = false;
      state.error = errorMessage;
    });
  },
});

export const { logout } = authSlice.actions;
