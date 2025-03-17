import React from "react";
import { useParams } from "react-router-dom";
import jobsData from "../data/jobs.json";
import "./JobDetails.css";

const JobDetails = () => {
  const { id } = useParams();

  // Ensure both id values are the same type (both as strings here)
  const job = jobsData.find((job) => job.id.toString() === id);

  if (!job) {
    return <h1>Job not found</h1>;
  }

  return (
    <div className="job-details">
      <h2>{job.title}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
      <p><strong>Description:</strong> {job.description}</p>

      <p><strong>Qualifications:</strong></p>
      <ul>
        {job.qualifications.map((qualification, index) => (
          <li key={index}>{qualification}</li>
        ))}
      </ul>

      <p><strong>About the Company:</strong></p>
      <p>{job.aboutCompany}</p>

      <button>Apply Now</button>
    </div>
  );
};

export default JobDetails;
