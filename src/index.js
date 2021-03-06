import React from 'react';
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import 'font-awesome/css/font-awesome.min.css';

import * as authActions from './actions/auth';
import config from './config';
import reducers from './reducers';
import routes from './Routes';
import registerServiceWorker from './registerServiceWorker';

import './index.css';


const networkInterface = createNetworkInterface({
  uri: config.API_URI,
});

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {}; // Create the header object if needed.
    }
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('f-token');

    if (token) {
      req.options.headers.authorization = `Bearer ${token}`;
    } else {
      delete req.options.headers.authorization;
    }

    next();
  },
}]);

const client = new ApolloClient({
  networkInterface,
});

const store = createStore(
  combineReducers(Object.assign(reducers, { apollo: client.reducer() })),
  {},
  compose(
      applyMiddleware(client.middleware(), thunk),
      // If you are using the devToolsExtension, you can add it here also
      (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  )
);

if (localStorage.getItem('f-token')) {
  store.dispatch(authActions.login(localStorage.getItem('f-token')));
}

ReactDOM.render(
  <ApolloProvider store={store} client={client}>
    <Router>{routes}</Router>
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();
