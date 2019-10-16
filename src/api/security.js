import baseRequest from './baseRequest';

export default class Security extends baseRequest {
  constructor() {
    super();
    this.loginMethod = 'authenticate/login';
    this.logoutMethod = 'authenticate/logout';
  }

  login = (credentials) => {
    return this.post(this.loginMethod, credentials);
  }

  logout = () => {
    return this.post(this.logoutMethod);
  }
}