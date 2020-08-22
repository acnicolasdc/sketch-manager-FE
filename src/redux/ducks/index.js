import { combineReducers } from 'redux-immutable';
import auth from './auth.duck';

const reducer = combineReducers({
  auth,
});

export default reducer;
