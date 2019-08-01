import { Hospital } from '../models';
import { boomError, ERROR_TYPE } from '../../utils/boomError';
import { patientService } from './';

export default class HospitalService {
  fetchAll() {
    return Hospital.query();
  }

  findById(id) {
    return Hospital.query()
      .findById(id)
      .first()
      .eager('pharmacy')
      .then(hospital => {
        if (!hospital) {
          return boomError(ERROR_TYPE.NOT_FOUND);
        }

        return hospital;
      });
  }

  createHospital(hospital) {
    return (
      Hospital.query()
        .insert({ phone_number: hospital.phone_number, name: hospital.name, address: hospital.address })
        // .insert(hospital)
        .then(async hospital => {
          let id = hospital.id;
          let patients = await patientService.fetchAll();
          let otherHospitals = await this.fetchHospitalNotInId(id);

          return {
            hospital: hospital,
            paitents: patients,
            otherHospitals: otherHospitals
          };
        })
        .catch(err => {
          throw err;
        })
    );
  }

  findHospitalExists(name) {
    return Hospital.query()
      .where('name', 'like', `${name.charAt(0)}`)
      .then(hospitals => {
        return hospitals.length === 0;
      });
  }

  fetchHospitalNotInId(id) {
    return Hospital.query()
      .where('id', '!=', id)
      .then(hospitals => hospitals);
  }
}
