import { Router } from 'express';
import { doctorService } from '../services';

let router = Router();

router.get('/', (req, res, next) => {
  doctorService
    .fetchAll()
    .then(data => res.json({ data }))
    .catch(err => next(err));
});

export default router;
