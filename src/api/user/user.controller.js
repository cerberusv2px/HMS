import { Router } from 'express';
import { userService } from './';
import * as userValidator from './user.validator';

const router = Router();

router.get('/', (req, res, next) => {
  userService.fetchAll().then(users => res.json(users));
});

router.post('/register', userValidator.register, (req, res, next) => {
  userService.createUser(req.body)
    .then(data => res.json({ data }))
    .catch(err => next(err));
});

router.post('/login', userValidator.login, (req, res, next) => {
  userService.login(req.body.username, req.body.password)
    .then(data => res.json({ data }))
    .catch(err => next(err));
});

export default router;

