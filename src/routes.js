import Router from 'express';
import {
  hospitalController,
  patientController,
  doctorController,
  pharmacyController,
  userController,
} from './api/controllers';

let router = Router();

router.get('/', function (req, res, next) {
  res.send('v2px');
});

router.use('/hospital', hospitalController);
router.use('/patient', patientController);
router.use('/doctor', doctorController);
router.use('/pharmacy', pharmacyController);
router.use('/user', userController);

module.exports = router;
