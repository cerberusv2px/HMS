import { User } from './';
import { boomError, ERROR_TYPE } from '../../utils/boomError';
import { generateHash, compare } from '../../utils/hashUtils';
import * as jwtUtils from '../../utils/jwtUtils';
import * as jwtConfig from '../../config/jwtConfig';

export default class UserService {
  fetchAll() {
    return User.query();
  }

  findById(id) {
    return User.query()
      .findById(id)
      .first()
      .then(user => {
        if (!user) {
          return boomError(ERROR_TYPE.NOT_FOUND);
        }
        return user;
      });
  }

  findByUsername(username) {
    return User.query()
      .where('username', '=', username)
      .first()
      .then(user => {
        if (!user) {
          return boomError(ERROR_TYPE.NOT_FOUND);
        }
        return user;
      });

  }

  createUser(user) {
    return (
      User.query()
        .insert({
          name: user.name,
          username: user.username,
          password: generateHash(user.password)
        })
        .then(user => {
          const newUser = user ? user.toJSON() : null;
          const { id, username, name } = newUser;
          return {
            user: {
              id,
              name,
              username,
            }
          };
        })
        .catch(err => {
          throw err;
        })
    );
  }

  login(username, userPassword) {
    return this.findByUsername(username)
      .then(user => {
        const { password, ...users } = user;
        const correctPassword = compare(userPassword, password);
        if (!correctPassword) {
          return boomError(ERROR_TYPE.UNAUTHORIZED);
        }
        const responsePayLoad = this._getAccessAndRefreshToken(users.id);
        return {
          accessToken: responsePayLoad.accessToken,
          refreshToken: responsePayLoad.refreshToken,
          user: users
        };
      })
      .catch(err => {
        throw err;
      });
  }

  verifyAccessToken(tokenWithPrefix) {
    // here token[0] is "Bearer" and token[1] is the token value
    // Authorization: Bearer bac , Token jflajldjas;
    //
    const token = tokenWithPrefix.split(' ')[1];
    return this._verifyToken(token, jwtConfig.SECRET_ACCESS_KEY);
  }

  verifyRefreshToken(refreshToken) {
    return this._verifyToken(refreshToken, jwtConfig.SECRET_REFRESH_KEY);
  }


  _verifyToken(token, secretKey) {
    try {
      console.log(`Token: ${token}`);
      return jwtUtils.verifyToken(token, secretKey);
    } catch (error) {
      console.log(error);
      return boomError(ERROR_TYPE.UNAUTHORIZED);
    }
  }

  _getAccessAndRefreshToken(userId)  {
    const accessToken = jwtUtils.createToken({ userId }, jwtConfig.SECRET_ACCESS_KEY, jwtConfig.ACCESS_TOKEN_CONFIG);
    const refreshToken = jwtUtils.createToken({ userId }, jwtConfig.SECRET_REFRESH_KEY, jwtConfig.REFRESH_TOKEN_CONFIG);
    return {
      accessToken,
      refreshToken,
      userId
    };
  }
}
