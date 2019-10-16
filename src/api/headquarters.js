import baseRequest from './baseRequest';

export default class Headquarters extends baseRequest {
  constructor() {
    super();

    this.method = 'headquarters'
  }

  getAll = async() => {
    const response = await this.get(this.method);
    return response.data.data;
  }
}
