import AuthApi from './auth/auth.api';
import { BudgetsApi } from './budgets/budgets.api';
import { UserApi } from './user/user.api';

class Api {
  public authApi: AuthApi;
  public budgetsApi: BudgetsApi;
  public userApi: UserApi;

  private apiURL = 'http://localhost:3001';

  constructor() {
    this.authApi = new AuthApi(this.apiURL);
    this.budgetsApi = new BudgetsApi(this.apiURL);
    this.userApi = new UserApi(this.apiURL);
  }
}

const api = new Api();

export default api;
