import { Pharmacy } from '../models';
import Boom from 'boom';

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
          throw Boom.notFound('Record not found');
        }

        return phar;
      });
  }
}
