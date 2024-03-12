import client from '../../client.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export default {
  Mutation: {
    editProfile: async (_, { email, password: newPassword }, { token }) => {
      console.log(token);
      const { id } = await jwt.verify(token, process.env.SECRET_KEY);
      let uglyPassword = null;

      if (newPassword) {
        uglyPassword = await bcrypt.hash(newPassword, 10);
      }

      const updatedUser = await client.user.update({
        where: {
          id,
        },
        data: {
          email,
          // password: uglyPassword,
          ...(uglyPassword && { password: uglyPassword }),
        },
      });

      if (updatedUser.id) {
        return {
          ok: true,
        };
      } else {
        return {
          ok: false,
          error: 'Could not update profile.',
        };
      }
    },
  },
};
