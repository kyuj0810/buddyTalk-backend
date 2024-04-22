import client from '../../client.js';
import { protectedResolver } from '../users.utils.js';

export default {
  Query: {
    me: protectedResolver((_, __, { loggedInUser }) =>
      client.user.findUnique({
        where: {
          id: loggedInUser.id,
        },
      })
    ),
  },
};
