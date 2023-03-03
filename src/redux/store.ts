import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { authSlice, IAuthState } from './auth/auth.slice';
import { confirmModalSlice, IConfirmModalState } from './confirmModal/confirmModal.slice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    confirmModal: confirmModalSlice.reducer,
  },
});

export interface IState {
  auth: IAuthState;
  confirmModal: IConfirmModalState;
}

type TRootState = ReturnType<typeof store.getState>;
type TAppDispatch = typeof store.dispatch;

export const useAppDispatch: () => TAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;

export default store;
