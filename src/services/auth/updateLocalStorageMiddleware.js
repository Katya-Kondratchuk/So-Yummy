import { persistor } from 'redux/store';

const updateLocalStorageMiddleware = store => next => action => {
  const prevState = store.getState();
  const result = next(action);
  const nextState = store.getState();

  if (prevState.auth.refreshToken !== nextState.auth.refreshToken) {
    persistor.flush().then(() => {});
  }

  return result;
};

export default updateLocalStorageMiddleware;
