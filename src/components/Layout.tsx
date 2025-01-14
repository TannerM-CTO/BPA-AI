import React from "react";
import { Box, Container, Typography } from "@mui/material";
import logo from "../assets/logo.jpg";

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
          backgroundColor: "background.paper", // Use theme's background color for paper
          padding: 2,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, // Responsive layout
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 2, sm: 0 }, // Add spacing for smaller screens
          borderTop: "1px solid",
          borderColor: "divider", // Add a subtle divider line
        }}
      >
        <img
          src={logo}
          alt="Company Logo"
          style={{
            height: 86,
            marginRight: 16,
            maxWidth: "100%", // Ensure responsive image scaling
          }}
        />
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign={{ xs: "center", sm: "left" }} // Align text for smaller screens
        >
          © 2025 Bright Path Analytics. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Layout;
