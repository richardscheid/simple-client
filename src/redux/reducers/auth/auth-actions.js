export const SET_TOKEN = 'SET_TOKEN';
export const AUTHENTICATE = 'AUTHENTICATE';
export const UNAUTHENTICATE = 'UNAUTHENTICATE';

export function authenticate() {
  return {
    type: AUTHENTICATE,
    payload: {
      authenticated: true,
    },
  };
}

export function unauthenticate() {
  return {
    type: UNAUTHENTICATE,
    payload: {
      authenticated: false,
      token: '',
    },
  };
}

export function setToken(token) {
  return {
    type: SET_TOKEN,
    payload: {
      token,
    },
  };
}
