export default class DataService {
  constructor(database, storeName) {
    this.db = database;
    this.storeName = storeName;
  }

  getAll = () => {
    return this.db[this.storeName].toArray();
  }

  getById = (id) => {
    return this.db[this.storeName].get(id);
  }

  getByKey = (key, value) => {
    return this.db[this.storeName].where(key).equals(value);
  }

  countByKey = (key, value) => {
    return this.db[this.storeName].where(key).equals(value).count();
  }

  add = (data) => {
    return this.db[this.storeName].add(data);
  }

  deleteAll = () => {
    return this.db[this.storeName].clear();
  }

  delete = (id) => {
    return this.db[this.storeName].where('id').equals(id).delete();
  }
}