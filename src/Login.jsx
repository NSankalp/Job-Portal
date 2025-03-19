import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import ReCAPTCHA from "react-google-recaptcha";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [captchaToken, setCaptchaToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate(); // Initialize navigate
  const recaptchaRef = useRef(null); // Reference for reCAPTCHA

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!captchaToken) {
      setError("Please complete the reCAPTCHA.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: formData.username,
            password: formData.password,
            captchaToken, // Add captchaToken to the request body
          }),
        }
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }

      alert("Login successful");
      localStorage.setItem("username", formData.username);
      navigate("/practice");
    } catch (err) {
      console.error("Error:", err);
      setError(err.message || "An error occurred. Please try again later.");
    } finally {
      setLoading(false);
      setCaptchaToken(null);
      recaptchaRef.current?.reset();
    }
  };
  return (
    <>
      <style>
        {`
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
          }
          .form-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f9;
          }
          .form-content {
            display: flex;
            flex-direction: column;
            align-items: center;
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
            text-align: center;
          }
        `}
      </style>
      <div className="form-container">
        <div className="form-content">
          <h1 className="title">Job Portal Login</h1>
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="username"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            {/* reCAPTCHA v2 Widget */}
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LenBvMqAAAAALN-DNzfq-TpKfRSru9kv4xuFIHg" // Replace with your actual reCAPTCHA site key
              onChange={(token) => setCaptchaToken(token)}
            />

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
