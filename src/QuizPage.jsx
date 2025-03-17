import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useUser } from "./Context/Usercontext"; // Import the UserContext

const quizData = {
  os: [
    {
      question: "What is the main purpose of an operating system?",
      options: [
        "File management",
        "Process management",
        "Both A and B",
        "None",
      ],
      answer: "Both A and B",
    },
    {
      question: "Which is not a process state?",
      options: ["Running", "Blocked", "Terminated", "Executing"],
      answer: "Executing",
    },
    {
      question: "What is a kernel?",
      options: ["A shell", "A core part of the OS", "An application", "None"],
      answer: "A core part of the OS",
    },
    {
      question: "Which of the following is a type of OS?",
      options: [
        "Batch OS",
        "Distributed OS",
        "Real-time OS",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question: "What is a deadlock?",
      options: [
        "A condition where no process can proceed",
        "A scheduling algorithm",
        "A memory allocation method",
        "None of these",
      ],
      answer: "A condition where no process can proceed",
    },
    {
      question: "What is virtual memory?",
      options: [
        "A type of RAM",
        "A technique to extend RAM using disk space",
        "A part of CPU",
        "None of these",
      ],
      answer: "A technique to extend RAM using disk space",
    },
    {
      question: "Which of the following is a CPU scheduling algorithm?",
      options: ["FCFS", "Round Robin", "SJF", "All of the above"],
      answer: "All of the above",
    },
    {
      question: "What is a system call?",
      options: [
        "A call to hardware",
        "A call from OS to application",
        "A call from application to OS",
        "None",
      ],
      answer: "A call from application to OS",
    },
    {
      question: "Which memory allocation strategy suffers from fragmentation?",
      options: ["Paging", "Segmentation", "Both A and B", "None"],
      answer: "Segmentation",
    },
    {
      question: "What is the purpose of the scheduler in an OS?",
      options: [
        "Manage memory",
        "Allocate CPU to processes",
        "Handle I/O requests",
        "None",
      ],
      answer: "Allocate CPU to processes",
    },
    {
      question:
        "Which of the following is an interprocess communication mechanism?",
      options: ["Shared Memory", "Message Passing", "Both A and B", "None"],
      answer: "Both A and B",
    },
    {
      question: "What is thrashing?",
      options: [
        "High CPU usage",
        "Excessive paging",
        "A scheduling method",
        "None",
      ],
      answer: "Excessive paging",
    },
    {
      question:
        "Which scheduling algorithm gives the minimum average waiting time?",
      options: ["FCFS", "SJF", "Round Robin", "None"],
      answer: "SJF",
    },
    {
      question: "What does a bootloader do?",
      options: [
        "Loads the OS",
        "Manages memory",
        "Schedules processes",
        "None",
      ],
      answer: "Loads the OS",
    },
    {
      question: "Which of the following is a disk scheduling algorithm?",
      options: ["FIFO", "SCAN", "LRU", "None"],
      answer: "SCAN",
    },
    {
      question: "Which file system is used in Windows?",
      options: ["ext4", "NTFS", "FAT32", "Both B and C"],
      answer: "Both B and C",
    },
    {
      question: "What is the function of a device driver?",
      options: [
        "Manage hardware",
        "Execute applications",
        "Manage CPU scheduling",
        "None",
      ],
      answer: "Manage hardware",
    },
    {
      question: "What is RAID used for?",
      options: [
        "CPU scheduling",
        "Disk redundancy",
        "Memory management",
        "None",
      ],
      answer: "Disk redundancy",
    },
    {
      question: "What is the main purpose of a shell?",
      options: [
        "Execute user commands",
        "Manage memory",
        "Allocate CPU",
        "None",
      ],
      answer: "Execute user commands",
    },
    {
      question: "Which type of OS is used in real-time applications?",
      options: ["Batch OS", "Real-time OS", "Distributed OS", "None"],
      answer: "Real-time OS",
    },
    {
      question: "What is process synchronization?",
      options: [
        "Ensuring processes run in order",
        "Coordinating process execution",
        "Managing memory",
        "None",
      ],
      answer: "Coordinating process execution",
    },
    {
      question: "What is demand paging?",
      options: [
        "Paging when needed",
        "Preloading all pages",
        "No paging",
        "None",
      ],
      answer: "Paging when needed",
    },
    {
      question: "What is a safe state in deadlock avoidance?",
      options: [
        "A state where no deadlock occurs",
        "A state where deadlock is detected",
        "A state where deadlock is prevented",
        "None",
      ],
      answer: "A state where no deadlock occurs",
    },
    {
      question:
        "Which of the following is a technique for deadlock prevention?",
      options: [
        "Hold and wait",
        "Circular wait",
        "Avoiding mutual exclusion",
        "None",
      ],
      answer: "Avoiding mutual exclusion",
    },
  ],
  ds: [
    {
      question: "Which data structure uses LIFO principle?",
      options: ["Queue", "Stack", "Tree", "Graph"],
      answer: "Stack",
    },
    {
      question: "Time complexity of binary search in sorted array?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      answer: "O(log n)",
    },
    {
      question: "Which is NOT a linear data structure?",
      options: ["Array", "Linked List", "Tree", "Queue"],
      answer: "Tree",
    },
    {
      question: "Minimum number of queues needed to implement priority queue?",
      options: ["1", "2", "3", "4"],
      answer: "1",
    },
    {
      question: "Postfix expression for A+B*C?",
      options: ["ABC*+", "AB+C*", "ABC+*", "A+BC*"],
      answer: "ABC*+",
    },
    {
      question: "Worst case time complexity of Bubble Sort?",
      options: ["O(n)", "O(n²)", "O(log n)", "O(n log n)"],
      answer: "O(n²)",
    },
    {
      question: "Best data structure for implementing recursion?",
      options: ["Queue", "Stack", "Array", "Tree"],
      answer: "Stack",
    },
    {
      question: "Maximum nodes in binary tree of height h?",
      options: ["2^h", "2^h - 1", "2^(h+1) - 1", "h²"],
      answer: "2^(h+1) - 1",
    },
    {
      question: "Which traversal gives sorted order in BST?",
      options: ["Preorder", "Inorder", "Postorder", "Level order"],
      answer: "Inorder",
    },
    {
      question: "Which algorithm uses divide and conquer?",
      options: [
        "Bubble Sort",
        "Merge Sort",
        "Insertion Sort",
        "Selection Sort",
      ],
      answer: "Merge Sort",
    },
    {
      question: "Condition for empty circular queue?",
      options: [
        "front == rear",
        "front == -1",
        "rear == size-1",
        "front == rear+1",
      ],
      answer: "front == rear",
    },
    {
      question: "Most efficient graph representation for sparse graphs?",
      options: [
        "Adjacency Matrix",
        "Adjacency List",
        "Incidence Matrix",
        "Edge List",
      ],
      answer: "Adjacency List",
    },
    {
      question: "BFS uses which data structure?",
      options: ["Stack", "Queue", "Priority Queue", "Tree"],
      answer: "Queue",
    },
    {
      question: "Collision resolution in hashing using linked lists is called?",
      options: [
        "Open Addressing",
        "Chaining",
        "Double Hashing",
        "Linear Probing",
      ],
      answer: "Chaining",
    },
    {
      question: "Balance factor in AVL trees can be?",
      options: ["-2, -1, 0", "-1, 0, +1", "0, +1, +2", "Any integer"],
      answer: "-1, 0, +1",
    },
    {
      question: "Heap structure used for priority queue implementation?",
      options: ["Max-Heap", "Min-Heap", "BST", "Both A & B"],
      answer: "Both A & B",
    },
    {
      question: "Postorder traversal sequence?",
      options: [
        "Root-Left-Right",
        "Left-Right-Root",
        "Left-Root-Right",
        "Right-Left-Root",
      ],
      answer: "Left-Right-Root",
    },
    {
      question: "Dynamic array expansion factor commonly used?",
      options: ["1.5", "2", "3", "1.25"],
      answer: "2",
    },
    {
      question: "Hash function using modulus operation?",
      options: [
        "Division Method",
        "Multiplication Method",
        "Mid-square",
        "Folding",
      ],
      answer: "Division Method",
    },
    {
      question:
        "Average time complexity of hash table search (good implementation)?",
      options: ["O(n)", "O(1)", "O(log n)", "O(n²)"],
      answer: "O(1)",
    },
    {
      question: "Trie data structure is mainly used for?",
      options: [
        "Sorting numbers",
        "String operations",
        "Matrix operations",
        "Graph traversal",
      ],
      answer: "String operations",
    },
    {
      question: "Red-Black trees ensure?",
      options: [
        "Complete binary tree",
        "Height balance",
        "No consecutive red nodes",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question: "Implement queue using stacks requires?",
      options: ["1 stack", "2 stacks", "3 stacks", "Cannot be implemented"],
      answer: "2 stacks",
    },
    {
      question: "Best storage for sparse matrix?",
      options: ["2D array", "Linked list", "Binary tree", "Circular queue"],
      answer: "Linked list",
    },
    {
      question: "In-place sorting algorithm?",
      options: ["Merge Sort", "Bubble Sort", "Quick Sort", "Both B & C"],
      answer: "Both B & C",
    },
    {
      question: "Dijkstra's algorithm is used for?",
      options: [
        "Shortest path",
        "Minimum spanning tree",
        "Cycle detection",
        "Topological sort",
      ],
      answer: "Shortest path",
    },
    {
      question: "Prim's algorithm finds?",
      options: [
        "Shortest path",
        "Minimum Spanning Tree",
        "Strongly connected components",
        "Maximum flow",
      ],
      answer: "Minimum Spanning Tree",
    },
    {
      question: "Open addressing collision resolution using linear steps?",
      options: [
        "Double Hashing",
        "Linear Probing",
        "Quadratic Probing",
        "Separate Chaining",
      ],
      answer: "Linear Probing",
    },
    {
      question: "Deque allows operations from?",
      options: ["Front only", "Rear only", "Both ends", "Middle"],
      answer: "Both ends",
    },
    {
      question: "Priority queue typically implemented using?",
      options: ["Array", "Linked List", "Heap", "All of the above"],
      answer: "All of the above",
    },
  ],
  networking: [
    {
      question: "What is a computer network?",
      options: [
        "A collection of interconnected devices",
        "A single computer",
        "A software program",
        "A database system",
      ],
      answer: "A collection of interconnected devices",
    },
    {
      question: "What are the different types of networks?",
      options: [
        "LAN, WAN, MAN, PAN",
        "Wi-Fi, Bluetooth, NFC",
        "HTTP, HTTPS, FTP",
        "IPv4, IPv6, TCP, UDP",
      ],
      answer: "LAN, WAN, MAN, PAN",
    },
    {
      question: "Explain the OSI model and its layers.",
      options: ["4 layers", "5 layers", "6 layers", "7 layers"],
      answer: "7 layers",
    },
    {
      question: "What is the difference between TCP and UDP?",
      options: [
        "TCP is connection-oriented, UDP is connectionless",
        "TCP is faster than UDP",
        "UDP guarantees delivery, TCP does not",
        "There is no difference",
      ],
      answer: "TCP is connection-oriented, UDP is connectionless",
    },
    {
      question: "What is an IP address, and how does it work?",
      options: [
        "A unique identifier for a device on a network",
        "A type of encryption",
        "A wireless technology",
        "A network protocol",
      ],
      answer: "A unique identifier for a device on a network",
    },
    {
      question: "What are private and public IP addresses?",
      options: [
        "Private IPs are used within networks, Public IPs are used on the internet",
        "Both are used interchangeably",
        "Private IPs are for websites, Public IPs are for homes",
        "None of the above",
      ],
      answer:
        "Private IPs are used within networks, Public IPs are used on the internet",
    },
    {
      question: "What is subnetting, and why is it used?",
      options: [
        "To divide a large network into smaller networks",
        "To connect networks together",
        "To speed up the internet",
        "To encrypt data",
      ],
      answer: "To divide a large network into smaller networks",
    },
    {
      question: "Explain the difference between IPv4 and IPv6.",
      options: [
        "IPv4 has 32-bit addresses, IPv6 has 128-bit addresses",
        "IPv4 is faster than IPv6",
        "IPv6 is only used for security",
        "IPv4 is used in mobile networks only",
      ],
      answer: "IPv4 has 32-bit addresses, IPv6 has 128-bit addresses",
    },
    {
      question:
        "What is a MAC address, and how is it different from an IP address?",
      options: [
        "MAC addresses are physical, IP addresses are logical",
        "MAC addresses change frequently",
        "IP addresses are assigned by the user",
        "There is no difference",
      ],
      answer: "MAC addresses are physical, IP addresses are logical",
    },
    {
      question: "What is DHCP, and how does it work?",
      options: [
        "It dynamically assigns IP addresses",
        "It encrypts network traffic",
        "It is a type of firewall",
        "It is a wireless protocol",
      ],
      answer: "It dynamically assigns IP addresses",
    },
    {
      question: "What is DNS, and why is it important?",
      options: [
        "It translates domain names to IP addresses",
        "It speeds up the internet",
        "It prevents hacking",
        "It is a type of firewall",
      ],
      answer: "It translates domain names to IP addresses",
    },
    {
      question: "What is a gateway in networking?",
      options: [
        "A node that connects different networks",
        "A type of encryption",
        "A network protocol",
        "A database system",
      ],
      answer: "A node that connects different networks",
    },
    {
      question: "What is NAT (Network Address Translation)?",
      options: [
        "A method to map private IPs to public IPs",
        "A security protocol",
        "A type of network cable",
        "A wireless technology",
      ],
      answer: "A method to map private IPs to public IPs",
    },
    {
      question: "What is a firewall, and how does it enhance network security?",
      options: [
        "It monitors and controls network traffic",
        "It provides internet access",
        "It speeds up network traffic",
        "It connects networks together",
      ],
      answer: "It monitors and controls network traffic",
    },
    {
      question:
        "What are the differences between a switch, a router, and a hub?",
      options: [
        "A switch filters traffic, a router connects networks, a hub broadcasts data",
        "They all perform the same function",
        "A hub is faster than a router",
        "A switch provides internet access",
      ],
      answer:
        "A switch filters traffic, a router connects networks, a hub broadcasts data",
    },
    {
      question: "What is VLAN (Virtual Local Area Network)?",
      options: [
        "A network that groups devices logically, not physically",
        "A network for gaming",
        "A high-speed network",
        "A security protocol",
      ],
      answer: "A network that groups devices logically, not physically",
    },
  ],

  dbms: [
    {
      question:
        "Which SQL constraint ensures unique identification of records?",
      options: ["PRIMARY KEY", "FOREIGN KEY", "CHECK", "DEFAULT"],
      answer: "PRIMARY KEY",
    },
    {
      question: "What is a foreign key?",
      options: [
        "A key that uniquely identifies a record",
        "A key linking two tables",
        "A temporary key",
        "An encrypted key",
      ],
      answer: "A key linking two tables",
    },
    {
      question: "Which normal form eliminates transitive dependencies?",
      options: ["1NF", "2NF", "3NF", "BCNF"],
      answer: "3NF",
    },
    {
      question: "What does DDL stand for?",
      options: [
        "Data Definition Language",
        "Data Development Language",
        "Database Design Language",
        "Data Diagramming Language",
      ],
      answer: "Data Definition Language",
    },
    {
      question: "Which join returns all records from both tables?",
      options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
      answer: "FULL OUTER JOIN",
    },
    {
      question: "What is the purpose of the GROUP BY clause?",
      options: [
        "Filter rows",
        "Group rows by column values",
        "Sort results",
        "Join tables",
      ],
      answer: "Group rows by column values",
    },
    {
      question: "Which SQL function counts the number of rows?",
      options: ["SUM()", "COUNT()", "AVG()", "MAX()"],
      answer: "COUNT()",
    },
    {
      question: "What is a transaction in DBMS?",
      options: [
        "A single SQL statement",
        "A sequence of operations",
        "A database backup",
        "A user account",
      ],
      answer: "A sequence of operations",
    },
    {
      question: "Which SQL command permanently saves transactions?",
      options: ["SAVE", "COMMIT", "STORE", "KEEP"],
      answer: "COMMIT",
    },
    {
      question: "What is a view in DBMS?",
      options: [
        "Physical storage structure",
        "Virtual table based on result-set",
        "Graphical interface",
        "Backup copy",
      ],
      answer: "Virtual table based on result-set",
    },
    {
      question: "Which is NOT a type of NoSQL database?",
      options: ["Document", "Key-Value", "Columnar", "Hierarchical"],
      answer: "Hierarchical",
    },
    {
      question: "What does SQL stand for?",
      options: [
        "Structured Question Language",
        "Structured Query Language",
        "System Query Language",
        "Simple Question Language",
      ],
      answer: "Structured Query Language",
    },
    {
      question: "Which operator is used for pattern matching?",
      options: ["LIKE", "MATCH", "FIND", "SIMILAR"],
      answer: "LIKE",
    },
    {
      question: "What is a stored procedure?",
      options: [
        "A backup process",
        "Precompiled SQL statements",
        "Hardware component",
        "Database schema",
      ],
      answer: "Precompiled SQL statements",
    },
    {
      question: "Which SQL command modifies existing data?",
      options: ["ALTER", "UPDATE", "MODIFY", "CHANGE"],
      answer: "UPDATE",
    },
    {
      question: "What is database indexing used for?",
      options: [
        "Improve search speed",
        "Increase storage",
        "Encrypt data",
        "Create backups",
      ],
      answer: "Improve search speed",
    },
    {
      question: "Which is NOT an ACID property?",
      options: ["Atomicity", "Durability", "Scalability", "Consistency"],
      answer: "Scalability",
    },
    {
      question: "What does NULL represent in SQL?",
      options: [
        "Zero value",
        "Empty string",
        "Missing/unknown value",
        "Error state",
      ],
      answer: "Missing/unknown value",
    },
    {
      question: "Which SQL clause filters grouped results?",
      options: ["WHERE", "HAVING", "FILTER", "GROUP BY"],
      answer: "HAVING",
    },
    {
      question: "What is a candidate key?",
      options: [
        "A super key with no redundancy",
        "A foreign key",
        "A temporary key",
        "An encrypted key",
      ],
      answer: "A super key with no redundancy",
    },
    {
      question: "Which SQL command deletes a table?",
      options: ["REMOVE", "DELETE", "DROP", "ERASE"],
      answer: "DROP",
    },
    {
      question: "What is database sharding?",
      options: [
        "Horizontal partitioning",
        "Vertical partitioning",
        "Data encryption",
        "Backup process",
      ],
      answer: "Horizontal partitioning",
    },
    {
      question: "Which is used for database recovery?",
      options: ["Index", "Trigger", "Transaction log", "View"],
      answer: "Transaction log",
    },
    {
      question: "What does CHECK constraint do?",
      options: [
        "Ensures unique values",
        "Validates data condition",
        "Links tables",
        "Encrypts data",
      ],
      answer: "Validates data condition",
    },
    {
      question: "Which is a NoSQL database?",
      options: ["MySQL", "MongoDB", "Oracle", "PostgreSQL"],
      answer: "MongoDB",
    },
    {
      question: "What is a deadlock in DBMS?",
      options: [
        "Fast query execution",
        "Simultaneous blocked transactions",
        "Database backup",
        "Index corruption",
      ],
      answer: "Simultaneous blocked transactions",
    },
    {
      question: "Which SQL command changes table structure?",
      options: ["MODIFY", "UPDATE", "ALTER", "CHANGE"],
      answer: "ALTER",
    },
    {
      question: "What is the difference between DELETE and TRUNCATE?",
      options: [
        "TRUNCATE can be rolled back",
        "DELETE resets identity columns",
        "TRUNCATE removes all rows",
        "DELETE is faster",
      ],
      answer: "TRUNCATE removes all rows",
    },
  ],
};

const QuizPage = () => {
  const { user } = useUser(); // Get user details from context
  const { quizId } = useParams(); // Get the quiz ID from the route
  const navigate = useNavigate();

  const questions = quizData[quizId] || [];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  // Save the score to the server
  const handleScoreUpdate = async () => {
    const username = localStorage.getItem("username");
    console.log("Sending score update:", username, score * 5);

    if (!username) {
      console.error("User not logged in or username missing.");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/auth/quiz`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, score: score * 5 }),
        }
      );

      if (response.ok) {
        console.log("Score updated successfully.");
      } else {
        console.error("Failed to update score.");
      }
    } catch (error) {
      console.error("Error updating score:", error);
    }
  };

  // Trigger score update after quiz completion
  useEffect(() => {
    if (isCompleted) {
      handleScoreUpdate();
    }
  }, [isCompleted]); // Depend on user context to ensure it is loaded

  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore((prev) => prev + 1);
    }
    setSelectedOption("");

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedOption("");
    setScore(0);
    setIsCompleted(false);
  };

  return (
    <div
      style={{
        padding: "20px",
        minHeight: "100vh",
        backgroundColor: "#F4F6F8",
      }}
    >
      <h2 style={{ marginBottom: "20px", color: "#2C3E50" }}>
        {quizId.toUpperCase()} Quiz
      </h2>
      {isCompleted ? (
        <div style={{ textAlign: "center" }}>
          <h3>
            Your Score: {score * 5}/{questions.length * 5}
          </h3>
          <button
            onClick={handleRetry}
            style={{
              padding: "10px 20px",
              backgroundColor: "#6A82FB",
              color: "#FFF",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              margin: "10px",
            }}
          >
            Retry Quiz
          </button>
          <button
            onClick={() => navigate("/weekly-contest")}
            style={{
              padding: "10px 20px",
              backgroundColor: "#34495E",
              color: "#FFF",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Back to Contest
          </button>
        </div>
      ) : (
        <div>
          <h3>{questions[currentQuestion]?.question}</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {questions[currentQuestion]?.options.map((option, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                <label>
                  <input
                    type="radio"
                    name="option"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => setSelectedOption(option)}
                    style={{ marginRight: "10px" }}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          <button
            onClick={handleNext}
            disabled={!selectedOption}
            style={{
              padding: "10px 20px",
              backgroundColor: "#43C6AC",
              color: "#FFF",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              marginTop: "20px",
            }}
          >
            {currentQuestion + 1 === questions.length ? "Submit" : "Next"}
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
