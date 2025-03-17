import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [file, setFile] = useState(null);
  const [feedback, setFeedback] = useState([]);
  const [atsScore, setAtsScore] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [jobRole, setJobRole] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please upload a resume");
      return;
    }

    if (!jobRole) {
      alert("Please select a job role");
      return;
    }

    if (!jobDescription.trim()) {
      alert("Please enter a job description");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);
    formData.append("jobRole", jobRole);
    formData.append("jobDescription", jobDescription);

    try {
      const response = await axios.post(
        "http://localhost:3000/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log("API Response:", response.data);
      setAtsScore(response.data.atsScore);
      setSuggestions(response.data.missingSkills || []);
    } catch (error) {
      console.error(error);
      setFeedback([
        { label: "Error", message: "Error analyzing resume. Try again." },
      ]);
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "50px auto",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ color: "#333" }}>Upload Your Resume for AI Analysis</h2>

        {/* Job Role Selection */}
        <label
          htmlFor="jobRole"
          style={{ fontWeight: "bold", display: "block", marginTop: "15px" }}
        >
          Select Your Job Role:
        </label>
        <select
          id="jobRole"
          value={jobRole}
          onChange={(e) => setJobRole(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "5px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        >
          <option value="">--Select--</option>
          <option value="Web Development">Web Development</option>
          <option value="Data Science">Data Science</option>
          <option value="Cybersecurity">Cybersecurity</option>
          <option value="Cloud Computing">Cloud Computing</option>
          <option value="DevOps">DevOps</option>
        </select>

        {/* Job Description Input */}
        <label
          htmlFor="jobDescription"
          style={{ fontWeight: "bold", display: "block", marginTop: "15px" }}
        >
          Paste Job Description:
        </label>
        <textarea
          id="jobDescription"
          rows="4"
          cols="50"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Copy and paste the job description here..."
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "5px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            resize: "none",
          }}
        ></textarea>

        {/* Resume Upload */}
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          style={{
            marginTop: "15px",
            padding: "10px",
            display: "block",
            width: "100%",
          }}
        />

        <button
          onClick={handleUpload}
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "10px",
            fontSize: "16px",
          }}
        >
          Analyze
        </button>

        {/* Display ATS Score */}
        {atsScore !== null && (
          <div style={{ marginTop: "20px" }}>
            <h3 style={{ color: "#333" }}>ATS Score: {atsScore}%</h3>
            <p style={{ color: atsScore >= 70 ? "green" : "red" }}>
              {atsScore >= 70
                ? "Great! Your resume is well-optimized."
                : "Consider improving your resume."}
            </p>
          </div>
        )}

        {/* Suggested Improvements */}
        {suggestions.length > 0 && (
          <div style={{ marginTop: "20px" }}>
            <h3 style={{ color: "#333" }}>Suggested Improvements:</h3>
            <ul
              style={{
                textAlign: "left",
                padding: "10px",
                listStyleType: "disc",
              }}
            >
              {suggestions.map((suggestion, index) => (
                <li key={index} style={{ marginBottom: "5px" }}>
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
