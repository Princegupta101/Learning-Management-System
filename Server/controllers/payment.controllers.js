import crypto from 'crypto'

import asyncHandler from '../middlewares/asyncHAndler.middleware.js';
import Payment from '../models/payment.model.js';
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
        if (user.subscription.id && user.subscription.status === 'created') {
            await user.save()

            res.status(200).json({
                success: true,
                message: "subscribed successfully",
                subscription_id: user.subscription.id
            })
        }
        else{
            const subscription = await razorpay.subscriptions.create({
                plan_id:process.env.RAZORPAY_PLAN_ID,
                customer_notify:1  ,
                total_count: 12,
            });
            user.subscription.id = subscription.id;

            user.subscription.status= subscription.status;
        
            await user.save();
            console.log(user.subscription.id);
            res.status(200).json({
                success:true,
                message:'Subscribed Sucessfully ',
                subscription_id:subscription.id
            });
      }
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
        const subscriptionId= user.subscription.id;

        const generateSignature = crypto.createHmac('sha256', process.env.RAZORPAY_SECRET)
                                                            .update(`${razorpay_payment_id}|${subscriptionId }`)
                                                            .digest('hex')
                                  
        if (generateSignature !== razorpay_signature) {
            return next(createError(400, "payment not verified , please try again"))
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
        user.subscription.status='Inactive';

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
        const{count,skip}=req.query;
    
        const allPayments = await razorpay.subscriptions.all({
            count: count ? count : 10, // If count is sent then use that else default to 10
            skip: skip ? skip : 0
        })

        const monthNames = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];

         const finalMonths = {
            January: 0,
            February: 0,
            March: 0,
            April: 0,
            May: 0,
            June: 0,
            July: 0,
            August: 0,
            September: 0,
            October: 0,
            November: 0,
            December: 0,
        };

        const monthlyWisePayments = allPayments.items.map((payment) => {
            // We are using payment.start_at which is in unix time, so we are converting it to Human readable format using Date()
            const monthsInNumbers = new Date(payment.start_at * 1000);
        
            return monthNames[monthsInNumbers.getMonth()];
        });

          monthlyWisePayments.map((month) => {
            Object.keys(finalMonths).forEach((objMonth) => {
              if (month === objMonth) {
                finalMonths[month] += 1;
              }
            });
          });

          const monthlySalesRecord = [];

          Object.keys(finalMonths).forEach((monthName) => {
            monthlySalesRecord.push(finalMonths[monthName]);
          });
        
          res.status(200).json({
            success: true,
            message: 'All payments',
            allPayments,
            finalMonths,
            monthlySalesRecord,
          });
    } catch (error) {
        return next(
            new AppError(error.message, 500)
        ) 
    }
 
   
});