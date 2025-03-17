import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import JobCard from "../components/JobCard.jsx";
import Filters from "../components/Filters.jsx";
import "./AvailableJobs.css";

const AvailableJobs = () => {
  const navigate = useNavigate();
  const [jobsData, setJobsData] = useState([]); // Holds the fetched job data
  const [filters, setFilters] = useState({
    title: "",
    location: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;

  // Fetch job data from the backend
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/jobs/available-jobs"
        );

        const data = await response.json();
        console.log("Fetched jobs:", data);
        setJobsData(data); // Update state
      } catch (err) {
        console.error("Error fetching jobs:", err);
      }
    };

    fetchJobs();
  }, []);

  // Empty dependency array ensures this runs once when the component mounts

  // Filter jobs
  const filteredJobs = jobsData.filter((job) => {
    return (
      job.title.toLowerCase().includes(filters.title.toLowerCase()) &&
      job.location.toLowerCase().includes(filters.location.toLowerCase())
    );
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const handleViewDetails = (job) => {
    navigate(`/job/${job._id}`);
  };

  const handleApply = async (job) => {
    const username = localStorage.getItem("username"); // Get logged-in user
    if (!username) {
      alert("Please log in to apply for jobs.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/jobs/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          jobId: job._id,
          jobTitle: job.title,
          company: job.company,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Application submitted successfully!");
      } else {
        alert(data.error || "Failed to apply for the job.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div className="available-jobs">
      <h1 className="page-title">Available Jobs</h1>

      {/* Filters */}
      <Filters filters={filters} setFilters={setFilters} />

      {/* Job Cards */}
      <div className="job-cards-container">
        {currentJobs.map((job) => (
          <JobCard
            key={job._id}
            job={job}
            onViewDetails={handleViewDetails}
            onApply={handleApply} // Pass the onApply handler
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button onClick={handlePrevious} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default AvailableJobs;
