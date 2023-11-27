// import { fileURLToPath } from 'url'; // 👈 추가
import { makeExecutableSchema } from '@graphql-tools/schema';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';

// const __dirname = fileURLToPath(new URL('.', import.meta.url)); // 👈 추가
// const __filename = fileURLToPath(import.meta.url); // 👈 추가

const loadedTypes = loadFilesSync(`${__dirname}/**/*.queries.js`);
const loadedResolvers = loadFilesSync(`${__dirname}/**/*.typeDefs.js`);

const typeDefs = mergeTypeDefs(loadedTypes);
const resolvers = mergeResolvers(loadedResolvers);

console.log(typeDefs);

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
