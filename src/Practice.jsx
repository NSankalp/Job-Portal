import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Practice = () => {
  const [progress, setProgress] = useState({
    behavioralQuestions: 50,
    resumeSections: 5,
  });

  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedProgress = JSON.parse(localStorage.getItem("progress"));
    if (storedProgress) setProgress(storedProgress);
  }, []);

  useEffect(() => {
    localStorage.setItem("progress", JSON.stringify(progress));
  }, [progress]);

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/signup");
  };

  return (
    <div
      style={{
        display: "flex",
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          width: "250px",
          backgroundColor: "#2C3E50",
          color: "#ECF0F1",
          minHeight: "100vh",
          padding: "20px",
          boxShadow: "2px 0 5px rgba(0,0,0,0.3)",
        }}
      >
        <h2
          style={{
            marginBottom: "30px",
            textAlign: "center",
            fontSize: "1.5rem",
          }}
        >
          Fresh Start Hub
        </h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {[
            { name: "Profile Setup", icon: "💻", link: "/profile" },
            { name: "Available Jobs", icon: "🖃️", link: "/available-jobs" },
            { name: "Interview Qs", icon: "🖍️", link: "/interview-questions" },
            { name: "Resources", icon: "📚", link: "/resources" },
            { name: "Contests", icon: "🏆", link: "/weekly-contest" },
            { name: "Leaderboard", icon: "📊", link: "/leaderboard" },
            { name: "Resume Scan", icon: "🎓", link: "/resume" },
            { name: "Logout", icon: "🚪", action: handleLogout },
          ].map((item, index) => (
            <li
              key={index}
              style={{
                marginBottom: "15px",
                fontSize: "15px",
                cursor: "pointer",
                padding: "10px 15px",
                borderRadius: "6px",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#34495E")}
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "transparent")
              }
              onClick={item.action}
            >
              {item.link ? (
                <Link
                  to={item.link}
                  style={{ textDecoration: "none", color: "#ECF0F1" }}
                  onClick={(e) => item.action && e.preventDefault()}
                >
                  {item.icon} {item.name}
                </Link>
              ) : (
                <div style={{ display: "flex", gap: "10px" }}>
                  {item.icon} {item.name}
                </div>
              )}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          backgroundColor: "#f8fafc",
          padding: "28px",
          display: "flex",
          flexDirection: "column",
          gap: "28px",
        }}
      >
        {/* Header */}
        <header
          style={{
            background: "linear-gradient(135deg, #6B46C1 0%, #553C9A 100%)",
            padding: "24px",
            borderRadius: "14px",
            boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              margin: 0,
              color: "white",
              fontSize: "1.8rem",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span style={{ filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.2))" }}>
              🚀
            </span>
            Practice Center
          </h2>
        </header>

        {/* Practice Cards Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          <Link to="/behavioral-practice" style={{ textDecoration: "none" }}>
            <div
              style={{
                background: "linear-gradient(135deg, #7C3AED 0%, #6B46C1 100%)",
                padding: "22px",
                borderRadius: "14px",
                boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
                transition: "transform 0.2s ease",
                minHeight: "160px",
                display: "flex",
                alignItems: "center",
                gap: "18px",
                ":hover": {
                  transform: "translateY(-3px)",
                },
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  color: "white",
                }}
              >
                🎤
              </div>
              <h3
                style={{
                  margin: 0,
                  color: "white",
                  fontSize: "1.3rem",
                  fontWeight: "600",
                }}
              >
                Behavioral Practice
              </h3>
            </div>
          </Link>

          <Link to="/resume-builder" style={{ textDecoration: "none" }}>
            <div
              style={{
                background: "linear-gradient(135deg, #2F855A 0%, #276749 100%)",
                padding: "22px",
                borderRadius: "14px",
                boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
                transition: "transform 0.2s ease",
                minHeight: "160px",
                display: "flex",
                alignItems: "center",
                gap: "18px",
                ":hover": {
                  transform: "translateY(-3px)",
                },
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  color: "white",
                }}
              >
                📄
              </div>
              <h3
                style={{
                  margin: 0,
                  color: "white",
                  fontSize: "1.3rem",
                  fontWeight: "600",
                }}
              >
                Resume Builder
              </h3>
            </div>
          </Link>
        </div>

        {/* Programming Languages Section */}
        <section style={{ marginTop: "32px" }}>
          <h3
            style={{
              margin: "0 0 28px 0",
              color: "#2D3748",
              fontSize: "1.4rem",
              fontWeight: "600",
              paddingLeft: "16px",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                width: "4px",
                height: "24px",
                backgroundColor: "#6B46C1",
                borderRadius: "2px",
              }}
            ></div>
            Coding Practice
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "18px",
            }}
          >
            {[
              { name: "C++", color: "#4C51BF", icon: "⨁" },
              { name: "Python", color: "#2F855A", icon: "🐍" },
              { name: "Java", color: "#B7791F", icon: "☕" },
            ].map((lang, index) => (
              <Link
                key={index}
                to={`/programs/${lang.name.toLowerCase()}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    background: `linear-gradient(135deg, ${lang.color} 0%, ${lang.color}80 100%)`,
                    padding: "20px",
                    borderRadius: "12px",
                    transition: "transform 0.2s ease",
                    minHeight: "100px",
                    ":hover": {
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                    }}
                  >
                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "8px",
                        background: "rgba(255,255,255,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "22px",
                        color: "white",
                      }}
                    >
                      {lang.icon}
                    </div>
                    <h4
                      style={{
                        margin: 0,
                        color: "white",
                        fontSize: "1.2rem",
                        fontWeight: "600",
                      }}
                    >
                      {lang.name}
                    </h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Modal */}
        {isModalOpen && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
            }}
            onClick={() => setModalOpen(false)}
          >
            <div
              style={{
                backgroundColor: "white",
                padding: "24px",
                borderRadius: "14px",
                boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
                maxWidth: "360px",
                width: "90%",
              }}
            >
              <h3 style={{ margin: 0, color: "#2D3748", fontSize: "1.2rem" }}>
                {modalContent}
              </h3>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Practice;
