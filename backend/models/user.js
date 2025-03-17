const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  score: { type: Number, default: 0 },
  fullName: String,
  contactNumber: String,
  education: {
    institution: String,
    degree: String,
    graduationYear: String
  },
  skills: [String],
  profilePic: {
    data: Buffer,
    contentType: String
  },
  resume: {
    data: Buffer,
    contentType: String,
    name: String
  },
  internship: {
    company: String,
    role: String,
    duration: String
  }
});


const User = mongoose.model("job portals", userSchema);

module.exports = User;