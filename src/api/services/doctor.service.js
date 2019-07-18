import { Doctor } from '../models';

export default class DoctorService {
  fetchAll() {
    return Doctor.query();
  }
}
