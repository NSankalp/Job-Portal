// availableJobs.js
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const jobSchema = new mongoose.Schema({
  id: Number,
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

// Update route to be under /api
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


module.exports = router;  // Export the router