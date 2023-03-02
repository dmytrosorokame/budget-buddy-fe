import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { authSlice, IAuthState } from './auth/auth.slice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export interface IState {
  auth: IAuthState;
}

type TRootState = ReturnType<typeof store.getState>;
type TAppDispatch = typeof store.dispatch;

export const useAppDispatch: () => TAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;

export default store;
