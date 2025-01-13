import React from "react";
import { Box, Typography } from "@mui/material";
import Chatbot from "./Chatbot";
import Navbar from "./Navbar";

const Dashboard: React.FC = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Box sx={{ flex: 1, p: 3, display: "flex", flexDirection: "column" }}>
        <Typography variant="h4" gutterBottom>
          Welcome to Bright Path Analytics' AI Education Assistant!
        </Typography>

        {/* Chatbot Interface */}
        <Box
          sx={{
            flex: 1,
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Chatbot />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
