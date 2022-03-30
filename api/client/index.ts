import { ApolloClient, InMemoryCache } from '@apollo/client';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const apolloClient = new ApolloClient({
  uri: `${publicRuntimeConfig.API_URL || process.env.API_URL}/graphql`,
  cache: new InMemoryCache(),
});
