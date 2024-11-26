
import { Router } from 'express';

import { contactUs, userStats } from '../controllers/miscellaneous.controller.js';
import { authorizedRoles, isLoggedIn } from '../middlewares/auth.middlewares.js';

const router = Router();
/**
 * @route POST /contact
 * @description Handles the contact form submission.
 * @access Public
 */
router.route('/contact').post(contactUs);
/**
 * @route GET /admin/stats/users
 * @description Fetches user statistics for admin.
 * @access Admin only
 */
router
  .route('/admin/stats/users')
  .get(isLoggedIn, authorizedRoles('ADMIN'), userStats);

export default router;
