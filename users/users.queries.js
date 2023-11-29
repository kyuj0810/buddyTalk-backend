import client from '../client.js';

export default {
  Query: {
    users: () => client.user.findMany(),
  },
};
