import express from 'express';
import mongoose from 'mongoose';
import jobRoutes from './routes/jobRoutes';
import { connectDatabase } from './utils/db';

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json()); // Middleware to parse JSON bodies

// Database Connection
connectDatabase();

// Routes
app.use('/api/jobs', jobRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
