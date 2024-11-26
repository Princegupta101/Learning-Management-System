import jwt from "jsonwebtoken";

import User from '../models/usermodel.js'
import AppError from "../utils/error.util.js";

/**
 * @isLoggedIn - Middleware to check if the user is authenticated.
 * Verifies the JWT token from the cookies and attaches the user details to the request object.
 * If no token is present or invalid, it returns an "Unauthenticated" error.
 */

const isLoggedIn = async (req, res, next)=>{
    const {token}= req.cookies;

    if(!token){
        return next(new AppError('Unauthenticated, pls login  again ', 401));
    }
    const userDetails= await jwt.verify(token , process.env.JWT_SECRET );

    req.user = userDetails;

    next();
}
/**
 * @authorizedRoles - Middleware to check if the user has authorized roles.
 * It ensures that the current user has one of the roles required to access the route.
 */
const authorizedRoles = (...roles)=>async(req, res, next)=>{
    const currentUserRoles =req.user.roles;
    if(roles.includes(currentUserRoles)){
        return next (
            new AppError("You do not have permission to acess this route", 400)
        )
    }
    next();
}
/**
 * @authorizedSubscriber - Middleware to check if the user has an active subscription.
 * If the user is not an admin and does not have an active subscription, it returns a "Forbidden" error.
 */
const authorizedSubscriber =async(req, res, next) =>{
    const user = await User.findById(id)
    const subscription = user.subscription.status
    const currentUserRole = user.role
    if (currentUserRole !== 'ADMIN' && subscription !== 'active') {
        return next(createError(403, "please subscribe to access this"))
    }
}
export{
    isLoggedIn,
    authorizedRoles,
    authorizedSubscriber,
}
    
