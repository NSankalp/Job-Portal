import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import ReCAPTCHA from "react-google-recaptcha";

function Signup() {
  const navigate = useNavigate(); // Initialize navigate

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/auth/Signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: formData.name,
            password: formData.password,
            email: formData.email,
            captchaToken, //send captcha token
          }),
        }
      );

      let data;
      if (response.headers.get("content-type")?.includes("application/json")) {
        data = await response.json();
      } else {
        data = {};
      }

      if (response.ok) {
        alert("Signup successful!");
        navigate("/login"); // Redirect after signup
      } else {
        console.error(data.error || "Signup failed.");
      }
    } catch (error) {
      console.error("An error occurred. Please try again later.", error);
    }
  };

  return (
    <>
      <style>
        {`
          .form-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: #f4f4f9;
            padding: 20px;
          }
          .form {
            background: #fff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 400px;
          }
          .form input {
            width: 100%;
            padding: 12px;
            margin-bottom: 15px;
            border: 1px solid #ddd;
            border-radius: 6px;
            font-size: 14px;
          }
          .form button {
            width: 100%;
            padding: 12px;
            background-color: #6200ea;
            color: #fff;
            border: none;
            border-radius: 6px;
            font-size: 16px;
            cursor: pointer;
          }
          .form button:hover {
            background-color: #4500a0;
          }
          .title {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 20px;
            color: #333;
          }
        `}
      </style>
      <div className="form-container">
        <h1 className="title">Job Portal Sign Up</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {/* reCAPTCHA v2 Widget */}
          <ReCAPTCHA
            sitekey="6LenBvMqAAAAALN-DNzfq-TpKfRSru9kv4xuFIHg" // Replace with your actual reCAPTCHA site key
            onChange={(token) => setCaptchaToken(token)}
          />

          <button type="submit">Signup</button>
        </form>
      </div>
    </>
  );
}

export default Signup;
