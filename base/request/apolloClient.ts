import { ENDPOINT } from './../constant/variables';
import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: ENDPOINT,
  cache: new InMemoryCache(),
});

export default apolloClient;