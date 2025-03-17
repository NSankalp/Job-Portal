const express = require('express');
const User = require('../models/user');
const axios = require('axios');
const multer = require('multer');


const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 50 * 1024 * 1024 } // 50MB limit
});

// Signup route
router.post('/signup', async (req, res) => {
  const { username, password, email, captchaToken } = req.body;
  try {
    // Verify reCAPTCHA with Google
    const secretKey = "6LenBvMqAAAAAJJCvGfNlbVQktHv4YgTuYon0PyJ"; // Replace with actual secret key
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;
    
    const captchaResponse = await axios.post(verifyUrl);
    if (!captchaResponse.data.success) {
      return res.status(400).json({ message: "reCAPTCHA verification failed!" });
    }
    const user = new User({ username, password, email });
    await user.save();
    res.status(201).send({ message: 'User created successfully' });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).send({ error: 'Username already exists' });
    } else {
      res.status(500).send({ error: 'Internal server error' });
    }
  }
});

// Get user data
router.get('/user', async (req, res) => {
  const { username } = req.query;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({
      username: user.username,
      score: user.score,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update score after quiz completion
router.post('/quiz', async (req, res) => {
  const { username, score } = req.body;

  if (!username || score === undefined) {
    return res.status(400).send({ error: "Username and score are required" });
  }

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    user.score += score;
    await user.save();
    res.send({ message: "Score updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal server error" });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { username, password, captchaToken } = req.body;

  try {
    // Verify reCAPTCHA
    const secretKey = "6LenBvMqAAAAAJJCvGfNlbVQktHv4YgTuYon0PyJ";
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;
    
    const captchaResponse = await axios.post(verifyUrl);
    if (!captchaResponse.data.success) {
      return res.status(400).json({ error: "reCAPTCHA verification failed!" });
    }
    
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    if (user.password !== password) {
      return res.status(400).json({ error: "Invalid password" });
    }

    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// auth.js (backend route)
router.get('/leaderboard', async (req, res) => {
  try {
    const users = await User.find({})
      .sort({ score: -1 }) // Sort by score descending
      .limit(10); // Get top 10 users
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post("/profile", upload.fields([
  { name: 'profilePic', maxCount: 1 },
  { name: 'resume', maxCount: 1 }
]), async (req, res) => {
  try {
    const { body, files } = req;
    
    const updateData = {
      fullName: body.fullName,
      contactNumber: body.contactNumber,
      education: {
        institution: body.institution,
        degree: body.degree,
        graduationYear: body.graduationYear
      },
      skills: JSON.parse(body.skills),
      internship: {
        company: body.internshipCompany,
        role: body.internshipRole,
        duration: body.internshipDuration
      }
    };

    // Handle file uploads
    if (files.profilePic) {
      updateData.profilePic = {
        data: files.profilePic[0].buffer,
        contentType: files.profilePic[0].mimetype
      };
    }
    
    if (files.resume) {
      updateData.resume = {
        data: files.resume[0].buffer,
        contentType: files.resume[0].mimetype,
        name: files.resume[0].originalname
      };
    }

    const updatedUser = await User.findOneAndUpdate(
      { email: body.email },
      { $set: updateData },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ 
      message: "Profile updated successfully",
      user: updatedUser
    });
  } catch (error) {
    console.error("Profile update error:", error);
    res.status(500).json({ error: "Server error", details: error.message });
  }
});module.exports= router;
