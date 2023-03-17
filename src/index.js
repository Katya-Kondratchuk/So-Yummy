import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';
import LoaderSuspense from 'components/LoaderSuspense/LoaderSuspense';
import { setupInterceptors } from 'redux/auth/authOperation';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <PersistGate loading={<LoaderSuspense />} persistor={persistor}>
      <Provider store={store}>
        <BrowserRouter basename="/So-Yummy">
          <App />
        </BrowserRouter>
      </Provider>
    </PersistGate>
  </React.StrictMode>,
);

setupInterceptors(store);
