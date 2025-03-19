import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./JobDetails.css";

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isApplying, setIsApplying] = useState(false);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/jobs/available-jobs/${id}`
        );
        if (response.ok) {
          const jobData = await response.json();
          setJob(jobData);
        } else {
          console.error("Failed to fetch job details");
        }
      } catch (err) {
        console.error("Error fetching job details:", err);
      }
    };

    fetchJobDetails();
  }, [id]);

  const handleApply = async () => {
    const username = localStorage.getItem("username");
    if (!username) {
      navigate("/login");
      return;
    }

    setIsApplying(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/jobs/apply`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username,
            jobId: job.id,
            jobTitle: job.title,
            company: job.company,
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setSuccess("Application submitted successfully!");
      } else {
        setError(data.error || "Failed to apply for the job.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again later.");
    } finally {
      setIsApplying(false);
    }
  };

  if (!job) {
    return <h1>Loading job details...</h1>;
  }

  return (
    <div className="job-details">
      <h2>{job.title}</h2>
      <p>
        <strong>Company:</strong> {job.company}
      </p>
      <p>
        <strong>Location:</strong> {job.location}
      </p>
      <p>
        <strong>Salary:</strong> {job.salary}
      </p>
      <p>
        <strong>Description:</strong> {job.description}
      </p>

      <p>
        <strong>Qualifications:</strong>
      </p>
      <ul>
        {job.qualifications.split("\n").map((qualification, index) => (
          <li key={index}>{qualification}</li>
        ))}
      </ul>

      <p>
        <strong>About the Company:</strong>
      </p>
      <p>{job.aboutCompany}</p>

      <div className="application-status">
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
      </div>

      <button onClick={handleApply} disabled={isApplying}>
        {isApplying ? "Applying..." : "Apply Now"}
      </button>
    </div>
  );
};

export default JobDetails;
