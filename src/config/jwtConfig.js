export const ACCESS_TOKEN_CONFIG = {
  expiresIn: '1d',
  issuer: 'ISO'
};

export const REFRESH_TOKEN_CONFIG = {
  expiresIn: '30d',
  issuer: 'ISO'
};

export const { SECRET_ACCESS_KEY } = process.env;
export const { SECRET_REFRESH_KEY } = process.env;
