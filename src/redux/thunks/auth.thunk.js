import { auth } from 'services';
import {
  authRequest,
  authFailure,
  authSuccess
} from 'redux/ducks/auth.duck';

export const loginRequest = (dispatch, { username, password }) => {
  dispatch(authRequest());
  return auth
    .login(username, password)
    .then(({ data }) => {
      dispatch(authSuccess(data));
      return data;
    })
    .catch(({ message }) => {
      dispatch(authFailure());
      return { access_granted: false, error: message };
    });
};
