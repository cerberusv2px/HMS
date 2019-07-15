import { Patient, Hospital } from '../models';
import Boom from 'boom';

export default class PatientService {
  fetchAll() {
    return Patient.query();
  }

  findById(id) {
    return Patient.query()
      .findById(id)
      .eager('Hospitals')
      .first()
      .then(patient => {
        if (!patient) {
          throw Boom.notFound('Record not found');
        }

        return patient;
      });
  }
}
