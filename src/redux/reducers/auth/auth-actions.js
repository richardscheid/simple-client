export const AUTHENTICATE = 'AUTHENTICATE';
export const UNAUTHENTICATE = 'UNAUTHENTICATE';

export function authenticate(token) {
  return {
    type: AUTHENTICATE,
    payload: {
      token,
      authenticated: true,
    },
  };
}

export function unauthenticate() {
  return {
    type: UNAUTHENTICATE,
    payload: {
      token: '',
      authenticated: false,
    },
  };
}
