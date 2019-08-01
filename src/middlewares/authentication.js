import HttpStatus from 'http-status-codes';
import { userService } from '../api/services';
import logger from '../utils/logger';

const ROUTES_WITH_NO_AUTH_KEY = [
  '/',
  '/api',
  '/api/doctor',
  '/api/user/login',
  '/api/user/register'
];

const isAuthRequired = url => !ROUTES_WITH_NO_AUTH_KEY.includes(url);

export const authenticate = (req, res, next) => {
  if (!isAuthRequired(req.url)) {
    return next();
  }
  logger.info(`${JSON.stringify(req.body)}`);

  console.log(req.get('Authorization'));
  const accessToken = req.get('Authorization') ? req.get('Authorization') : null;
  if (accessToken === null) {
    res.status(HttpStatus.UNAUTHORIZED).send({ error: 'Unauthorized' });
  } else {

    const authVerification = userService.verifyAccessToken(accessToken);
    console.log(authVerification);
    req.authorization = authVerification.user;
    if (!authVerification) {
      res.status(HttpStatus.UNAUTHORIZED).send({ error: 'Unauthorized' });
    } else {
      next();
    }
  }

};
