import { combineReducers } from 'redux-immutable';
import auth from './auth.duck';
import validTicket from './validTicket.duck';

const reducer = combineReducers({
  auth,
  validTicket
});

export default reducer;
