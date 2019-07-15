import { Router } from 'express';
import { hospitalSerivce } from '../services';

let router = Router();

router.get('/', (req, res, next) => {
  hospitalSerivce
    .fetchAll()
    .then(data => res.json({ data }))
    .catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
  hospitalSerivce
    .findById(req.params.id)
    .then(data => res.json({ data }))
    .catch(err => next(err));
});

export default router;
