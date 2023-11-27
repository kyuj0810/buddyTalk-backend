import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import schema from './schema.js';
// const ApolloServer = require('apollo-server');
// const ApolloServerPluginLandingPageGraphQLPlayground = require('apollo-server-core');
// const schema = require('./schema');

const server = new ApolloServer({
  schema,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server
  .listen()
  .then(() => console.log('Server is running on http://localhost:4000/'));
