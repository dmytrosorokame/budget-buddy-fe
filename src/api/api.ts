import AuthApi from './auth/auth.api';
import { BudgetsApi } from './budgets/budgets.api';

class Api {
  public authApi: AuthApi;
  public budgetsApi: BudgetsApi;

  private apiURL = 'http://localhost:3001';

  constructor() {
    this.authApi = new AuthApi(this.apiURL);
    this.budgetsApi = new BudgetsApi(this.apiURL);
  }
}

const api = new Api();

export default api;
