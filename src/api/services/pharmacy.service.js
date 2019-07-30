import { Pharmacy } from '../models';
import { boomError, ERROR_TYPE } from '../../utils/boomError';

export default class PharmacyService {
  fetchAll() {
    return Pharmacy.query();
  }

  findById(id) {
    return Pharmacy.query()
      .findById(id)
      .eager('hospitals')
      .first()
      .then(phar => {
        if (!phar) {
          boomError(ERROR_TYPE.NOT_FOUND);
        }

        return phar;
      });
  }
}
