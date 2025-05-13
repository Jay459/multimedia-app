// server/routes/searchRoutes.js
import express from 'express';
import { searchFiles } from '../controllers/searchController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', protect, searchFiles);

export default router;
