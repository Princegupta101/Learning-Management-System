import AppError from "../utils/error.util.js";
import jwt from "jsonwebtoken";

const isLoggedIn = async (req, res, next)=>{
    const {token}= req.cookies;

    if(!token){
        return next(new AppError('Unauthenticated, pls login  again ', 401));
    }
    const userDetails= await jwt.verify(token , process.env.JWT_SECRET );

    req.user = userDetails;

    next();
}

export{
    isLoggedIn
}
    
