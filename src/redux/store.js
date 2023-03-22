import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import updateLocalStorageMiddleware from 'services/auth/updateLocalStorageMiddleware';
import { authSlice } from './auth/authSlice';
import { searchReducer } from './search/searchSlice';

const persistConfig = {
  key: 'refresh-user-token',
  storage,
  whitelist: ['refreshToken', 'resetEmail', 'accessToken', 'user'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authSlice.reducer),
    search: searchReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoredActionPaths: ['payload.error'],
      },
    }).concat(updateLocalStorageMiddleware),
});

export const persistor = persistStore(store);
