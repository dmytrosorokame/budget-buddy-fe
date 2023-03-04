import { AxiosInstance } from 'axios';

import getAxiosInstance from 'api/axios';

import { IBudget } from './../../types/budgets.types';

export class BudgetsApi {
  private axios: AxiosInstance;

  constructor(private apiUrl: string) {
    this.axios = getAxiosInstance();
  }

  public async getAll(): Promise<IBudget[]> {
    const response = await this.axios.get(`${this.apiUrl}/budget`);

    return response.data;
  }
}
