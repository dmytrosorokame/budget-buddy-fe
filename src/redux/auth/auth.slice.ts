import { createSlice } from '@reduxjs/toolkit';

export interface IAuthState {
  userIsLoggedIn: boolean;
}

const initialState: IAuthState = {
  userIsLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.userIsLoggedIn = true;
    },
    logout: (state) => {
      state.userIsLoggedIn = false;
    },
  },
});
