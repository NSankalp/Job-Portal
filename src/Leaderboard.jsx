import React, { useState, useEffect } from "react";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/auth/leaderboard`
        );
        if (response.ok) {
          const data = await response.json();
          setLeaderboard(data);
        } else {
          console.error("Failed to fetch leaderboard data");
        }
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  if (loading) {
    return <div>Loading leaderboard...</div>;
  }

  return (
    <div
      style={{
        padding: "20px",
        minHeight: "100vh",
        backgroundColor: "#F4F6F8",
      }}
    >
      <h2 style={{ marginBottom: "20px", color: "#2C3E50" }}>Leaderboard</h2>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          backgroundColor: "#FFF",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#6A82FB", color: "#FFF" }}>
            <th style={{ padding: "10px", border: "1px solid #DDD" }}>Rank</th>
            <th style={{ padding: "10px", border: "1px solid #DDD" }}>
              Username
            </th>
            <th style={{ padding: "10px", border: "1px solid #DDD" }}>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.length > 0 ? (
            leaderboard.map((user, index) => (
              <tr key={user._id} style={{ textAlign: "center" }}>
                <td style={{ padding: "10px", border: "1px solid #DDD" }}>
                  {index + 1}
                </td>
                <td style={{ padding: "10px", border: "1px solid #DDD" }}>
                  {user.username}
                </td>
                <td style={{ padding: "10px", border: "1px solid #DDD" }}>
                  {user.score}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="3"
                style={{
                  padding: "20px",
                  textAlign: "center",
                  border: "1px solid #DDD",
                }}
              >
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
