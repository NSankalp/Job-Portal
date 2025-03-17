import React, { useState } from "react";
import cppResource from "./Cppresource";
import PythonResource from "./PythonResource";
import javaResource from "./JavaResource";
import JavascriptResource from "./JavascriptResource";
import C from "./C";
import SqlResource from "./SqlResource";
import HtmlResource from "./HtmlResource";
import Css from "./Css";
import ReactResource from "./ReactResource";
import Arrays from "./Arrays";
import LinkedLists from "./LinkedLists";
import Trees from "./Trees";
import Graphs from "./Graphs";
import Stacks from "./Stacks";
import Queues from "./Queues";
import Strings from "./Strings";
import Sorting from "./Sorting";
import Recursion from "./Recursion";
import Os from "./Os";
import Networking from "./Networking";
import COA from "./Coa";
import SoftwareDev from "./Software";
import dbms from "./Dbms";
import CompilerDesign from "./Compiler";

const Resource = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const resources = {
    "Programming Languages": {
      C: C,
      "C++": cppResource,
      Python: PythonResource,
      Java: javaResource,
      HTML: HtmlResource,
      CSS: Css,
      JavaScript: JavascriptResource,
      React: ReactResource,
      SQL: SqlResource,
    },
    "Data Structures": {
      Arrays: Arrays,
      Strings: Strings,
      Recursion: Recursion,
      Sorting: Sorting,
      LinkedLists: LinkedLists,
      Stacks,
      Queues,
      Trees: Trees,
      Graphs: Graphs,
    },
    "Core Subjects": {
      "Operating Systems": Os,
      DBMS: dbms,
      Networks: Networking,
      "Computer Architecture": COA,
      "Software Development": SoftwareDev,
      "Compiler Design": CompilerDesign,
    },
  };

  return (
    <div style={styles.container}>
      <aside style={styles.sidebar}>
        <h2 style={styles.sidebarHeader}>Categories</h2>
        <div style={styles.categoryList}>
          {Object.keys(resources).map((category) => (
            <div
              key={category}
              style={styles.categoryItem}
              onClick={() => setSelectedCategory(category)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) =>
                e.key === "Enter" && setSelectedCategory(category)
              }
            >
              {category}
            </div>
          ))}
        </div>
      </aside>

      <main style={styles.mainContent}>
        {selectedCategory ? (
          selectedTopic ? (
            <div>
              <button
                style={styles.backButton}
                onClick={() => setSelectedTopic(null)}
              >
                ← Back to {selectedCategory}
              </button>
              <h2 style={styles.topicHeader}>{selectedTopic}</h2>
              <div style={{ ...styles.contentBox, whiteSpace: "pre-line" }}>
                {resources[selectedCategory][selectedTopic]}
              </div>
            </div>
          ) : (
            <div>
              <button
                style={styles.backButton}
                onClick={() => setSelectedCategory(null)}
              >
                ← Back to Categories
              </button>
              <h2 style={styles.categoryHeader}>{selectedCategory}</h2>
              <div style={styles.topicGrid}>
                {Object.keys(resources[selectedCategory]).map((topic) => (
                  <div
                    key={topic}
                    style={styles.topicCard}
                    onClick={() => setSelectedTopic(topic)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) =>
                      e.key === "Enter" && setSelectedTopic(topic)
                    }
                  >
                    {topic}
                  </div>
                ))}
              </div>
            </div>
          )
        ) : (
          <div style={styles.welcomeMessage}>
            <h1>📚 Learning Resources</h1>
            <p>Select a category to view available resources</p>
          </div>
        )}
      </main>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  sidebar: {
    width: "250px",
    backgroundColor: "#2C3E50",
    color: "#ECF0F1",
    padding: "20px",
  },
  mainContent: {
    flex: 1,
    padding: "40px",
    backgroundColor: "#F8F9FA",
  },
  categoryList: {
    marginTop: "20px",
  },
  categoryItem: {
    padding: "15px",
    margin: "10px 0",
    cursor: "pointer",
    borderRadius: "8px",
    transition: "all 0.3s",
    ":hover": {
      backgroundColor: "#34495E",
    },
  },
  topicGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "30px",
  },
  topicCard: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    cursor: "pointer",
    transition: "transform 0.2s",
    ":hover": {
      transform: "translateY(-3px)",
    },
  },
  contentBox: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    lineHeight: "1.6",
    fontSize: "16px",
  },
  backButton: {
    backgroundColor: "transparent",
    border: "none",
    color: "#6A82FB",
    cursor: "pointer",
    fontSize: "16px",
    marginBottom: "20px",
    padding: "5px 10px",
    ":hover": {
      backgroundColor: "#F0F2F5",
    },
  },
  categoryHeader: {
    color: "#2C3E50",
    marginBottom: "30px",
  },
  welcomeMessage: {
    textAlign: "center",
    marginTop: "100px",
    color: "#2C3E50",
  },
};

export default Resource;
