import React from "react";
import { Link } from "react-router-dom";

const WeeklyContest = () => {
  const assignments = [
    {
      title: "Operating System Quiz",
      description:
        "Questions based on process scheduling and memory management.",
      path: "/quiz/os", // Add path for navigation
    },
    {
      title: "Data Structures Quiz",
      description:
        "Implementing various types of trees and their traversal methods.",
      path: "/quiz/ds",
    },
    {
      title: "Networking Quiz",
      description: "Covers TCP/IP protocol suite and DNS concepts.",
      path: "/quiz/networking",
    },
    {
      title: "DBMS Quiz",
      description:
        "SQL queries for joins, subqueries, and transaction control.",
      path: "/quiz/dbms",
    },
  ];

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#F4F6F8",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ color: "#2C3E50", marginBottom: "20px" }}>
        Weekly Contest - Assignments & Quizzes
      </h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {assignments.map((item, index) => (
          <li
            key={index}
            style={{
              marginBottom: "20px",
              padding: "15px",
              borderRadius: "8px",
              backgroundColor: "#FFF",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <Link
              to={item.path}
              style={{
                textDecoration: "none",
                color: "#2C3E50",
              }}
            >
              <h3 style={{ margin: 0 }}>{item.title}</h3>
              <p style={{ margin: "10px 0", color: "#555" }}>
                {item.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeeklyContest;
