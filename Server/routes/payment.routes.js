import {Router } from 'express'

import { allPayments, buySubscription, cancelSubscription, getRaZorpayApikey, verifySubscription } from '../controllers/payment.controllers.js';
import { authorizedRoles, isLoggedIn } from '../middlewares/auth.middlewares.js';

const router = Router();

router
    .route('/razorpay-key')
    .get(
        isLoggedIn,
        getRaZorpayApikey
    );

router
    .route('/subscribe')
    .post(
        isLoggedIn,
        buySubscription
    );

router
    .route('/verify')
    .post(
        isLoggedIn,
        verifySubscription
    );

router
    .route('/unsubscribe')
    .post(
        isLoggedIn,
        cancelSubscription
    );
        
router
    .route('/')
    .get(
        isLoggedIn,
        authorizedRoles('ADMIN'),
        allPayments
    );

export default router;
