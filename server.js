import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './app/config/config.js';
import authRoutes from './app/routes/authRoutes.js';  // Ensure this path is correct
import portfolioRoutes from './app/routes/portfolioRoutes.js';  // Ensure this path is correct
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/portfolio', portfolioRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
