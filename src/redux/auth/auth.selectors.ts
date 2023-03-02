import { IState } from 'redux/store';

export const selectUserIsLoggedIn = (state: IState): boolean => state.auth.userIsLoggedIn;
