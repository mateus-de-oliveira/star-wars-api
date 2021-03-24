import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const link = new HttpLink({
  uri: 'https://swapi.apis.guru/graphiql',
})


export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
})