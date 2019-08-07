import { Pharmacy } from './';
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
          return boomError(ERROR_TYPE.NOT_FOUND);
        }
        return phar;
      });
  }
}
