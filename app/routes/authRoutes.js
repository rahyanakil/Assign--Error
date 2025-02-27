// routes/authRoutes.js
import { Router } from 'express';
import { register, login } from '../controllers/authController.js';  // Make sure to use .js extension
const router = Router();

router.post('/register', register);
router.post('/login', login);

export default router;
