
import { Router } from 'express';

import { contactUs, userStats } from '../controllers/miscellaneous.controller.js';
import { authorizedRoles, isLoggedIn } from '../middlewares/auth.middlewares.js';

const router = Router();

// {{URL}}/api/v1/
router.route('/contact').post(contactUs);
router
  .route('/admin/stats/users')
  .get(isLoggedIn, authorizedRoles('ADMIN'), userStats);

export default router;
