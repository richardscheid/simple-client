import { AUTHENTICATE, UNAUTHENTICATE } from './auth-actions';

export const initialState = {
  token: '',
  authenticated: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE: {
      return {
        ...state,
        token: action.payload.token,
        authenticated: action.payload.authenticated,
      };
    }

    case UNAUTHENTICATE: {
      return {
        ...state,
        token: action.payload.token,
        authenticated: action.payload.authenticated,
      };
    }

    default:
      return state;
  }
};
