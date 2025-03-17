const mongoose = require("mongoose");

const jobApplicationSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true }, // Fetch from User model
  fullName: { type: String, default: "" }, // Fetch from User model
  contactNumber: { type: String, default: "" }, // Fetch from User model
  education: {
    institution: { type: String, default: "" },
    degree: { type: String, default: "" },
    graduationYear: { type: String, default: "" },
  },
  resume: {
    data: Buffer,
    contentType: String,
    name: String
  },
  skills: { type: [String], default: [] }, // Fetch from User model
  jobId: { type: String, required: true },
  jobTitle: { type: String, required: true },
  company: { type: String, required: true },
  appliedAt: { type: Date, default: Date.now },
});

const JobApplication = mongoose.model("JobApplication", jobApplicationSchema);

module.exports = JobApplication;
