// availableJobs.js
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const jobSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: false},
  title: String,
  company: String,
  location: String,
  salary: Number,
  description: String,
  qualifications: String,
  aboutCompany: String,
  adminemail: String,
});

const Job = mongoose.model('Job', jobSchema);


router.get("/available-jobs", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ 
      message: "Error fetching jobs.", 
      error: err.message
    });
  }
});

router.get('/available-jobs/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const job = await Job.findOne({ id: Number(id) }); // Ensure ID is treated as a number
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.status(200).json(job);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching job details.', error: err.message });
  }
});

router.get('/job/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const job = await Job.findOne({ id: id }); // Find job by ID
    if (!job) {
      return res.status(404).send('Job not found');
    }
    res.status(200).json(job); // Send the job details as response
  } catch (err) {
    res.status(500).send('Error fetching job details.');
  }
});
module.exports = router;  // Export the router