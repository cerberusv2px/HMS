import Joi from 'joi';
import validate from '../../utils/validate';

const REGISTER_SCHEMA = Joi.object().keys({
  name: Joi.string().label('name').required(),
  username: Joi.string().label('username').required(),
  password: Joi.string().label('password').required()
});

const LOGIN_SCHEMA = {
  username: Joi.string().label('username').required(),
  password: Joi.string().label('password').required()
};


const register = (req, res, next) => {
  return validate(req.body, REGISTER_SCHEMA)
    .then(() => next())
    .catch(err => next(err));
};

const login = (req, res, next) => {
  return validate(req.body, LOGIN_SCHEMA)
    .then(() => next())
    .catch(err => next(err));
};

export { register, login };
