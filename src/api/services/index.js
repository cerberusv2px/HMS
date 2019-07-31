import HospitalService from './hospital.service';
import PatientService from './patient.service';
import DoctorService from './doctor.service';
import PharmacyService from './pharmacy.service';
import UserService from './user.service';

export const hospitalService = new HospitalService();
export const patientService = new PatientService();
export const doctorService = new DoctorService();
export const pharmacyService = new PharmacyService();
export const userService = new UserService();
