import { Router } from "express";
import { register,login,logout,getProfile } from "../controllers/user.controller.js";
import { isLoggedIn } from "../middlewares/auth.middlewares.js";

const router = Router();

router.post('/register', register),
router.post('/login', login);
router.get('/logout', logout);
router.get('/me',isLoggedIn, getProfile);

export default router;