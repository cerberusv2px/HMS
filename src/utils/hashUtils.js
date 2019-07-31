import bcrypt from 'bcryptjs';

const SALT_ROUND = 10;

export const generateSalt = saltRound => {
  return bcrypt.genSaltSync(saltRound);
};

export const generateHash = plainText => {
  const salt = generateSalt(SALT_ROUND);
  return bcrypt.hashSync(plainText, salt);
};

export const compare = (plainText, hash) => {
  return bcrypt.compareSync(plainText, hash);
};
