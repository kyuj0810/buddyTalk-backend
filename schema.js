// import { fileURLToPath } from 'url'; // 👈 추가
import path from 'path';
import url from 'url';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { loadFiles } from '@graphql-tools/load-files';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const loadedTypeDefs = await loadFiles(`${__dirname}/**/*.typeDefs.js`);
const loadedResolvers = await loadFiles(
  `${__dirname}/**/*.{queries,mutations}.js`
);

const typeDefs = mergeTypeDefs(loadedTypeDefs);
const resolvers = mergeResolvers(loadedResolvers);

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
