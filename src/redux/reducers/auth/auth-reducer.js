import { AUTHENTICATE, UNAUTHENTICATE, SET_TOKEN } from './auth-actions';

export const initialState = {
  token: '',
  authenticated: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE: {
      return {
        ...state,
        authenticated: action.payload.authenticated,
      };
    }

    case UNAUTHENTICATE: {
      return {
        ...state,
        authenticated: action.payload.authenticated,
      };
    }

    case SET_TOKEN: {
      return {
        ...state,
        token: action.payload.token,
      };
    }

    default:
      return state;
  }
};
