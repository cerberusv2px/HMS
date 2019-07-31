import Joi from 'joi';
import validate from '../../utils/validate';
import { boomError, ERROR_TYPE } from '../../utils/boomError';

const SCHEMA = Joi.object().keys({
  name: Joi.string().label('name').required(),
  username: Joi.string().label('username').required(),
  password: Joi.string().label('password').required()
});

function userValidator(req, res, next) {
  return validate(req.body, SCHEMA)
    .then(() => next())
    .catch(err => next(err));
}

export { userValidator };
