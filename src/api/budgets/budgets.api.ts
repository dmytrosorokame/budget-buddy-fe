import { AxiosInstance } from 'axios';

import getAxiosInstance from 'api/axios';

import { IBudget, IBudgetCreate } from './../../types/budgets.types';

export class BudgetsApi {
  private axios: AxiosInstance;

  constructor(private apiUrl: string) {
    this.axios = getAxiosInstance();
  }

  public async getAll(): Promise<IBudget[]> {
    const response = await this.axios.get(`${this.apiUrl}/budget`);

    return response.data;
  }

  public async delete(budgetId: number): Promise<IBudget> {
    const response = await this.axios.delete(`${this.apiUrl}/budget/${budgetId}`);

    return response.data;
  }

  public async create(dto: IBudgetCreate): Promise<IBudget> {
    const response = await this.axios.post(`${this.apiUrl}/budget`, dto);

    return response.data;
  }
}
