import { createClient } from 'redis';

// Connect to Redis with password
const redisClient = createClient({
  url: `redis://redis-10453.c257.us-east-1-3.ec2.redns.redis-cloud.com:10453`,
  password: `SUatsVlqtrFshWhekzqildkAiC7d4Pqo`, // Include the password for authentication
});

// Handle connection events
redisClient.on('connect', () => {
  console.log('Connected to Redis');
});

redisClient.on('error', (err) => {
  console.error('Redis error:', err);
});

// Connect to Redis
redisClient.connect(); // Explicitly connect to Redis

export default redisClient;
