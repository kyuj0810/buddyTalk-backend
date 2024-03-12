import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import schema from './schema.js';

const server = new ApolloServer({
  schema,
  context: {
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNzEwMjMyNTI3fQ.7z6lwQpi2zBrLpriqk3N1yq0omTTKE13EJYI0oHQSVo',
  },
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const PORT = process.env.PORT;

server
  .listen(PORT)
  .then(() => console.log(`💬 Server is running on http://localhost:${PORT}`));
