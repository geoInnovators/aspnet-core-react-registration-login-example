import { combineReducers } from 'redux';
import { reducer as oidcReducer } from 'redux-oidc';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  oidc: oidcReducer
});

export default rootReducer;