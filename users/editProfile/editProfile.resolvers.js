import client from '../../client.js';
import bcrypt from 'bcrypt';
import { protectedResolver } from '../users.utils.js';

const resolverFn = async (
  _,
  { email, password: newPassword },
  { loggedInUser }
) => {
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
      error: '프로필을 변경할 수 없습니다.',
    };
  }
};

export default {
  Mutation: {
    editProfile: protectedResolver(resolverFn),
  },
};
