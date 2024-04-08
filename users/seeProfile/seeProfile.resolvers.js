import client from '../../client.js';
import { protectedResolver } from '../users.utils.js';

export default {
  Query: {
    seeProfile: protectedResolver((_, { username }) =>
      client.user.findUnique({
        where: {
          username,
        },
      })
    ),
  },
};
