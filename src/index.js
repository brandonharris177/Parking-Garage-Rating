import React from 'react';
import { render } from 'react-dom';
import './index.css';
import {ApolloClient, createHttpLink, ApolloProvider, InMemoryCache} from '@apollo/client'
import { setContext } from '@apollo/client/link/context';
import env from "react-dotenv";

const httpLink = createHttpLink({
  uri: `https://api.yelp.com/v3/graphql`,
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${env.ACCESS_TOKEN}`
    }
  }
})

const client = new ApolloClient({
  cache: new InMemoryCache(), 
  link: authLink.concat(httpLink),
});

const App = () => (
  <ApolloProvider client={client}>
    <h1>This is rendering</h1>
  </ApolloProvider>
);

render(<App />, document.getElementById('root'));
