import baseRequest from './baseRequest';

export default class Roles extends baseRequest {
  constructor() {
    super();

    this.method = 'roles';
  }

  getAll = async() => {
    const response = await this.get(this.method);
    return response.data.data;
  }
}