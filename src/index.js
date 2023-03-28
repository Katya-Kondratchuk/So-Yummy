import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import App from './App';
import LoaderSuspense from 'components/LoaderSuspense/LoaderSuspense';
import { setupInterceptors } from 'services/auth/setupInterceptors';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <PersistGate loading={<LoaderSuspense />} persistor={persistor}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </PersistGate>
  </StrictMode>,
);

setupInterceptors(store);
