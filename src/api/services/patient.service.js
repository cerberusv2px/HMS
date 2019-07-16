import { Patient } from '../models';
import Boom from 'boom';

export default class PatientService {
  fetchAll() {
    return Patient.query();
  }

  findById(id) {
    return Patient.query()
      .findById(id)
      .eager('Hospitals as hospital')
      .first()
      .then(patient => {
        if (!patient) {
          throw Boom.notFound('Record not found');
        }

        return patient;
      });
  }

  findByAddress(address) {
    return Patient.query()
      .where('address', '=', address)
      .orderBy('name')
      .then(patients => patients);
  }
}
