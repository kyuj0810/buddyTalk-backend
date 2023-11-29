import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import schema from './schema.js';

// export const typeDefs = gql`
//   type User {
//     id: Int!
//     username: String!
//   }

//   type Query {
//     users: [User]
//   }
// `;

// export const resolvers = {
//   Query: {
//     users: () => client.user.findMany(),
//   },
// };

const server = new ApolloServer({
  schema,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server
  .listen()
  .then(() => console.log('Server is running on http://localhost:4000/'));
