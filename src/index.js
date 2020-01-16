import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

import { ApolloProvider } from 'react-apollo';
import { default as ApolloClient } from 'apollo-boost';
import { InMemoryCache } from "apollo-cache-inmemory";
import { typeDefs, resolvers } from './graphql/resolvers'

import './index.css';
import { default as App } from './App/App.container';
import { default as data } from './graphql/initial-data';

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: 'https://crwn-clothing.com/',
  cache,
  typeDefs,
  resolvers
});

client.writeData({
  data
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);
