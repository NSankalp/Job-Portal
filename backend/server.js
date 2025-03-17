const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const axios = require('axios');
const fs = require('fs');
const pdfParse = require('pdf-parse');
const mammoth = require('mammoth');
require('dotenv').config();

const jobsRoutes = require("./routes/Jobs");
const availableJobsRouter = require("./routes/availableJobs");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static(path.join(__dirname, '../dist')));

// MongoDB Connection
mongoose.connect('mongodb+srv://demo_user:321@jobportal.r6vad.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// File Upload Configuration
const upload = multer({ storage: multer.memoryStorage() });

// Auth Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);
app.use("/api/jobs", jobsRoutes);
app.use("/api/jobs", availableJobsRouter);

// ✅ Predefined job-related keywords for skill extraction
const JOB_KEYWORDS = {
  "Web Development": [
    "React", "JavaScript", "CSS", "HTML", "Node.js", "Express", "MongoDB", "Redux", "REST API",
    "GraphQL", "Vue.js", "Angular", "TypeScript", "Next.js", "Bootstrap", "Tailwind CSS", "SASS",
    "Webpack", "Jest", "Cypress", "Figma", "UI/UX", "Responsive Design"
  ],

  "Data Science": [
    "Python", "Machine Learning", "Deep Learning", "TensorFlow", "PyTorch", "Pandas", "NumPy",
    "Scikit-Learn", "Keras", "R", "SQL", "Matplotlib", "Seaborn", "Big Data", "Hadoop", "Spark",
    "Data Wrangling", "Data Visualization", "NLP", "AI", "Statistics", "Power BI"
  ],

  "Cybersecurity": [
    "Ethical Hacking", "Penetration Testing", "Network Security", "Cryptography", "Malware Analysis",
    "Firewalls", "Incident Response", "SOC Analyst", "SIEM", "Forensics", "ISO 27001", "Risk Assessment",
    "Cyber Threat Intelligence", "Web Security", "OWASP", "Secure Coding", "Phishing Defense", "Wireshark"
  ],

  "Cloud Computing": [
    "AWS", "Azure", "Google Cloud", "Cloud Security", "Kubernetes", "Docker", "Terraform", "CI/CD",
    "Serverless Computing", "IAM", "Networking in Cloud", "Load Balancing", "Cloud Storage",
    "Cloud Functions", "Cloud Deployment", "DevOps", "Jenkins", "Lambda", "EC2", "S3", "CloudFormation"
  ],

  "DevOps": [
    "Docker", "Kubernetes", "CI/CD", "Jenkins", "GitHub Actions", "Terraform", "Ansible", "AWS",
    "Azure DevOps", "Google Cloud Build", "Monitoring", "Grafana", "Prometheus", "ELK Stack", 
    "Infrastructure as Code", "Helm", "Load Balancing", "GitOps", "Chaos Engineering", "Cloud Native"
  ],

  "AI & Machine Learning": [
    "Artificial Intelligence", "Neural Networks", "Deep Learning", "NLP", "Computer Vision",
    "TensorFlow", "PyTorch", "Scikit-Learn", "Reinforcement Learning", "Bayesian Inference",
    "GANs", "LSTMs", "BERT", "GPT", "AI Ethics", "MLOps", "AutoML", "Hugging Face", "OpenCV"
  ],

  "Blockchain": [
    "Ethereum", "Solidity", "Smart Contracts", "Bitcoin", "Hyperledger", "NFT", "DeFi", "DApps",
    "Crypto Wallets", "Consensus Algorithms", "Web3.js", "Metamask", "Polygon", "Gas Optimization",
    "Truffle", "Hardhat", "IPFS", "Blockchain Security", "Decentralized Storage", "Zero-Knowledge Proofs"
  ],

  "Mobile Development": [
    "React Native", "Flutter", "Swift", "Kotlin", "Android Studio", "iOS Development", "Dart",
    "Java", "Xcode", "Firebase", "App Store Optimization", "Cross-Platform Apps", "UI/UX",
    "Jetpack Compose", "MVVM", "Push Notifications", "Bluetooth Integration", "Camera API",
    "Payment Gateway Integration", "Apple Pay", "Google Pay"
  ],

  "Game Development": [
    "Unity", "Unreal Engine", "C#", "C++", "Game Physics", "Shader Programming", "OpenGL", 
    "DirectX", "Blender", "3D Modeling", "AI in Games", "Procedural Generation", "VR Development",
    "AR Development", "Game Engines", "Character Animation", "Multiplayer Game Dev", "Photon",
    "Ray Tracing", "Level Design"
  ]
};


// ✅ Extract required skills from job description
function extractRequiredSkills(jobDescription) {
  let extractedSkills = new Set();
  for (let category in JOB_KEYWORDS) {
    JOB_KEYWORDS[category].forEach(skill => {
      if (jobDescription.toLowerCase().includes(skill.toLowerCase())) {
        extractedSkills.add(skill);
      }
    });
  }
  return Array.from(extractedSkills);
}

// ✅ Resume Parsing & Skill Matching Endpoint
app.post("/upload", upload.single("resume"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const { jobRole, jobDescription } = req.body;

  if (!jobRole || !JOB_KEYWORDS[jobRole]) {
    return res.status(400).json({ error: "Invalid job role selected" });
  }

  if (!jobDescription) {
    return res.status(400).json({ error: "Job description is required" });
  }

  try {
    const resumeText = await pdfParse(req.file.buffer);
    let extractedText = resumeText.text;

    // ✅ Limit input to 512 tokens
    const maxTokens = 512;
    const tokens = extractedText.match(/\S+/g) || [];
    extractedText = tokens.slice(0, maxTokens).join(" ");

    // ✅ Extract required skills from job description
    const requiredSkills = extractRequiredSkills(jobDescription);
    
    if (requiredSkills.length === 0) {
      return res.json({
        message: "No specific skills detected in the job description.",
      });
    }

    // ✅ Match resume to required skills
    let matchedSkills = requiredSkills.filter(skill => 
      extractedText.toLowerCase().includes(skill.toLowerCase())
    );

    // ✅ Calculate ATS Score based on job-specific skills
    let atsScore = (matchedSkills.length / requiredSkills.length) * 100;

    // ✅ Suggest only **missing** required skills
    let missingSkills = requiredSkills.filter(skill => !matchedSkills.includes(skill));

    res.json({
      detectedRole: jobRole,
      atsScore: Math.round(atsScore),
      matchedSkills: matchedSkills,
      missingSkills: missingSkills.length > 0 
        ? missingSkills.map(skill => `Consider adding '${skill}' to your resume.`) 
        : [],
    });

  } catch (error) {
    console.error("Error processing resume:", error.response?.data || error.message);
    res.status(500).json({ error: "Error processing resume. Please try again later." });
  }
});

// ✅ Code Execution Endpoint (unchanged)
app.post('/run', async (req, res) => {
  const { language, code, testCases = [] } = req.body;
  if (!language || !code) {
    return res.status(400).json({ error: 'Language and code are required.' });
  }

  const clientId = 'f62b245084a5c65e2331b718845fe8d3';
  const clientSecret = '72d78b7ea785c13e6e73a6ee30339a2fe89125a612fa91eb8fd926fe65c98992';
  
  const versionIndexes = {
    cpp: '0',
    python: '3.x'
  };

  try {
    const input = testCases.map(tc => tc.input).join('\n');
    const expectedOutputs = testCases.map(tc => tc.expectedOutput.trim());

    const response = await axios.post('https://api.jdoodle.com/v1/execute', {
      script: code,
      language: language === 'c++' ? 'cpp' : language,
      versionIndex: versionIndexes[language.toLowerCase()] || '0',
      clientId,
      clientSecret,
      stdin: input
    });

    const actualOutput = (response.data.output || '').trim();
    const actualOutputs = actualOutput.split('\n').map(line => line.trim());
    
    const results = testCases.map((testCase, index) => {
      const actual = index < actualOutputs.length ? actualOutputs[index] : '';
      const expected = testCase.expectedOutput.trim();
      return {
        input: testCase.input,
        expectedOutput: expected,
        actualOutput: actual,
        passed: actual === expected
      };
    });

    res.json({ results });
  } catch (error) {
    console.error('Execution error:', error.response?.data || error.message);
    res.status(500).json({ 
      error: 'Failed to execute code. Please check your code and try again.',
      details: error.message
    });
  }
});

// ✅ Catch-all: Send back index.html for unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
