export const AUTHENTICATE = 'AUTHENTICATE';
export const UNAUTHENTICATE = 'UNAUTHENTICATE';

export function authenticate(accessToken) {
  return {
    type: AUTHENTICATE,
    payload: {
      authenticated: true,
      accessToken: accessToken,
    },
  };
}

export function unauthenticate() {
  return {
    type: UNAUTHENTICATE,
    payload: {
      authenticated: false,
      accessToken: '',
    },
  };
}
