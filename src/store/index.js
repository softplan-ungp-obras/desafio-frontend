import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './ducks';
import sagas from './sagas';

const middlewares = [];

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const tronMiddleware =
  process.env.NODE_ENV === 'development'
    ? console.tron.createEnhancer
    : () => {};

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares), tronMiddleware())
);

sagaMiddleware.run(sagas);

export default store;
