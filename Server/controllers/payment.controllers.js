import crypto from 'crypto'

import asyncHandler from '../middlewares/asyncHAndler.middleware.js';
import User from '../models/usermodel.js';
import AppError from "../utils/error.util.js";
import { razorpay } from "../server.js";

/**
 * @GET_RAZORPAY_ID
 */
export const getRaZorpayApikey =asyncHandler(async(req, res, next)=>{
    try {
        res.status(200).json({
            success:true,
            message:'Razarpay API key ',
            key:process.env.RAZORPAY_KEY_ID
        });
    } catch (error) {
        return next(
            new AppError(error.message, 500)
        ) 
    }
  
});
/**
 * @ACTIVATE_SUBSCRIPTION
 */
export const buySubscription =asyncHandler(async(req, res, next)=>{
    try {
        const {id}= req.user;
        const user =await User.findById(id);
        if(!user){
            return next(
                new AppError("Unauthorize , please login")
            )
        }
        if(user.role==='ADMIN'){
            return next(
                new AppError(" Admin cannot purchase a subscription", 400)
            ) 
        }
        const subscription = await razorpay.subscription.create({
            plan_id:process.env.RAZORPAY_PLAN_ID,
            customer_notify:1
        });
    
        user.subscription.id = subscription.id;
        user.subscription.status= subscription.status;
    
        await user.save();
    
        res.status(200).json({
            success:true,
            message:'Subscribed Sucessfully ',
            subscription_id:subscription.id
        });
    } catch (error) {
        return next(
            new AppError(error.message, 500)
        ) 
    }
 
});
/**
 * @VERIFY_SUBSCRIPTION
 */
export const verifySubscription =asyncHandler(async(req, res, next)=>{
    try {
        const {id }= req.user;
        const {razorpay_payment_id, razorpay_signature , razorpay_subscription_id }= req.body;
    
        const user =await User.findById(id);
        if(!user){
            return next(
                new AppError("Unauthorize , please login")
            )
        }
        const subscriptionId=user.subscription.id;
    
        const generatedSingure=crypto
                                                        . createHmac('sha256',process.env.RAZORPAY_SECRET)
                                                        .update(`${razorpay_payment_id}| ${subscriptionId}`)
                                                        .digest('hex');
    
        if(generatedSingure!=razorpay_signature){
            return next(
                new AppError("Payment not verified , please try again ", 500)
            )
        }        
        
        await Payment.create({
            razorpay_payment_id,
            razorpay_signature,
            razorpay_subscription_id,
        })
         
        user.subscription.status='active';
    
        await user.save();
    
        res.status(200).json({
            success:true,
            message:'Payment verified Sucessfully ',
        });
    } catch (error) {
        return next(
            new AppError(error.message, 500)
        ) 
    }
  
});
/**
 * @CANCEL_SUBSCRIPTION
 */
export const cancelSubscription =asyncHandler(async(req, res, next)=>{

    try {
        const {id}= req.user;

        const user = await User.findById(id);
        if(!user){
            return next(
                new AppError("Unauthorize , please login")
            )
        }
        if(user.role==='ADMIN'){
            return next(
                new AppError(" Admin cannot purchase a subscription", 400)
            ) 
        }

        const subscriptionId= user.subscription.id;
        const subscription =await razorpay.subscriptions.cancel(
            subscriptionId
        )
        user.subscription.status='active';

        await user.save();

        res.status(200).json({
            success:true,
            message:'UnSubscribed  Sucessfully ',
        });
    } catch (error) {
        return next(
            new AppError(error.message, 500)
        ) 
    }
    
});
/**
 * @GET_RAZORPAY_ID
 */
export const allPayments =asyncHandler(async(req, res, next)=>{
    try {
        const{count}=req.query;
    
        const subscriptions = await razorpay.subscriptions.all({
            count :count ||10,
        })
    
        res.status(200).json({
            success:true,
            message:'All payments ',
            subscriptions
        });
    } catch (error) {
        return next(
            new AppError(error.message, 500)
        ) 
    }
 
   
});