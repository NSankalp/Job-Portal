import React, { useState } from "react";

const ProfileSetup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [institution, setInstitution] = useState("");
  const [degree, setDegree] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [skills, setSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [profilePicFile, setProfilePicFile] = useState(null);
  const [resume, setResume] = useState(null);
  const [internshipCompany, setInternshipCompany] = useState("");
  const [internshipRole, setInternshipRole] = useState("");
  const [internshipDuration, setInternshipDuration] = useState("");

  const skillOptions = [
    "C",
    "C++",
    "Java",
    "Python",
    "HTML",
    "CSS",
    "React",
    "Node.js",
  ];

  // Handlers for file uploads
  const handleProfilePicUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePicFile(file);
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleResumeUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validate file type and size
      if (file.type !== "application/pdf") {
        alert("Please upload a PDF file");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB");
        return;
      }
      setResume(file);
    }
  };

  // Add Skills
  const handleSkillAdd = () => {
    if (selectedSkill && !skills.includes(selectedSkill)) {
      setSkills([...skills, selectedSkill]);
    }
  };

  // Submit Profile Data using FormData
  const handleSubmit = async () => {
    const formData = new FormData();

    // Append regular fields
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("contactNumber", contactNumber);
    formData.append("institution", institution);
    formData.append("degree", degree);
    formData.append("graduationYear", graduationYear);
    formData.append("skills", JSON.stringify(skills));
    formData.append("internshipCompany", internshipCompany);
    formData.append("internshipRole", internshipRole);
    formData.append("internshipDuration", internshipDuration);

    // Append files
    if (profilePicFile) {
      formData.append("profilePic", profilePicFile);
    }
    if (resume) {
      formData.append("resume", resume);
    }

    try {
      const response = await fetch("http://localhost:3000/api/auth/profile", {
        method: "POST",
        body: formData,
      });

      const responseData = await response.json();
      console.log("Server response:", responseData);

      if (!response.ok) {
        throw new Error(
          responseData.error || `HTTP error! Status: ${response.status}`
        );
      }

      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error details:", error);
      alert(`Failed to submit profile: ${error.message}`);
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.logo}>👜 Fresh Start Hub</h1>
        <nav style={styles.nav}>
          <a href="#" style={styles.navItem}>
            Dashboard
          </a>
          <a href="/available-jobs" style={styles.navItem}>
            Job Search
          </a>
          <a href="/profile" style={styles.navItem}>
            Profile Setup
          </a>
          <a href="/practice" style={styles.navItem}>
            Gamification
          </a>
        </nav>
      </header>

      {/* Form Section */}
      <div style={styles.formContainer}>
        <h2>Profile Setup</h2>

        {/* Personal Information */}
        <h3 style={styles.sectionHeader}>Personal Information</h3>
        <div style={styles.inputGroup}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            style={styles.input}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <input
            type="tel"
            placeholder="Contact Number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            style={styles.input}
          />
          <div style={styles.fileUpload}>
            <label style={styles.fileLabel}>
              <b>Profile Picture</b>
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePicUpload}
              style={styles.fileInput}
            />
          </div>
          {profilePic && (
            <img src={profilePic} alt="Profile" style={styles.imagePreview} />
          )}
        </div>

        {/* Education */}
        <h3 style={styles.sectionHeader}>Education</h3>
        <div style={styles.inputGroup}>
          <input
            type="text"
            placeholder="Institution Name"
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Degree"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Year of Graduation"
            value={graduationYear}
            onChange={(e) => setGraduationYear(e.target.value)}
            style={styles.input}
          />
          <div style={styles.fileUpload}>
            <label style={styles.fileLabel}>
              <b>Upload Resume</b>
            </label>
            <input
              type="file"
              onChange={handleResumeUpload}
              style={styles.fileInput}
              accept="application/pdf"
            />
          </div>
          {resume && (
            <div style={styles.listItem}>
              {resume.name}
              <button
                onClick={() => setResume(null)}
                style={styles.removeButton}
              >
                Remove
              </button>
            </div>
          )}
        </div>

        {/* Skills */}
        <h3 style={styles.sectionHeader}>Skills</h3>
        <div style={styles.inputGroup}>
          <select
            style={styles.input}
            value={selectedSkill}
            onChange={(e) => setSelectedSkill(e.target.value)}
          >
            <option value="">Select a Skill</option>
            {skillOptions.map((skill, index) => (
              <option key={index} value={skill}>
                {skill}
              </option>
            ))}
          </select>
          <button style={styles.button} onClick={handleSkillAdd}>
            Add Skill
          </button>
        </div>
        <ul>
          {skills.map((skill, index) => (
            <li key={index} style={styles.skillItem}>
              {skill}
            </li>
          ))}
        </ul>

        {/* Internship Experience */}
        <h3 style={styles.sectionHeader}>Internship Experience</h3>
        <div style={styles.inputGroup}>
          <input
            type="text"
            placeholder="Company Name"
            value={internshipCompany}
            onChange={(e) => setInternshipCompany(e.target.value)}
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Role"
            value={internshipRole}
            onChange={(e) => setInternshipRole(e.target.value)}
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Duration (e.g., 3 months)"
            value={internshipDuration}
            onChange={(e) => setInternshipDuration(e.target.value)}
            style={styles.input}
          />
        </div>

        {/* Submit Button */}
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <button style={styles.submitButton} onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

// Updated styles
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8f8f8",
    minHeight: "100vh",
  },
  header: {
    backgroundColor: "#e3b041",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.5rem 2rem",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#000",
  },
  nav: {
    display: "flex",
    gap: "1.5rem",
  },
  navItem: {
    color: "#000",
    textDecoration: "none",
    fontWeight: "bold",
  },
  formContainer: {
    margin: "2rem auto",
    padding: "2rem",
    backgroundColor: "#fff",
    maxWidth: "800px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  sectionHeader: {
    marginTop: "1.5rem",
    fontSize: "1.2rem",
  },
  inputGroup: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    marginTop: "1rem",
  },
  input: {
    flex: "1",
    padding: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    padding: "0.5rem 1rem",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  skillItem: {
    marginTop: "0.5rem",
    backgroundColor: "#f1f1f1",
    padding: "0.5rem",
    borderRadius: "4px",
    display: "inline-block",
    marginRight: "0.5rem",
  },
  listItem: {
    marginTop: "0.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  removeButton: {
    backgroundColor: "#ff4444",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "0.25rem 0.5rem",
    cursor: "pointer",
    marginLeft: "1rem",
  },
  imagePreview: {
    marginTop: "1rem",
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "50%",
  },
  fileUpload: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  fileLabel: {
    marginRight: "1rem",
  },
  submitButton: {
    padding: "0.75rem 1.5rem",
    backgroundColor: "#e3b041",
    color: "#000",
    fontWeight: "bold",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
  },
};

export default ProfileSetup;
