import cookieParser from 'cookie-parser';
import cors from 'cors';
import { config } from 'dotenv';
import express from 'express';
import morgan from 'morgan';

import { isLoggedIn } from './middlewares/auth.middlewares.js'; // Ensure the auth middleware is being used correctly for login check
import { authorizedRoles } from './middlewares/auth.middlewares.js'; // Middleware for role-based authorization
import { checkBlacklistedToken } from './middlewares/checkBlacklistedToken.js';
import errorMiddlware from './middlewares/error.middleware.js';
import courseRoutes from './routes/course.Routes.js';
import miscRoutes from './routes/miscellanous.routes.js';
import paymentRoutes from './routes/payment.routes.js';
import userRoutes from './routes/user.Routes.js';

config();

const app = express();

// Middleware to parse incoming JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS configuration
app.use(
  cors({
    origin: `https://learning-management-system-roan.vercel.app`, // For security, use an environment variable to store the frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true, // Allow cookies to be sent along with requests
  })
);

// Cookie parser middleware
app.use(cookieParser());
app.use(checkBlacklistedToken); 

// Logger middleware for development
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev')); // You can switch to a more advanced logger like Winston in production
}

// Health check route
app.use('/ping', (_req, res) => {
  res.send('Pong');
});

// API routes with Role-Based Access Control
app.use('/api/v1/user', isLoggedIn, userRoutes); // Protect user routes with login check
app.use('/api/v1/course', isLoggedIn, authorizedRoles('Admin', 'User'), courseRoutes); // Protect course routes with role-based access
app.use('/api/v1/payments', isLoggedIn, authorizedRoles('Admin', 'User'), paymentRoutes); // Payments can be accessed by Admin/User
app.use('/api/v1', isLoggedIn, miscRoutes); // Misc routes may need access control based on roles

// Fallback for undefined routes (404)
app.all('*', (_req, res) => {
  res.status(404).send('OOPS!! 404 Page Not Found');
});

// Global error handling middleware
app.use(errorMiddlware);

export default app;
