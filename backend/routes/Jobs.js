const express = require("express");
const JobApplication = require("../models/JobApplication");
const User = require("../models/user"); // Import User model
const router = express.Router();

// Apply for a job
router.post("/apply", async (req, res) => {
  const { username, jobId, jobTitle, company } = req.body;

  if (!username || !jobId || !jobTitle || !company) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Fetch user details from User model
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Create job application with user details
    const application = new JobApplication({
      username,
      email: user.email,
      fullName: user.fullName,
      contactNumber: user.contactNumber,
      education: user.education,
      skills: user.skills,
      resume: { // Copy the nested resume data
        data: user.resume.data,
        contentType: user.resume.contentType,
        name: user.resume.name
      },
      jobId,
      jobTitle,
      company,
    });

    await application.save();
    res.status(201).json({ message: "Job application submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});





module.exports = router;
