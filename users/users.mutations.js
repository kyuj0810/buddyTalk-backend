import bcrypt from 'bcrypt';
import client from '../client.js';

export default {
  Mutation: {
    createAccount: async (_, { username, email, password }) => {
      try {
        const existingUser = await client.user.findFirst({
          where: {
            OR: [{ username }, { email }],
          },
        });
        if (existingUser) {
          throw new Error('This username/email is already taken.');
        }

        const uglyPassword = await bcrypt.hash(password, 10);
        return client.user.create({
          data: { username, email, password: uglyPassword },
        });
      } catch (e) {
        return e;
      }
    },
  },
};
