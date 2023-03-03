import { IState } from 'redux/store';

export const selectIsAuthenticated = (state: IState): boolean => state.auth.isAuthenticated;
