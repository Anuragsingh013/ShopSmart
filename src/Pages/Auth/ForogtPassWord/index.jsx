import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './ForgotPassword.css'; // Add this CSS for styling

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleForgotPassword = () => {
    // Email validation regex
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Clear error if valid email
    setError("");

    // Placeholder for OTP sending logic
    console.log("Sending OTP to:", email);
    navigate("/resetPassword");
  };

  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
    }}>
      <div className="forgot-password-container">
        <h2 className="forgot-password-title">Forgot Password</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
        </div>
        <button
          onClick={handleForgotPassword}
          className="send-otp-btn"
        >
          Send OTP
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
