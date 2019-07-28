import { Router } from 'express';
import { pharmacyService } from '../services';

let router = Router();

router.get('/', (req, res, next) => {
  pharmacyService
    .fetchAll()
    .then(data => res.json({ data }))
    .catch(err => next(err));
});

export default router;
