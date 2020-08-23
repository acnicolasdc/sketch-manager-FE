import { Map } from 'immutable';
import { createActions, handleActions } from 'redux-actions';

const defaultState = Map({
  material: [],
  pressure: [],
  size: [],
  method: [],
  length: '',
  year: '',
  cover: [70],
});

export const {
  setMaterial,
  setMethod,
  setSize,
  setPressure,
  setYear,
  setLength,
  setCover,
} = createActions({
  SET_MATERIAL: (material) => ({ material }),
  SET_METHOD: (method) => ({ method }),
  SET_SIZE: (size) => ({ size }),
  SET_PRESSURE: (pressure) => ({ pressure }),
  SET_YEAR: (year) => ({ year }),
  SET_LENGTH: (length) => ({ length }),
  SET_COVER: (cover) => ({ cover })
});

const pipeForm = handleActions(
  {
    [setMaterial]: (state, { payload: { material } }) => {
      return state.withMutations((oldState) => {
        oldState.set('material', material);
      });
    },
    [setMethod]: (state, { payload: { method } }) => {
      return state.withMutations((oldState) => {
        oldState.set('method', method);
      });
    },
    [setSize]: (state, { payload: { size } }) => {
      return state.withMutations((oldState) => {
        oldState.set('size', size);
      });
    },
    [setPressure]: (state, { payload: { pressure } }) => {
        return state.withMutations((oldState) => {
          oldState.set('pressure', pressure);
        });
      },
    [setYear]: (state, { payload: { year } }) => {
        return state.withMutations((oldState) => {
          oldState.set('year', year);
        });
      },
    [setCover]: (state, { payload: { cover } }) => {
        return state.withMutations((oldState) => {
          oldState.set('cover', cover);
        });
    },
    [setLength]: (state, { payload: { length } }) => {
        return state.withMutations((oldState) => {
          oldState.set('length', length);
        });
    }
  },
  defaultState
);

export default pipeForm;
