import { Link, Outlet } from "react-router-dom";

const BehavioralPractice = () => {
  // ... (keep categories array the same)
  const categories = [
    {
      name: "teamwork",
      title: "Teamwork Questions",
      questions: [
        "Describe a time you worked in a diverse team",
        "Tell me about a team conflict you resolved",
        "Share an example of successful collaboration",
        "How do you handle a team member not contributing?",
        "Describe a time you had to adapt to a new team dynamic",
        "Share an experience working with remote team members",
        "Describe a time you helped a teammate overcome a challenge",
        "How do you build trust within a new team?",
        "Tell me about a time you had to work with an underperforming team",
        "Describe a cross-functional team project you contributed to",
        "How do you handle differing opinions in team decisions?",
        "Share an example of effective team communication you facilitated",
        "Describe a time you took initiative in a team setting",
        "How do you ensure equal participation in team meetings?",
        "Tell me about a time you received constructive feedback from a teammate",
        "Describe your approach to team goal setting",
        "How do you handle cultural differences in a global team?",
        "Share an experience where team morale was low and how you helped",
        "Describe a time you had to mediate between team members",
        "How do you prioritize tasks when working on multiple team projects?",
      ],
    },
    {
      name: "problem-solving",
      title: "Problem Solving",
      questions: [
        "Describe a complex problem you solved",
        "Tell me about a time you made a mistake",
        "Share an innovative solution you implemented",
        "How do you approach troubleshooting a recurring issue?",
        "Give an example of a creative solution you proposed",
        "Describe a time you solved a problem with limited information",
        "Share an example of data-driven decision making",
        "How do you prioritize problems when multiple occur simultaneously?",
        "Describe a time you anticipated and prevented a problem",
        "Tell me about a technical challenge you overcame",
        "Share an experience where you had to think outside the box",
        "How do you handle time-sensitive problems under pressure?",
        "Describe a process improvement you implemented",
        "Tell me about a time you reversed a negative situation",
        "How do you validate your problem-solving approach?",
        "Share an example of a cost-saving solution you developed",
        "Describe a time you had to make a decision without manager input",
        "How do you balance speed and accuracy in problem resolution?",
        "Tell me about a time you used analytics to solve a problem",
        "Describe a situation where your solution initially failed",
      ],
    },
    {
      name: "leadership",
      title: "Leadership Scenarios",
      questions: [
        "Describe when you led a project",
        "Share a time you motivated others",
        "Tell me about a difficult leadership decision",
        "How do you handle delegation within a team?",
        "Give an example of mentoring or coaching someone",
        "Describe a time you led through organizational change",
        "How do you handle underperforming team members?",
        "Share an example of conflict resolution as a leader",
        "Describe your approach to setting team vision",
        "Tell me about a time you empowered team members",
        "How do you balance stakeholder expectations?",
        "Share an experience leading without formal authority",
        "Describe a time you improved team productivity",
        "How do you handle ethical dilemmas as a leader?",
        "Tell me about a strategic initiative you drove",
        "Describe your experience with crisis management",
        "How do you foster innovation in your team?",
        "Share an example of cross-departmental leadership",
        "Describe a time you received pushback on a decision",
        "How do you measure leadership success?",
        "Tell me about a time you had to adapt your leadership style",
        "Describe your experience building high-performing teams",
        "How do you handle succession planning?",
        "Share an example of leading through ambiguity",
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
        background: "linear-gradient(to bottom right, #F8FAFC, #EFF2F6)",
      }}
    >
      <header
        style={{
          marginBottom: "40px",
          padding: "30px",
          borderRadius: "16px",
          background: "#2C3E50",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#FFFFFF",
            fontSize: "2.5rem",
            fontWeight: "800",
            letterSpacing: "-0.05em",
            marginBottom: "12px",
            textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          Behavioral Interview Preparation
        </h1>
        <p
          style={{
            textAlign: "center",
            color: "#E0E7FF",
            fontSize: "1.1rem",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Select a category to practice common behavioral questions. Hover over
          cards for preview effects.
        </p>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          margin: "40px 0",
        }}
      >
        {categories.map((category, index) => (
          <Link
            key={index}
            to={category.name}
            style={{
              textDecoration: "none",
              color: "inherit",
              transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              position: "relative",
            }}
          >
            <div
              style={{
                padding: "30px",
                borderRadius: "16px",
                backgroundColor: "#FFFFFF",
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                height: "100%",
                borderLeft: `6px solid ${
                  ["#4F46E5", "#10B981", "#F59E0B"][index % 3]
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
                  gap: "12px",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    background: ["#4F46E5", "#10B981", "#F59E0B"][index % 3],
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {index + 1}
                </div>
                <h3
                  style={{
                    color: "#1E293B",
                    fontSize: "1.4rem",
                    fontWeight: "700",
                    margin: 0,
                  }}
                >
                  {category.title}
                </h3>
              </div>
              <p
                style={{
                  color: "#64748B",
                  fontSize: "0.95rem",
                  fontWeight: "500",
                  marginLeft: "52px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {category.questions.length} Practice Questions
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div
        style={{
          marginTop: "60px",
          padding: "40px",
          borderRadius: "16px",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default BehavioralPractice;
