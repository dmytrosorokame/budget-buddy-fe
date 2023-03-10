import { createSlice, AnyAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { Currency } from './../../constants/currency.constant';
import { getMe, updateUser } from './user.thunks';

export interface IUserState {
  id: number | null;
  email: string | null;
  currency: Currency | undefined;
}

const initialState: IUserState = {
  id: null,
  email: null,
  currency: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMe.fulfilled, (state, { payload }: AnyAction) => {
      toast.success('User fetched!');

      state.currency = payload.currency;
      state.email = payload.email;
      state.id = payload.id;
    });

    builder.addCase(updateUser.fulfilled, (state, { payload }: AnyAction) => {
      toast.success('User updated!');

      state.currency = payload.currency;
      state.email = payload.email;
    });
  },
});
