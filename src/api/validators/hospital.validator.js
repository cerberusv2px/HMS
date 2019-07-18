import Joi from 'joi';
import validate from '../../utils/validate';
import { hospitalService } from '../services';
import Boom from 'boom';

const SCHEMA = Joi.object().keys({
  name: Joi.string()
    .label('name')
    .required(),
  address: Joi.string()
    .label('address')
    .required(),
  phone_number: Joi.string()
    .label('phone_number')
    .required()
});

function hospitalValidator(req, res, next) {
  return validate(req.body, SCHEMA)
    .then(() => next())
    .catch(err => next(err));
}

function checkIfHospitalExists(req, res, next) {
  return hospitalService
    .findHospitalExists(req.body.name)
    .then(status => {
      if (status) {
        next();
      } else {
        throw Boom.notFound('Hospital alerady exists');
      }
    })
    .catch(err => next(err));
}

export { hospitalValidator, checkIfHospitalExists };
