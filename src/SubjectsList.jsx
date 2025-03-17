import React from "react";
import { Link } from "react-router-dom";

const subjects = [
  "C",
  "C++",
  "Java",
  "Python",
  "DBMS",
  "OS",
  "CN",
  "SQL",
  "Software Development",
];

const SubjectsList = () => {
  return (
    <div
      style={{
        padding: "40px 20px",
        fontFamily: "'Inter', sans-serif",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          fontWeight: "700",
          color: "#2C3E50",
          textAlign: "center",
          marginBottom: "40px",
          textTransform: "uppercase",
          letterSpacing: "2px",
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Interview Preparation
      </h1>
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "20px",
          padding: "20px",
          maxWidth: "100%",
          width: "100%",
          scrollbarWidth: "none", // Hide scrollbar for Firefox
          msOverflowStyle: "none", // Hide scrollbar for IE/Edge
        }}
      >
        {subjects.map((subject, index) => (
          <Link
            key={index}
            to={`/interview-questions/${subject.toLowerCase()}`}
            style={{
              textDecoration: "none",
              color: "#2C3E50",
              backgroundColor: "#FFFFFF",
              borderRadius: "20px",
              padding: "30px",
              minWidth: "250px",
              textAlign: "center",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
              transition: "all 0.4s ease",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              border: "2px solid rgba(255, 255, 255, 0.2)",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-10px)";
              e.target.style.boxShadow = "0 12px 30px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.1)";
            }}
          >
            <div
              style={{
                fontSize: "28px",
                fontWeight: "700",
                marginBottom: "10px",
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              {subject}
            </div>
            <div
              style={{
                fontSize: "16px",
                color: "#667eea",
                fontWeight: "500",
              }}
            >
              Explore Questions
            </div>
          </Link>
        ))}
      </div>
      <p
        style={{
          marginTop: "40px",
          fontSize: "16px",
          color: "#2C3E50",
          textAlign: "center",
          opacity: 0.8,
        }}
      >
        Scroll horizontally to view more subjects →
      </p>
    </div>
  );
};

export default SubjectsList;
