import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import {
  store,
  //  persistor
} from 'redux/store';
// import LoaderSuspense from 'components/LoaderSuspense/LoaderSuspense';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={<LoaderSuspense />} persistor={persistor}> */}
      <BrowserRouter basename="/So-Yummy">
        <App />
      </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
);
