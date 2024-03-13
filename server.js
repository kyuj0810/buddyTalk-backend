import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import schema from './schema.js';
import { getUser } from './users/users.utils.js';

const server = new ApolloServer({
  schema,
  context: async ({ req }) => {
    // console.log(req.headers);
    return {
      loggedInUser: await getUser(req.headers.token),
    };
  },
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const PORT = process.env.PORT;

server
  .listen(PORT)
  .then(() => console.log(`💬 Server is running on http://localhost:${PORT}`));
