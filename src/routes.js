import { hospitalController, patientController, doctorController } from './api/controllers';
import Router from 'express';

let router = Router();

router.get('/', function(req, res, next) {
  res.send('v2px');
});

router.use('/hospital', hospitalController);
router.use('/patient', patientController);
router.use('/doctor', doctorController);

module.exports = router;
