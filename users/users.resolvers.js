import client from '../client.js';

export default {
  Query: {
    user: (_, { id }) =>
      client.user.findUnique({
        where: { id },
      }),
    users: () => client.user.findMany(),
  },
  Mutation: {
    createAccount: (_, { username, email, password }) =>
      client.user.create({
        data: {
          username,
          email,
          password,
        },
      }),
    deleteAccount: (_, { id }) =>
      client.user.delete({
        where: { id },
      }),
    updateAccount: (_, { id, email }) =>
      client.user.update({
        where: { id },
        data: { email },
      }),
  },
};
