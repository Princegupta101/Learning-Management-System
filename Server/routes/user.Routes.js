import { Router } from "express";

import { register,login,logout,getProfile } from "../controllers/user.controller.js";
import { isLoggedIn } from "../middlewares/auth.middlewares.js";
import upload from "../middlewares/multer.middleware.js";

const router = Router();

router.post('/register', upload.single("avatar"), register),
router.post('/login', login);
router.get('/logout', logout);
router.get('/me',isLoggedIn, getProfile);

export default router;