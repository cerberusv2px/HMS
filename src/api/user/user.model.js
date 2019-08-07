import Model from '../../database/db';

const TABLE_NAME = 'users';

export default class User extends Model {
  static get tableName() {
    return TABLE_NAME;
  }

  static get idColumn() {
    return 'id';
  }

}
