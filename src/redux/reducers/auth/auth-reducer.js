import { AUTHENTICATE, UNAUTHENTICATE } from './auth-actions';

export const initialState = {
  accessToken: '',
  authenticated: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE: {
      return {
        ...state,
        authenticated: action.payload.authenticated,
        accessToken: action.payload.accessToken,
      };
    }

    case UNAUTHENTICATE: {
      return {
        ...state,
        authenticated: action.payload.authenticated,
        accessToken: action.payload.accessToken,
      };
    }

    default:
      return state;
  }
};
