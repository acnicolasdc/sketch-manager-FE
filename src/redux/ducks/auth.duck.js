import { Map } from 'immutable';
import { createActions, handleActions } from 'redux-actions';
const defaultState = Map({
  fetching: false,
  error: false,
  success: false,
  data: {},
});

export const {
  authRequest,
  authSuccess,
  authFailure,
} = createActions({
  AUTH_REQUEST: () => ({
    ...defaultState,
    fetching: true,
  }),
  AUTH_SUCCESS: (data) => ({
    fetching: false,
    success: true,
    error: false,
    data
  }),
  AUTH_FAILURE: () => ({
    fetching: false,
    error: true,
  })
});

const auth = handleActions(
  {
    [authRequest]: (state, { payload: { fetching, success, error, data } }) => {
      return state.withMutations((oldState) => {
        oldState.set('fetching', fetching);
        oldState.set('success', success);
        oldState.set('error', error);
        oldState.set('data', data);
      });
    },
    [authSuccess]: (state, { payload: { fetching, success, data } }) => {
      return state.withMutations((oldState) => {
        oldState.set('fetching', fetching);
        oldState.set('success', success);
        oldState.set('data', data);
      });
    },
    [authFailure]: (state, { payload: { fetching, error } }) => {
      return state.withMutations((oldState) => {
        oldState.set('fetching', fetching);
        oldState.set('error', error);
      });
    }
  },
  defaultState
);

export default auth;
