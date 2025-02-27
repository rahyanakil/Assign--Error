
import Portfolio from '../models/portfolioModel.js'

export const createPortfolio = async (req, res) => {
    const portfolio = new Portfolio({ ...req.body, userId: req.user.id });
    await portfolio.save();
    res.status(201).json(portfolio);
};

export const getPortfolios = async (req, res) => {
    const portfolios = await Portfolio.find({ userId: req.user.id });
    res.json(portfolios);
};

export const updatePortfolio = async (req, res) => {
    await Portfolio.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Portfolio updated' });
};

export const deletePortfolio = async (req, res) => {
    await Portfolio.findByIdAndDelete(req.params.id);
    res.json({ message: 'Portfolio deleted' });
};