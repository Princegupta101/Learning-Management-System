import jwt from "jsonwebtoken";

import User from '../models/usermodel.js';
import AppError from "../utils/error.util.js";

// Middleware to check if the user is logged in
const isLoggedIn = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return next(new AppError('Unauthenticated, please log in again', 401));
    }

    try {
        const userDetails = await jwt.verify(token, process.env.JWT_SECRET);
        req.user = userDetails; // Store user details in the request object
        next();
    } catch (err) {
        return next(new AppError('Invalid or expired token, please log in again', 401));
    }
};

// Middleware to check if the user has the necessary roles to access a route
const authorizedRoles = (...roles) => async (req, res, next) => {
    const currentUserRole = req.user.roles; // Get current user's roles from the request object

    if (!roles.includes(currentUserRole)) {
        return next(new AppError("You do not have permission to access this route", 403));
    }
    
    next();
};

// Middleware to check if the user is a subscriber with an active subscription
const authorizedSubscriber = async (req, res, next) => {
    const user = await User.findById(req.user.id); // Retrieve user by their id stored in req.user
    const subscriptionStatus = user.subscription.status;
    const currentUserRole = user.role;

    if (currentUserRole !== 'ADMIN' && subscriptionStatus !== 'active') {
        return next(new AppError("Please subscribe to access this feature", 403));
    }

    next();
};

export {
    isLoggedIn,
    authorizedRoles,
    authorizedSubscriber,
};
