import { Link, Outlet } from "react-router-dom";

const ResumeBuilder = () => {
  const sections = [
    {
      name: "summary",
      title: "Professional Summary",
      tips: [
        "Keep it under 3 sentences",
        "Highlight key achievements",
        "Include industry keywords",
        "Showcase your unique value",
      ],
    },
    {
      name: "experience",
      title: "Work Experience",
      tips: [
        "Use action verbs",
        "Quantify achievements",
        "List responsibilities",
        "Show career progression",
      ],
    },
    {
      name: "skills",
      title: "Skills Section",
      tips: [
        "Tailor to job description",
        "Include technical & soft skills",
        "Group related skills",
        "Show proficiency levels",
      ],
    },
    {
      name: "education",
      title: "Education",
      tips: [
        "Include relevant coursework",
        "Add honors/awards",
        "List certifications",
        "Mention GPA if above 3.5",
      ],
    },
    {
      name: "projects",
      title: "Key Projects",
      tips: [
        "Showcase relevant work",
        "Include measurable outcomes",
        "List technologies used",
        "Add project links",
      ],
    },
  ];

  return (
    <div
      style={{
        padding: "40px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
      }}
    >
      <header
        style={{
          textAlign: "center",
          marginBottom: "40px",
          padding: "30px",
          borderRadius: "16px",
          background: "#2b2d42",
          color: "white",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            letterSpacing: "-0.025em",
            marginBottom: "12px",
            textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          Smart Resume Builder
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            color: "#e0e1dd",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Build your perfect resume section by section with expert-guided tips
        </p>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "30px",
          margin: "40px 0",
          alignItems: "start",
          gridAutoRows: "1fr",
        }}
      >
        {sections.map((section, index) => (
          <Link
            key={index}
            to={section.name}
            style={{
              textDecoration: "none",
              color: "inherit",
              transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              height: "100%",
            }}
          >
            <div
              style={{
                padding: "30px",
                borderRadius: "16px",
                backgroundColor: "white",
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                height: "100%",
                minHeight: "250px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderLeft: `6px solid ${
                  ["#4a4e69", "#3a86ff", "#8338ec", "#ff006e", "#fb5607"][
                    index % 5
                  ]
                }`,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 28px rgba(0,0,0,0.15)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    background: [
                      "#4a4e69",
                      "#3a86ff",
                      "#8338ec",
                      "#ff006e",
                      "#fb5607",
                    ][index % 5],
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "700",
                    fontSize: "1.2rem",
                  }}
                >
                  {index + 1}
                </div>
                <h3
                  style={{
                    color: "#2b2d42",
                    fontSize: "1.4rem",
                    fontWeight: "700",
                    margin: 0,
                  }}
                >
                  {section.title}
                </h3>
              </div>
              <ul
                style={{
                  paddingLeft: "25px",
                  color: "#6c757d",
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                  listStyleType: "none",
                  margin: 0,
                }}
              >
                {section.tips.map((tip, i) => (
                  <li
                    key={i}
                    style={{
                      position: "relative",
                      paddingLeft: "20px",
                      marginBottom: "8px",
                      ":before": {
                        content: "'•'",
                        position: "absolute",
                        left: 0,
                        color: [
                          "#4a4e69",
                          "#3a86ff",
                          "#8338ec",
                          "#ff006e",
                          "#fb5607",
                        ][index % 5],
                      },
                    }}
                  >
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>

      <div
        style={{
          marginTop: "60px",
          padding: "40px",
          borderRadius: "16px",
          backgroundColor: "white",
          boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default ResumeBuilder;
