import Model from '../../database/db';

const TABLE_NAME = 'pharmacy';

export default class Pharmacy extends Model {
  static get tableName() {
    return TABLE_NAME;
  }

  static get idColumn() {
    return 'id';
  }
}
