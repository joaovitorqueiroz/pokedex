import { GraphQLClient } from 'graphql-request';

const API_URL = 'https://beta.pokeapi.co/graphql/v1beta';

const client = new GraphQLClient(API_URL, { headers: {} });

export default client;
