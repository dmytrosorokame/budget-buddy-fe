import { IState } from 'redux/store';

export const selectConfirmModalIsShown = (state: IState): boolean => state.confirmModal.isShown;

export const selectConfirmModalTitle = (state: IState): string => state.confirmModal.title;

export const selectConfirmModalOkClickHandler = (state: IState): (() => void) | undefined =>
  state.confirmModal.okClickHandler;

export const selectConfirmModalCloseClickHandler = (state: IState): (() => void) | undefined =>
  state.confirmModal.closeClickHandler;
