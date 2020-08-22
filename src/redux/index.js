import { createStore } from 'redux';
// import applyMiddleware, { sagaMiddleware } from './applyMiddleware';
import applyMiddleware from './applyMiddleware';
import reducers from './ducks';
// import rootSaga from './sagas';

const store = createStore(reducers, applyMiddleware);
// sagaMiddleware.run(rootSaga);

export default store;
