import { Router } from 'express';
import { hospitalService } from '../services';
import { hospitalValidator, checkIfHospitalExists } from '../validators/hospital.validator';

const router = Router();

router.get('/', (req, res, next) => {
  hospitalService
    .fetchAll()
    .then(data => res.json({ data }))
    .catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
  hospitalService
    .findById(req.params.id)
    .then(data => res.json({ data }))
    .catch(err => next(err));
});

router.post('/', checkIfHospitalExists, hospitalValidator, (req, res, next) => {
  hospitalService
    .createHospital(req.body)
    .then(data => res.json({ data }))
    .catch(err => next(err));
});

export default router;
