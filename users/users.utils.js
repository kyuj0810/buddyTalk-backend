import jwt from 'jsonwebtoken';
import client from '../client.js';

export const getUser = async (token) => {
  try {
    if (!token) {
      return null;
    }
    const { id } = await jwt.verify(token, process.env.SECRET_KEY);
    const user = await client.user.findUnique({ where: { id } });
    if (user) {
      return user;
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
};

export const protectResolver = (user) => {
  if (!user) {
    return {
      ok: false,
      error: 'You need to login.',
    };
  }
};
