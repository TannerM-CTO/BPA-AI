import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout"; // Import Layout component
import Login from "./components/Login";
import TeacherDashboard from "./components/TeacherDashboard";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Default route redirects to login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Public Login Route */}
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />

        {/* Teacher Dashboard Route */}
        <Route
          path="/teacher-dashboard"
          element={
            <Layout>
              <TeacherDashboard />
            </Layout>
          }
        />

        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);