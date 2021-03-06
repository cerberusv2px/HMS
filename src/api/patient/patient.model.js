import Model from '../../database/db';
import { Hospital } from '../hospital';

const TABLE_NAME = 'patients';

export default class Patient extends Model {
  static get tableName() {
    return TABLE_NAME;
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    return {
      Hospitals: {
        relation: Model.BelongsToOneRelation,
        modelClass: Hospital,
        join: {
          from: 'patients.hospital_id',
          to: 'hospitals.id'
        }
      }
    };
  }

  static searchableAttributes() {
    return ['name', 'address'];
  }

  hospitalId() {
    return this.hospital_id;
  }

  async Hospital() {
    return Hospital.query()
      .join('hospitals', 'hospitals.id', '=', this.hospital_id)
      .first();
  }
}
