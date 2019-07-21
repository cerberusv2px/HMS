import Model from '../../database/db';
import { Hospital } from './';

const TABLE_NAME = 'doctors';

export default class Doctor extends Model {
  static get tableName() {
    return TABLE_NAME;
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    return {
      hospitals: {
        relation: Model.BelongsToOneRelation,
        modelClass: Hospital,
        join: {
          from: 'doctors.hospital_id',
          to: 'hospitals.id'
        }
      }
    };
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
