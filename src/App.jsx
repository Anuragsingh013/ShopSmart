import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Auth/LoginPage";
import NotFound from "./Pages/NotFound";
import ForgotPassword from "./Pages/Auth/ForogtPassWord/index";
import ResetPassword from "./Pages/Auth/ResetPassword";

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
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />

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



// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import Dashboard from "./Pages/Dashboard/Dashboard";
// import Login from "./Pages/Auth/LoginPage";
// import NotFound from "./Pages/NotFound";
// import ForgotPassword from "./Pages/Auth/ForogtPassWord/index";
// import ResetPassword from "./Pages/Auth/ResetPassword";
// import Enquiry from "./Pages/Enquiry"; // New route for Enquiry
// import Profile from "./Pages/Profile"; // New route for Profile

// const App = () => {
//   const ProtectedRoute = ({ element }) => {
//     const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//     // If authenticated, render the provided element; otherwise, redirect to login
//     return isAuthenticated ? element : <Navigate to="/" />;
//   };

//   return (
//     <Router>
//       <Routes>
//         {/* Public routes */}
//         <Route path="/" element={<Login />} />
//         <Route path="/forgotPassword" element={<ForgotPassword />} />
//         <Route path="/resetPassword" element={<ResetPassword />} />

//         {/* Protected routes */}
//         <Route
//           path="/dashboard"
//           element={<ProtectedRoute element={<Dashboard />} />}
//         />
//         <Route
//           path="/enquiry"
//           element={<ProtectedRoute element={<Enquiry />} />}
//         />
//         <Route
//           path="/profile"
//           element={<ProtectedRoute element={<Profile />} />}
//         />

//         {/* Fallback route for 404 */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
