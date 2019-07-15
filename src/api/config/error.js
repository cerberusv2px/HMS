export const errors = {
  INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',
  UNAUTHENTICATED: 'UNAUTHENTICATED',
  INVALID_TYPE: 'INVALID_TYPE',
  FORBIDDEN: 'FORBIDDEN',
  FAILED: 'FAILED',
  INVALID_CODE: 'INVALID_CODE',
  NotFoundError: 'NotFoundError',
  TokenExpiredError: 'TokenExpiredError',
  JsonWebTokenError: 'JsonWebTokenError',
  INVALID_REFRESH_TOKEN: 'INVALID_REFRESH_TOKEN',
  FILE_NOT_FOUND: 'FILE_NOT_FOUND',
  INVALID_CSV: 'INVALID_CSV',
  CHILD_TARGET_INVALID: 'CHILD_TARGET_INVALID',
  NOT_OWNED: 'NOT_OWNED',
  INVOICE_EXISTS: 'INVOICE_EXISTS'
}

export const errorDetail = {
  FORBIDDEN: {
    message: 'You are not authorized to make this request.',
    code: 403
  },
  UNAUTHENTICATED: {
    message: 'You are not authenticated to make this request.',
    code: 401
  },
  INVALID_TYPE: {
    message: 'Invalid Type',
    code: 422
  },
  FAILED: {
    message: 'Something went wrong. Do not worry. It shouldn\'t be that horrible.',
    code: 500
  },
  INVALID_CREDENTIALS: {
    message: 'Incorrect username or password.',
    code: 401
  },
  NotFoundError: {
    message: 'The requested resource could not be found.',
    code: 404
  },
  INVALID_CODE: {
    message: 'Invalid Verification Code.',
    code: 422
  },
  TokenExpiredError: {
    message: 'The authentication token has expired.',
    code: 401
  },
  JsonWebTokenError: {
    message: 'Required authentication token is missing or malformed.',
    code: 401
  },
  INVALID_REFRESH_TOKEN: {
    message: 'Invalid Refresh Token.',
    code: 422
  },
  FILE_NOT_FOUND: {
    message: 'The file trying to be read not found.',
    code: 404
  },
  INVALID_CSV: {
    message: 'The uploaded file seems to be invalid. Please check and try again.',
    code: 422
  },
  CHILD_TARGET_INVALID: {
    message: 'The child targets cannot exceed the parent targets.',
    code: 422
  },
  NOT_OWNED: {
    message: 'You cannot set the target to this Route, since it is not assigned to you.',
    code: 403
  },
  INVOICE_EXISTS: {
    message: 'The invoice number requested already exists.',
    code: 409
  }
}
