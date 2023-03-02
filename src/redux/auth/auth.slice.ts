import { createSlice } from '@reduxjs/toolkit';

export interface IAuthState {
  userIsLogin: boolean;
}

const initialState: IAuthState = {
  userIsLogin: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.userIsLogin = true;
    },
    logout: (state) => {
      state.userIsLogin = false;
    },
  },
});
