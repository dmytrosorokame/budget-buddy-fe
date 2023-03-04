import { Currency } from '@/constants/currency.constant';

export interface IUser {
  id: number;
  email: string;
  currency: Currency;
}
