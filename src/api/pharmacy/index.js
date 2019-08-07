import pharmacyController from './pharmacy.controller';
import Pharmacy from './pharmacy.model';
import PharmacyService from './pharmacy.service';

const pharmacyService = new PharmacyService();

export {
  pharmacyController,
  pharmacyService,
  Pharmacy
};
