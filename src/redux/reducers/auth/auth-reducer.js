import { AUTHENTICATE, UNAUTHENTICATE, SET_TOKEN } from './auth-actions';

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
        accessToken: action.payload.accessToken,
      };
    }
    default:
      return state;
  }
};
