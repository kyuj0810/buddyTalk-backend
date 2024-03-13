import client from '../../client.js';
import bcrypt from 'bcrypt';

export default {
  Mutation: {
    editProfile: async (
      _,
      { email, password: newPassword },
      { loggedInUser, protectResolver }
    ) => {
      protectResolver(loggedInUser);

      let uglyPassword = null;
      if (newPassword) {
        uglyPassword = await bcrypt.hash(newPassword, 10);
      }

      const updatedUser = await client.user.update({
        where: {
          id: loggedInUser.id,
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
