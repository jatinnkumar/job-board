import mongoose from 'mongoose';

export const connectDatabase = () => {
    const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/job-portal';
    mongoose.connect(dbURI)
        .then(() => console.log('Connected to database'))
        .catch((error) => console.error('Database connection failed', error));
};
