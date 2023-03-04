import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { authSlice, IAuthState } from './auth/auth.slice';
import { budgetsSlice, IBudgetsState } from './budgets/budgets.slice';
import { confirmModalSlice, IConfirmModalState } from './confirmModal/confirmModal.slice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    confirmModal: confirmModalSlice.reducer,
    budgets: budgetsSlice.reducer,
  },
});

export interface IState {
  auth: IAuthState;
  confirmModal: IConfirmModalState;
  budgets: IBudgetsState;
}

type TRootState = ReturnType<typeof store.getState>;
type TAppDispatch = typeof store.dispatch;

export const useAppDispatch: () => TAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;

export default store;
