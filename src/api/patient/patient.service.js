import { Patient } from './';
import { boomError, ERROR_TYPE } from '../../utils/boomError';

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
          return boomError(ERROR_TYPE.NOT_FOUND);
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
