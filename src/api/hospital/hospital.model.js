import Model from '../../database/db';
import { Pharmacy } from '../pharmacy';


const TABLE_NAME = 'hospitals';

class Hospital extends Model {
  static get tableName() {
    return TABLE_NAME;
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    return {
      pharmacy: {
        relation: Model.ManyToManyRelation,
        modelClass: Pharmacy,
        join: {
          from: 'hospitals.id',
          through: {
            from: 'phar_hosp.hospital_id',
            to: 'phar_hosp.pharmacy_id'
          },
          to: 'pharmacy.id'
        }
      }
    };
  }
}

export default Hospital;
