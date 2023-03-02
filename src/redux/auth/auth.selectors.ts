import { IState } from 'redux/store';

export const selectUserIsLogin = (state: IState): boolean => state.auth.userIsLogin;
