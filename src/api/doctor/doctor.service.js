import { Doctor } from './';

export default class DoctorService {
  fetchAll() {
    return Doctor.query();
  }
}
