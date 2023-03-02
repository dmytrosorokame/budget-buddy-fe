import { AxiosInstance, AxiosResponse } from 'axios';

import getAxiosInstance from 'api/axios';

import { IAuthDto } from './auth.dto';
import { IAccessTokenResponse } from './auth.type';

class AuthApi {
  private axios: AxiosInstance;

  constructor(private apiUrl: string) {
    this.axios = getAxiosInstance();
  }

  public async login(dto: IAuthDto): Promise<IAccessTokenResponse> {
    const response: AxiosResponse<IAccessTokenResponse> = await this.axios.post(`${this.apiUrl}/auth/login`, dto);

    return response.data;
  }

  public async signUp(dto: IAuthDto): Promise<IAccessTokenResponse> {
    const response: AxiosResponse<IAccessTokenResponse> = await this.axios.post(`${this.apiUrl}/auth/sign-up`, dto);

    return response.data;
  }
}

export default AuthApi;
