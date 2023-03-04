import { AxiosInstance } from 'axios';

import { IUser } from '@/types/user.types';
import getAxiosInstance from 'api/axios';

export class UserApi {
  private axios: AxiosInstance;

  constructor(private apiUrl: string) {
    this.axios = getAxiosInstance();
  }

  public async getMe(): Promise<IUser> {
    const response = await this.axios.get(`${this.apiUrl}/user/me`);

    return response.data;
  }
}
