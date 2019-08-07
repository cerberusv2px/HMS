import patientController from './patient.controller';
import Patient from './patient.model';
import PatientService from './patient.service';

const patientService = new PatientService();

export {
  patientController,
  patientService,
  Patient
};
