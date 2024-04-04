import mongoose, { Schema, Document } from 'mongoose';

interface IJob extends Document {
    title: string;
    description: string;
    company: string;
    location: string;
    // Add other fields as needed
}

const jobSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    // Define other fields here
});

export const Job = mongoose.model<IJob>('Job', jobSchema);
