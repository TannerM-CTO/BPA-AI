import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout"; // Import Layout component
import Login from "./components/Login";
import Report from "./components/Report";
import Dashboard from "./components/Dashboard";

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

        {/* Dashboard Route */}
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />

        {/* Teacher Report Route */}
        <Route
          path="/report"
          element={
            <Layout>
              <Report />
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