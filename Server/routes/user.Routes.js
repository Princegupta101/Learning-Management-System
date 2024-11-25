import { 
    register, 
    login, 
    logout, 
    getProfile, 
    forgotPassword, 
    resetPassword, 
    changePassword, 
    updateUser 
} from "../controllers/user.controller.js";
import { Router } from "express";

import { isLoggedIn } from "../middlewares/auth.middlewares.js";
import upload from "../middlewares/multer.middleware.js";

const router = Router();

// Register a new user with an avatar upload
router.post('/register', upload.single("avatar"), register);

// User login (without avatar upload)
router.post('/login', login);

// User logout (clear cookies)
router.post('/logout', logout);

// Get logged-in user's profile
router.get('/me', isLoggedIn, getProfile);

// Forgot password (send reset token)
router.post('/reset', forgotPassword);

// Reset password (user clicks the link in email)
router.post('/reset/:resetToken', resetPassword);

// Change password (logged-in user)
router.post('/change-password', isLoggedIn, changePassword);

// Update user details (logged-in user with optional avatar upload)
router.put('/update', isLoggedIn, upload.single("avatar"), updateUser);


export default router;
