import { createSlice } from '@reduxjs/toolkit';

import { login, singUp } from './auth.thunks';

export interface IAuthState {
  userIsLoggedIn: boolean;
  accessToken: string;
}

const initialState: IAuthState = {
  userIsLoggedIn: false,
  accessToken: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(singUp.fulfilled, (state, { payload }) => {
      state.userIsLoggedIn = true;
      state.accessToken = payload.access_token;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.userIsLoggedIn = true;
      state.accessToken = payload.access_token;
    });
  },
});
