import { combineReducers } from 'redux';
import {
  initialState as authInitialState,
  reducer as auth,
  authenticate,
  unauthenticate,
  setAccessToken,
} from './auth';

const combinedReducers = combineReducers({
  auth,
});

const initialState = {
  auth: {
    ...authInitialState,
  },
};

export {
  combinedReducers,
  initialState,
  authenticate,
  unauthenticate,
  setAccessToken,
};
