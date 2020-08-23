import { combineReducers } from 'redux-immutable';
import auth from './auth.duck';
import validTicket from './validTicket.duck';
import pipeForm from './pipeForm.duck';

const reducer = combineReducers({
  auth,
  validTicket,
  pipeForm
});

export default reducer;
