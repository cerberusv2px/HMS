import Router from 'express';
import { doctorController, hospitalController, patientController, pharmacyController, userController, } from './api';

let router = Router();

router.get('/', (req, res, next) => {
  res.send('v2px');
});

router.use('/hospital', hospitalController);
router.use('/patient', patientController);
router.use('/doctor', doctorController);
router.use('/pharmacy', pharmacyController);
router.use('/user', userController);

module.exports = router;
