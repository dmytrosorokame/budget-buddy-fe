import AuthApi from './auth/auth.api';

class Api {
  public authApi: AuthApi;

  private apiURL = 'http://localhost:3000';

  constructor() {
    this.authApi = new AuthApi(this.apiURL);
  }
}

const api = new Api();

export default api;
