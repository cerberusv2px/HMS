import { Hospital } from '../models';
import Boom from 'boom';

export default class HospitalService {
  fetchAll() {
    return Hospital.query();
  }

  findById(id) {
    return Hospital.query()
      .findById(id)
      .first()
      .then(hospital => {
        if (!hospital) {
          throw Boom.notFound('Hospital not found');
        }

        return hospital;
      });
  }
}
