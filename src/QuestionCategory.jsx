import { useParams } from "react-router-dom";

const QuestionCategory = () => {
  const { category } = useParams();
  const categories = {
    teamwork: {
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
    "problem-solving": {
      title: "Problem Solving Scenarios",
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
    leadership: {
      title: "Leadership Experiences",
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
  };

  return (
    <div
      style={{
        marginTop: "30px",
        padding: "30px",
        backgroundColor: "#FFF",
        borderRadius: "12px",
        boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
        maxWidth: "800px",
        margin: "auto",
      }}
    >
      <h2 style={{ color: "#2C3E50", textAlign: "center", fontSize: "1.8rem" }}>
        {categories[category].title}
      </h2>
      <div style={{ marginTop: "20px" }}>
        {categories[category].questions.map((question, index) => (
          <div
            key={index}
            style={{
              padding: "20px",
              margin: "15px 0",
              backgroundColor: "#F8FAFC",
              borderRadius: "10px",
              boxShadow: "0 3px 8px rgba(0,0,0,0.08)",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.03)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h4
              style={{
                marginBottom: "8px",
                fontSize: "1.2rem",
                color: "#34495E",
              }}
            >
              Question {index + 1}
            </h4>
            <p style={{ color: "#555", fontSize: "1rem", lineHeight: "1.5" }}>
              {question}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCategory;
