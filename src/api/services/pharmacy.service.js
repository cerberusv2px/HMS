import { Pharmacy } from '../models';

export default class PharmacyService {
  fetchAll() {
    return Pharmacy.query();
  }
}
