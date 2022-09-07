import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reportWebVitals from './reportWebVitals';

import Reducers from './Reducers';


const store = createStore(Reducers);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /*<React.StrictMode>
    <App />
  </React.StrictMode>*/
  <Provider store={store}>
    <App/>
  </Provider>
);

reportWebVitals();
