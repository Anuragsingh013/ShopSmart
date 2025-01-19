import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Auth/LoginPage";
import NotFound from "./Pages/NotFound";

const App = () => {
  const ProtectedRoute = ({ element }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    // If authenticated, render the provided element; otherwise, redirect to login
    return isAuthenticated ? element : <Navigate to="/" />;
  };

  return (
    <Router>
      <Routes>
        {/* Public route */}
        <Route path="/" element={<Login />} />
        
        {/* Protected route */}
        <Route
          path="/dashboard"
          element={<ProtectedRoute element={<Dashboard />} />}
        />

        {/* Fallback route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
