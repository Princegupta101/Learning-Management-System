import redisClient from '../utils/redis.js';

export const checkBlacklistedToken = (req, res, next) => {
  const token = req.cookies?.token || req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized access, please login.' });
  }

  redisClient.get(token, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Redis error' });
    }
    
    if (result) {
      return res.status(401).json({ message: 'This token is blacklisted. Please login again.' });
    }
    
    next();
  });
};
