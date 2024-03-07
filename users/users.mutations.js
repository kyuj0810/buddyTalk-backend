import bcrypt from 'bcrypt';
import client from '../client.js';

export default {
  Mutation: {
    createAccount: async (_, { username, email, password }) => {
      const existingUser = await client.user.findFirst({
        where: {
          OR: [{ username }, { email }],
        },
      });

      const uglyPassword = await bcrypt.hash(password, 10);
      return client.user.create({
        data: { username, email, password: uglyPassword },
      });
    },
  },
};
