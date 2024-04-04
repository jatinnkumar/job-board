import { Request, Response } from 'express';
import { Job } from '../models/jobModel';

// Get all jobs
export const getJobs = async (req: Request, res: Response) => {
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

// Get a single job by ID
export const getJobById = async (req: Request, res: Response) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.status(200).json(job);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

// Add a new job
export const addJob = async (req: Request, res: Response) => {
    const job = new Job({
        title: req.body.title,
        description: req.body.description,
        company: req.body.company,
        location: req.body.location,
        // Add other fields as necessary
    });
    console.log(job)
    try {
        const newJob = await job.save();
        res.status(201).json(newJob);
    } catch (error) {
        res.status(400).json({ message: error });
    }
};

// Update a job
export const updateJob = async (req: Request, res: Response) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }

        job.title = req.body.title || job.title;
        job.description = req.body.description || job.description;
        job.company = req.body.company || job.company;
        job.location = req.body.location || job.location;
        // Update other fields as necessary

        const updatedJob = await job.save();
        res.status(200).json(updatedJob);
    } catch (error) {
        res.status(400).json({ message: error });
    }
};

// Delete a job
export const deleteJob = async (req: Request, res: Response) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        await job.deleteOne();
        res.status(200).json({ message: 'Job deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error });
    }
};
