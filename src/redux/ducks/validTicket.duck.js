import { Map } from 'immutable';
import { createActions, handleActions } from 'redux-actions';

const defaultState = Map({
  fetching: false,
  error: false,
  success: false,
  data: {},
});

export const {
  validticketRequest,
  validticketSuccess,
  validticketFailure,
} = createActions({
  VALIDTICKET_REQUEST: () => ({
    ...defaultState,
    fetching: true,
  }),
  VALIDTICKET_SUCCESS: (data) => ({
    fetching: false,
    success: true,
    error: false,
    data
  }),
  VALIDTICKET_FAILURE: () => ({
    fetching: false,
    error: true,
  })
});

const validTicket = handleActions(
  {
    [validticketRequest]: (state, { payload: { fetching, success, error, data } }) => {
      return state.withMutations((oldState) => {
        oldState.set('fetching', fetching);
        oldState.set('success', success);
        oldState.set('error', error);
        oldState.set('data', data);
      });
    },
    [validticketSuccess]: (state, { payload: { fetching, success, data } }) => {
      return state.withMutations((oldState) => {
        oldState.set('fetching', fetching);
        oldState.set('success', success);
        oldState.set('data', data);
      });
    },
    [validticketFailure]: (state, { payload: { fetching, error } }) => {
      return state.withMutations((oldState) => {
        oldState.set('fetching', fetching);
        oldState.set('error', error);
      });
    }
  },
  defaultState
);

export default validTicket;
