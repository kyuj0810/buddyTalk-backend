import client from '../../client.js';
import { protectedResolver } from '../../users/users.utils.js';

const resolverFn = async (_, { title, days, hashtags }, { loggedInUser }) => {
  try {
    // console.log(hashtags);

    const createRoutine = await client.routine.create({
      data: { title, days, userId: loggedInUser.id },
    });

    if (createRoutine.id) {
      await client.hashtag.create({
        data: { hashtag: hashtags, routineId: createRoutine.id },
      });
    }

    if (createRoutine.id) {
      return { ok: true };
    } else {
      return { ok: false, error: '시스템담당자에게 문의바랍니다.' };
    }
  } catch (e) {
    return e;
  }
};

export default {
  Mutation: {
    createRoutine: protectedResolver(resolverFn),
  },
};
