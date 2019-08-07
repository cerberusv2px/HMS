import userController from './user.controller';
import User from './user.model';
import UserService from './user.service';

const userService = new UserService();

export {
  userController,
  userService,
  User
};
