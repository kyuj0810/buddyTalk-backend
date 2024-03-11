import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
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
    login: async (_, { username, password }) => {
      const user = await client.user.findFirst({ where: { username } });

      if (!user) {
        return {
          ok: false,
          error: 'User not found.',
        };
      }

      const passwordOK = await bcrypt.compare(password, user.password);
      if (!passwordOK) {
        return {
          ok: false,
          error: 'Incorrect password.',
        };
      }

      const token = await jwt.sign({ id: user.id }, process.env.SECRET_KEY);
      return {
        ok: true,
        token,
      };
    },
  },
};
