import doctorController from './doctor.controller';
import Doctor from './doctor.model';
import DoctorService from './doctor.service';

const doctorService = new DoctorService();

export {
  doctorController,
  doctorService,
  Doctor
};
