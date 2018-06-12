import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import { autoRehydrate } from 'redux-persist';
import rootReducer from 'reducers';

export default function configureStore(initialState, history) {
  const middlewares = [routerMiddleware(history)];

  if (process.env.NODE_ENV === 'development') {
    middlewares.unshift(createLogger());
  }

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      autoRehydrate()
    )
  );

  return store;
};
