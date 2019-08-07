import hospitalController from './hospital.controller';
import Hospital from './hospital.model';
import HospitalService from './hospital.service';

const hospitalService = new HospitalService();

export {
  hospitalController,
  hospitalService,
  Hospital
};
