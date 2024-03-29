import bcrypt from 'bcrypt';
import client from '../../client.js';

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
          return {
            ok: false,
            error: '이미 등록된 username 또는 email 입니다.',
          };
          // throw new Error('이미 등록된 username 또는 email 입니다.');
        }

        const uglyPassword = await bcrypt.hash(password, 10);
        const createUser = await client.user.create({
          data: { username, email, password: uglyPassword },
        });
        console.log(createUser);
        if (createUser.id) {
          return { ok: true };
        } else {
          return { ok: false, error: '시스템담당자에게 문의바랍니다.' };
        }
      } catch (e) {
        return e;
      }
    },
  },
};
