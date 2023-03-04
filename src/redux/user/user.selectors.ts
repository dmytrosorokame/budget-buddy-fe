import { Currency } from '@/constants/currency.constant';
import { IState } from 'redux/store';

export const selectUserCurrency = (state: IState): Currency | undefined => state.user.currency;
