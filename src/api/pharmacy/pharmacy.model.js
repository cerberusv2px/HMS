import Model from '../../database/db';
import { Hospital } from '../hospital';

const TABLE_NAME = 'pharmacy';

export default class Pharmacy extends Model {
  static get tableName() {
    return TABLE_NAME;
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    return {
      hospitals: {
        relation: Model.ManyToManyRelation,
        modelClass: Hospital,
        join: {
          from: 'pharmacy.id',
          through: {
            from: 'phar_hosp.pharmacy_id',
            to: 'phar_hosp.hospital_id'
          },
          to: 'hospitals.id'
        }
      }
    };
  }
}
