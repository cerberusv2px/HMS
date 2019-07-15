import Model from '../../database/db';

const TABLE_NAME = 'hospitals';

class Hospital extends Model {
  static get tableName() {
    return TABLE_NAME;
  }

  static get idColumn() {
    return 'id';
  }

  name() {
    return this.name;
  }

  address() {
    return this.address;
  }

  phoneNumber() {
    return this.phone_number;
  }

  static searchableAttributes() {
    return ['name', 'address'];
  }
}

export default Hospital;
