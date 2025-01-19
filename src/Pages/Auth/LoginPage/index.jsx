import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../store/auth-slice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();

  const initialState = {
    username: "",
    password: "",
  };
  const navigate = useNavigate();
  const [authData, setAuthData] = useState(initialState);

  const handleLogin = () => {
    const userData = {
      user: {
        username: authData.username, password: authData.password
        , token: "your-jwt-token",
      },
    };

    // Dispatch the login action with user data
    dispatch(login(userData));
    if (authData.username.length > 6 && authData.password.length > 6) {
      navigate("/dashboard")
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: 'center', alignItems: "center", width: "100vw", flexDirection: "column" }}>
      <h2>Login Page</h2>
      <input
        type="text"
        name="username"
        placeholder="Enter your name"
        value={authData.username}
        onChange={(e) => setAuthData({ ...authData, username: e.target.value })}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        value={authData.password}
        onChange={(e) => setAuthData({ ...authData, password: e.target.value })}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
