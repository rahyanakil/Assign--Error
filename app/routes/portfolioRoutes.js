const express = require('express');
const { createPortfolio, getPortfolios, updatePortfolio, deletePortfolio } = require('../controllers/portfolioController');
const authMiddleware = require('../middlewares/authMiddleware'); // ✅ Correct way to import

export const portfolioRoutes = express.Router();


router.post('/', authMiddleware, createPortfolio);
router.get('/', authMiddleware, getPortfolios);
router.put('/:id', authMiddleware, updatePortfolio);
router.delete('/:id', authMiddleware, deletePortfolio);


