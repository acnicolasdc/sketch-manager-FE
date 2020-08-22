import thunk from 'redux-thunk';
// import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose } from 'redux';

let enhancerCompose = compose;
// const saga = createSagaMiddleware();
// const middleware = [saga, thunk];
const middleware = [thunk];

// export const sagaMiddleware = saga;
export default enhancerCompose(applyMiddleware(...middleware));
