import React from "react";
import { Box, Container, Typography } from "@mui/material";
import logo from "../assets/logo.jpg"; // Adjust the path to match your project structure

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      {/* Main Content */}
      <Box sx={{ flexGrow: 1 }}>
        <Container>{children}</Container>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          backgroundColor: "#f4f4f4",
          padding: 2,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <img
          src={logo}
          alt="Company Logo"
          style={{ height: 50, marginRight: 16 }}
        />
        <Typography variant="body2" color="text.secondary">
          © 2025 Bright Path Analytics. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Layout;
