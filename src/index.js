import React from 'react';
import { render } from 'react-dom';
import './index.css';
import {ApolloClient, createHttpLink, ApolloProvider, InMemoryCache} from '@apollo/client'
import { setContext } from '@apollo/client/link/context';
import env from "react-dotenv";
import LotSearch from "./Components/lotSearch"
import 'semantic-ui-css/semantic.min.css'

const httpLink = createHttpLink({
  uri: `http://localhost:8080/https://api.yelp.com/v3/graphql`,
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${env.ACCESS_TOKEN}`,
      "Accept-Language": "en_US"
    }
  }
})

const client = new ApolloClient({
  cache: new InMemoryCache(), 
  link: authLink.concat(httpLink),
});

const App = () => (
  <ApolloProvider client={client}>
    <LotSearch/>
  </ApolloProvider>
);

render(<App />, document.getElementById('root'));
