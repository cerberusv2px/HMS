import Model from '../../database/db';

const TABLE_NAME = 'hospitals';

class Hospital extends Model {
  static get tableName() {
    return TABLE_NAME;
  }

  static get idColumn() {
    return 'id';
  }
}

export default Hospital;
