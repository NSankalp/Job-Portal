import { useParams } from "react-router-dom";

const ResumeSection = () => {
  const { section } = useParams();
  const sections = {
    summary: {
      title: "Professional Summary",
      dos: [
        "Start with your strongest qualification",
        "Include industry-specific keywords",
        "Mention years of experience",
        "Highlight special certifications",
        "Showcase unique value proposition",
      ],
      donts: [
        "Use generic adjectives like 'hard-working'",
        "Include personal pronouns",
        "Mention unrelated hobbies",
        "Use clichés like 'team player'",
        "Include salary expectations",
      ],
      examples: [
        "Full-stack developer with 8+ years experience building scalable web applications using React, Node.js, and AWS. Led teams of 10+ developers to deliver 15+ enterprise projects with 99.9% client satisfaction.",
        "Digital marketing manager specializing in SaaS products, with proven track record of increasing organic traffic by 300% and conversion rates by 150% through data-driven SEO strategies and content marketing.",
        "Certified Project Manager (PMP) with 10 years in construction management, successfully delivering $50M+ commercial projects with average 15% under budget and 20% ahead of schedule.",
      ],
    },
    experience: {
      title: "Work Experience",
      dos: [
        "Use power verbs: 'Led', 'Developed', 'Optimized'",
        "Quantify achievements with metrics",
        "Show career progression",
        "Include relevant technologies",
        "Highlight leadership experience",
      ],
      donts: [
        "List every job you've ever had",
        "Use passive voice",
        "Include unrelated part-time jobs",
        "Mention confidential information",
        "Use vague descriptions",
      ],
      examples: [
        "Increased application performance by 40% through database optimization and implementation of caching mechanisms",
        "Managed cross-functional team of 15 to develop AI-powered chatbot handling 10,000+ monthly queries with 92% resolution rate",
        "Reduced manufacturing costs by 25% through lean process improvements and supplier negotiations",
      ],
    },
    skills: {
      title: "Skills Section",
      dos: [
        "Categorize skills (Technical, Soft, Tools)",
        "Match job description keywords",
        "Include proficiency levels",
        "Add certifications",
        "Update with emerging technologies",
      ],
      donts: [
        "List obvious skills (Microsoft Office)",
        "Exaggerate proficiency levels",
        "Include outdated technologies",
        "Use vague terms like 'familiar with'",
        "Overcrowd with too many skills",
      ],
      examples: [
        "Technical: Python, Machine Learning, TensorFlow, Data Visualization\nCloud: AWS, Docker, Kubernetes\nSoft Skills: Client Presentations, Technical Documentation",
        "Frontend: React, TypeScript, Next.js, GraphQL\nTesting: Jest, Cypress, Storybook\nDevOps: CI/CD Pipelines, GitHub Actions",
        "Languages: Fluent in English, Spanish, and French\nProject Management: Agile, Scrum, Jira\nDesign: Figma, Adobe XD, User Personas",
      ],
    },
    education: {
      title: "Education",
      dos: [
        "Include GPA if above 3.5",
        "List relevant coursework",
        "Mention honors/awards",
        "Add certifications",
        "Include ongoing education",
      ],
      donts: [
        "Include high school details",
        "List incomplete degrees",
        "Add graduation dates older than 15 years",
        "Exaggerate credentials",
        "Include unrelated courses",
      ],
      examples: [
        "MS in Data Science - Stanford University (2020-2022)\nGPA: 3.8/4.0\nThesis: Predictive Maintenance Using IoT Sensor Data",
        "Google Professional Data Analytics Certification (2023)\nRelevant Coursework: Data Modeling, Big Query, Tableau",
        "BBA in Finance - Wharton School (2016-2020)\nDean's List 6 Semesters\nInvestment Portfolio Manager - $500k Student Fund",
      ],
    },
    projects: {
      title: "Key Projects",
      dos: [
        "Include measurable outcomes",
        "List technologies used",
        "Add project duration",
        "Mention team size if applicable",
        "Provide live links/demos",
      ],
      donts: [
        "Include school assignments",
        "List trivial projects",
        "Use vague descriptions",
        "Forget to quantify impact",
        "Include outdated projects",
      ],
      examples: [
        "AI Inventory Management System (2023)\n- Developed Python-based solution reducing stock discrepancies by 75%\n- Integrated with SAP ERP using REST APIs\n- Team of 5 developers | Tech Stack: TensorFlow, Flask, MySQL",
        "E-commerce Platform Migration (2022)\n- Led migration from Magento to Shopify Plus for $10M/year business\n- Achieved 99.9% uptime during transition\n- Resulted in 30% faster page load times",
        "Mobile Health App Development (2021-2022)\n- React Native app with 50k+ active users\n- Features: Medication tracking, Doctor chat\n- Won HealthTech Innovation Award 2022",
      ],
    },
  };

  return (
    <div
      style={{
        marginTop: "30px",
        padding: "30px",
        backgroundColor: "#FFF",
        borderRadius: "16px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
      }}
    >
      <h2
        style={{
          color: "#2b2d42",
          fontSize: "2rem",
          marginBottom: "25px",
          borderBottom: "2px solid #4a4e69",
          paddingBottom: "10px",
        }}
      >
        {sections[section].title}
      </h2>

      <div style={{ marginTop: "20px" }}>
        <h3
          style={{ color: "#4a4e69", fontSize: "1.5rem", marginBottom: "15px" }}
        >
          Essential Guidelines
        </h3>
        <div
          style={{
            display: "grid",
            gap: "25px",
            gridTemplateColumns: "1fr 1fr",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              padding: "25px",
              backgroundColor: "#f8f9fa",
              borderRadius: "12px",
              borderLeft: "4px solid #2a9d8f",
            }}
          >
            <h4
              style={{
                color: "#2a9d8f",
                fontSize: "1.3rem",
                marginBottom: "15px",
              }}
            >
              Best Practices
            </h4>
            <ul style={{ listStyle: "none", paddingLeft: "0" }}>
              {sections[section].dos.map((item, index) => (
                <li
                  key={index}
                  style={{
                    padding: "10px",
                    marginBottom: "8px",
                    backgroundColor: "white",
                    borderRadius: "6px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    ":before": {
                      content: "'✓'",
                      color: "#2a9d8f",
                      fontWeight: "bold",
                    },
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{
              padding: "25px",
              backgroundColor: "#f8f9fa",
              borderRadius: "12px",
              borderLeft: "4px solid #e76f51",
            }}
          >
            <h4
              style={{
                color: "#e76f51",
                fontSize: "1.3rem",
                marginBottom: "15px",
              }}
            >
              Common Mistakes
            </h4>
            <ul style={{ listStyle: "none", paddingLeft: "0" }}>
              {sections[section].donts.map((item, index) => (
                <li
                  key={index}
                  style={{
                    padding: "10px",
                    marginBottom: "8px",
                    backgroundColor: "white",
                    borderRadius: "6px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    ":before": {
                      content: "'✗'",
                      color: "#e76f51",
                      fontWeight: "bold",
                    },
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h3
          style={{
            color: "#4a4e69",
            fontSize: "1.5rem",
            margin: "40px 0 20px",
            borderBottom: "2px solid #4a4e69",
            paddingBottom: "10px",
          }}
        >
          Real-World Examples
        </h3>
        <div
          style={{
            display: "grid",
            gap: "20px",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {sections[section].examples.map((example, index) => (
            <div
              key={index}
              style={{
                padding: "20px",
                backgroundColor: "#f8f9fa",
                borderRadius: "12px",
                border: "1px solid #dee2e6",
                whiteSpace: "pre-wrap",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "15px",
                }}
              >
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    backgroundColor: "#4a4e69",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                  }}
                >
                  {index + 1}
                </div>
                <h4 style={{ margin: 0, color: "#4a4e69" }}>
                  Example {index + 1}
                </h4>
              </div>
              <p
                style={{
                  color: "#495057",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                {example}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
