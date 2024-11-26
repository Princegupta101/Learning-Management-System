import {Router } from 'express'

import { allPayments, buySubscription, cancelSubscription, getRaZorpayApikey, verifySubscription } from '../controllers/payment.controllers.js';
import { authorizedRoles, isLoggedIn } from '../middlewares/auth.middlewares.js';

const router = Router();
/**
 * @route GET /razorpay-key
 * @description Fetches Razorpay API key for authenticated users.
 * @access Private, Authenticated users only
 */
router
    .route('/razorpay-key')
    .get(
        isLoggedIn,
        getRaZorpayApikey
    );
/**
 * @route POST /subscribe
 * @description Initiates a subscription for the user.
 * @access Private, Authenticated users only
 */
router
    .route('/subscribe')
    .post(
        isLoggedIn,
        buySubscription
    );
/**
 * @route POST /verify
 * @description Verifies the subscription status of a user.
 * @access Private, Authenticated users only
 */
router
    .route('/verify')
    .post(
        isLoggedIn,
        verifySubscription
    );
/**
 * @route POST /unsubscribe
 * @description Cancels the subscription for the user.
 * @access Private, Authenticated users only
 */
router
    .route('/unsubscribe')
    .post(
        isLoggedIn,
        cancelSubscription
    );
 /**
 * @route GET /
 * @description Fetches all payments (for admin only).
 * @access Private, Admin users only
 */       
router
    .route('/')
    .get(
        isLoggedIn,
        authorizedRoles('ADMIN'),
        allPayments
    );

export default router;
