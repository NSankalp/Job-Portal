// import React from "react";
// import "./App.css";

// function App() {
//   return (
//     <div className="container">
//       <div className="left-section">
//         <img
//           src="C:\Users\nalam\first-react-app\Projects\3-todo-app-version-two\src\project1.webp"
//           alt="Recruitment"
//           className="recruitment-image"
//         />
//       </div>
//       <div className="right-section">
//         <div className="form-container">
//           <p className="signin-text">
//             Already have an account?{" "}
//             <span className="signin-link">SIGN IN</span>
//           </p>
//           <h1>Welcome to Fresh Start Hub!</h1>
//           <p>Register your account</p>
//           <form>
//             <div className="input-group">
//               <label htmlFor="name">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 placeholder="Aninditha"
//                 className="input-field"
//               />
//             </div>
//             <div className="input-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="freshstart@gmail.com"
//                 className="input-field"
//               />
//             </div>
//             <div className="input-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="8+ characters"
//                 className="input-field"
//               />
//             </div>
//             <button type="submit" className="login-button">
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./Context/Usercontext";
import ProgramsList from "./ProgramsList";
import ProgramDetail from "./ProgramDetail";
import Practice from "./Practice";
import SubjectsList from "./SubjectsList";
import InterviewQuestions from "./InterviewQuestions";
import WeeklyContest from "./WeeklyContest";
import QuizPage from "./QuizPage";
import AvailableJobs from "./pages/AvailableJobs";
import JobDetails from "./pages/JobDetails";
import Signup from "./Signup";
import Login from "./Login";
import Leaderboard from "./Leaderboard";
import ProfileSetup from "./ProfileSetup";
import Resource from "./Resource";
import Resume from "./Resume";
import BehavioralPractice from "./BehavioralPractice";
import ResumeBuilder from "./ResumeBuilder";
import QuestionCategory from "./QuestionCategory";
import ResumeSection from "./ResumeSection";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/login" element={<Login />} />

          {/* New Behavioral Practice Routes */}
          <Route path="/behavioral-practice" element={<BehavioralPractice />}>
            <Route path=":category" element={<QuestionCategory />} />
          </Route>

          {/* New Resume Builder Routes */}
          <Route path="/resume-builder" element={<ResumeBuilder />}>
            <Route path=":section" element={<ResumeSection />} />
          </Route>

          {/* Existing Routes */}
          <Route path="/programs/:language" element={<ProgramsList />} />
          <Route
            path="/program/:language/:program"
            element={<ProgramDetail />}
          />
          <Route path="/interview-questions" element={<SubjectsList />} />
          <Route
            path="/interview-questions/:subject"
            element={<InterviewQuestions />}
          />
          <Route path="/weekly-contest" element={<WeeklyContest />} />
          <Route path="/quiz/:quizId" element={<QuizPage />} />
          <Route path="/available-jobs" element={<AvailableJobs />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/profile" element={<ProfileSetup />} />
          <Route path="/resources" element={<Resource />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
