import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-github";
import { programsData } from "./programsData";

const ProgramDetail = () => {
  const { language, program } = useParams();
  const languageData = programsData[language?.toLowerCase()];

  const formattedTitle = program
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  const programDetail = languageData?.details?.[formattedTitle];

  const [code, setCode] = useState(programDetail?.code || "");
  const [output, setOutput] = useState("");
  const [testResults, setTestResults] = useState([]);

  const handleRunCode = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/run`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language,
          code,
          testCases: programDetail?.testCases || [],
        }),
      });

      const data = await response.json();
      if (data.error) {
        setOutput(`Error: ${data.error}`);
        setTestResults([]);
      } else {
        setTestResults(data.results);
        setOutput(data.results.map((r) => r.actualOutput).join("\n"));
      }
    } catch (error) {
      console.error("Error running the code:", error);
      setOutput("Failed to run the code. Please try again.");
      setTestResults([]);
    }
  };

  if (!programDetail) {
    return (
      <div style={{ fontFamily: "Arial, sans-serif", padding: "30px" }}>
        <h3>Oops! Program not found.</h3>
        <p>Check the URL or select a valid program from the list.</p>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "30px" }}>
      <div style={{ display: "flex", gap: "30px", alignItems: "flex-start" }}>
        {/* Left Side - Program Info and Editor */}
        <div style={{ flex: 1, minWidth: "60%" }}>
          <section
            style={{
              backgroundColor: "#f8f9fa",
              padding: "20px",
              borderRadius: "12px",
              marginBottom: "20px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h1
              style={{
                margin: "0 0 10px 0",
                color: "#2c3e50",
                fontSize: "28px",
              }}
            >
              {programDetail.title}
            </h1>
            <p
              style={{
                margin: "0",
                color: "#666",
                fontSize: "16px",
                lineHeight: "1.5",
              }}
            >
              {programDetail.description}
            </p>
          </section>

          <section>
            <h3 style={{ marginBottom: "15px", color: "#444" }}>Code Editor</h3>
            <AceEditor
              mode={language === "c++" ? "c_cpp" : "python"}
              theme="github"
              value={code}
              onChange={setCode}
              name="editor"
              editorProps={{ $blockScrolling: true }}
              style={{
                width: "100%",
                height: "400px",
                borderRadius: "8px",
                border: "1px solid #ddd",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            />
          </section>

          <button
            onClick={handleRunCode}
            style={{
              marginTop: "20px",
              padding: "12px 25px",
              backgroundColor: "#6A82FB",
              color: "#FFF",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              fontSize: "16px",
              fontWeight: "500",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#5570E6")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#6A82FB")}
          >
            <span>▶</span> Run Code
          </button>
        </div>

        {/* Right Side - Test Cases */}
        <div
          style={{
            flex: 1,
            minWidth: "40%",
            position: "sticky",
            top: "20px",
            backgroundColor: "#fff",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3
            style={{
              marginTop: "0",
              marginBottom: "20px",
              color: "#444",
              fontSize: "20px",
            }}
          >
            Test Cases
          </h3>
          <div
            style={{
              maxHeight: "calc(100vh - 200px)",
              overflowY: "auto",
              paddingRight: "10px",
            }}
          >
            {testResults.length > 0 ? (
              testResults.map((result, index) => (
                <div
                  key={index}
                  style={{
                    margin: "10px 0",
                    padding: "15px",
                    borderRadius: "8px",
                    backgroundColor: result.passed ? "#e6ffe6" : "#ffe6e6",
                    border: `1px solid ${
                      result.passed ? "#009900" : "#cc0000"
                    }`,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <span style={{ fontSize: "1.2em" }}>
                      {result.passed ? "✅" : "❌"}
                    </span>
                    <strong>Test Case {index + 1}</strong>
                  </div>
                  <p>Input: {result.input || "(none)"}</p>
                  <p>Expected: {result.expectedOutput}</p>
                  <p>Received: {result.actualOutput}</p>
                </div>
              ))
            ) : (
              <div
                style={{
                  padding: "20px",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "8px",
                  textAlign: "center",
                  color: "#666",
                  fontSize: "14px",
                }}
              >
                No test results yet. Click "Run Code" to see test results.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetail;
