import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../store/auth-slice";
import { Link, useNavigate } from "react-router-dom";
import './login.css';
import CommonButton from "../AuthComponent/commonButton";
import CommonInput from "../AuthComponent/commonInput";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [authData, setAuthData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (authData.username.length <= 6 || authData.password.length <= 6) {
      setError("Username and password must be at least 6 characters long.");
      return;
    }

    setLoading(true);
    const userData = {
      user: { username: authData.username, password: authData.password },
      token: "your-jwt-token", // Usually set by the backend upon successful login
    };

    // Simulating login action
    setTimeout(() => {
      dispatch(login(userData));
      navigate("/dashboard");
      setLoading(false);
    }, 1000); // Simulate network request
  };

  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
    }}>
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        {/* {error && <p className="error-message">{error}</p>} */}

        {/* Use CommonInput for username */}
        {/* <CommonInput
          type="text"
          name="username"
          placeholder="Enter your username"
          value={authData.username}
          onChange={(e) => setAuthData({ ...authData, username: e.target.value })}
          label="Username"
          error={error && authData.username.length <= 6 ? "Username must be at least 6 characters long." : ""}
        /> */}

        <CommonInput
          label="Username"
          placeholder="Enter your username"
          value={authData.username}
          onChange={(e) => setAuthData({ ...authData, username: e.target.value })}
          error={error && authData.username.length <= 6 ? "Username must be at least 6 characters long." : ""}
        />


        {/* Use CommonInput for password */}
        <CommonInput
          type="password"
          name="password"
          placeholder="Enter your password"
          value={authData.password}
          onChange={(e) => setAuthData({ ...authData, password: e.target.value })}
          label="Password"
          error={error && authData.password.length <= 6 ? "Password must be at least 6 characters long." : ""}
        />

        <div className="forgot-password">
          <Link to="/forgotPassword">Forgot Password?</Link>
        </div>

        <CommonButton
          onClick={handleLogin}
          loading={loading}
          disabled={loading}
          text="Login"
        />
      </div>
    </div>
  );
};

export default Login;
