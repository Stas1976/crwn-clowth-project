import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
// import createSagaMiddleware from 'redux-saga'

import rootReducer from './root-reducer';

// const middleware = [logger];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// if (process.env.NODE_ENV === 'development') {
//   middleware.push(logger);
// }

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

export default { store, persistStore };
