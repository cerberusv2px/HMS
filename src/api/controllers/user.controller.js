import { Router } from 'express';
import jwtAuth from '../../middlewares/jwtAuthenticate';
import { userService } from '../services';
import { userValidator } from '../validators/user.validator';

const router = Router();

router.get('/', (req, res, next) => {
  userService.fetchAll().then(users => res.json(users));
});

router.post('/create', userValidator, (req, res, next) => {
  userService.createUser(req.body)
    .then(data => res.json({ data }))
    .catch(err => next(err));
});

export default router;

