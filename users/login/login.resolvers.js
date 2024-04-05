import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import client from '../../client.js';

export default {
  Mutation: {
    login: async (_, { username, password }) => {
      const user = await client.user.findFirst({ where: { username } });

      if (!user) {
        return {
          ok: false,
          error: '유효한 유저가 아닙니다.',
        };
      }

      const passwordOK = await bcrypt.compare(password, user.password);
      if (!passwordOK) {
        return {
          ok: false,
          error: '패스워드가 정확하지 않습니다',
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
