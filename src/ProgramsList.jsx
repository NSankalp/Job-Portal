import React from "react";
import { useParams, Link } from "react-router-dom";
import { programsData } from "./programsData";

const ProgramsList = () => {
  const { language } = useParams();
  const lowerCaseLanguage = language.toLowerCase();
  const programs = programsData[lowerCaseLanguage]?.list || [];

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "30px",
        backgroundColor: "#f4f6f8",
      }}
    >
      <header
        style={{
          backgroundColor: "#6A82FB",
          color: "#FFF",
          padding: "20px",
          borderRadius: "12px",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        <h2>{language.toUpperCase()} Programming Practice</h2>
      </header>

      <section
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        {programs.length > 0 ? (
          programs.map((program, index) => (
            <Link
              key={index}
              to={`/program/${language.toLowerCase()}/${program.title
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              style={{
                backgroundColor: "#FFF",
                padding: "20px",
                borderRadius: "8px",
                textDecoration: "none",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <span
                style={{
                  backgroundColor: "#6A82FB",
                  color: "#FFF",
                  padding: "5px 10px",
                  borderRadius: "20px",
                }}
              >
                {program.difficulty}
              </span>
            </Link>
          ))
        ) : (
          <p>No programs available for this language.</p>
        )}
      </section>
    </div>
  );
};

export default ProgramsList;
