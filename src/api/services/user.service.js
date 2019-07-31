import { User } from '../models';
import { boomError, ERROR_TYPE } from '../../utils/boomError';
import { generateHash, compare } from '../../utils/hashUtils';
import { log } from 'winston';

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
          throw new boomError(ERROR_TYPE.NOT_FOUND);
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
          boomError(ERROR_TYPE.NOT_FOUND);
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
        const { password, ...users} = user;
        const correctPassword = compare(userPassword, password);
        if (!correctPassword) {
          return boomError(ERROR_TYPE.UNAUTHORIZED);
        }
        return {
          user: users
        };
      })
      .catch(err => {
        throw err;
      });
  }
}
