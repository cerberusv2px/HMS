import { Router } from 'express';
import { patientService } from '../services';

let router = Router();

router.get('/', (req, res, next) => {
  patientService
    .fetchAll()
    .then(data => res.json({ data }))
    .catch(err => next(err));
});

router.get('/filter', (req, res, next) => {
  console.log(`query is: `, req.query);
  patientService
    .findByAddress(req.query.address)
    .then(data => res.json({ data }))
    .catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
  patientService
    .findById(req.params.id)
    .then(data => res.json({ data }))
    .catch(err => next(err));
});

export default router;
