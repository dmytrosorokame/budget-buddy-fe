import { configureStore } from '@reduxjs/toolkit';

import { authSlice, IAuthState } from './auth/auth.slice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export interface IState {
  auth: IAuthState;
}

export default store;
