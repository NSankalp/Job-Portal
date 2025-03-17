import React from "react";
import "./JobCard.css";

const JobCard = ({ job, onViewDetails, onApply }) => {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
      <div className="job-card-buttons">
        <button className="apply-button" onClick={() => onApply(job)}>
          Apply
        </button>
        <button className="view-details-button" onClick={() => onViewDetails(job)}>
          View Details
        </button>
      </div>
    </div>
  );
};

export default JobCard;
