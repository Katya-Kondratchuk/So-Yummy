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
import { authSlice } from './auth/authSlice';

const persistConfig = {
  key: 'refresh-user-token',
  storage,
  whitelist: ['refreshToken'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authSlice.reducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoredActionPaths: ['payload.error'],
      },
    }),
});

export const persistor = persistStore(store);
