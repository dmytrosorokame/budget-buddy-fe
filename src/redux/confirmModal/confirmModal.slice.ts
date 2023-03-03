import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IConfirmModalShowData } from '@/types/confirmModal.types';

export interface IConfirmModalState {
  isShown: boolean;
  title: string;
  okClickHandler?: () => void;
  closeClickHandler?: () => void;
}

const initialState: IConfirmModalState = {
  isShown: false,
  title: '',
  okClickHandler: undefined,
  closeClickHandler: undefined,
};

export const confirmModalSlice = createSlice({
  name: 'confirmModal',
  initialState,
  reducers: {
    showModal: (state, { payload }: PayloadAction<IConfirmModalShowData>): void => {
      state.isShown = true;
      state.title = payload.title;
      state.okClickHandler = payload.okClickHandler;
      state.closeClickHandler = payload.closeClickHandler;
    },
    closeModal: (state): void => {
      state.isShown = false;
      state.title = '';
      state.okClickHandler = undefined;
      state.closeClickHandler = undefined;
    },
  },
});

export const { showModal, closeModal } = confirmModalSlice.actions;
