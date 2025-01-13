import React from "react";
import { Box, Typography, List, ListItem, Button, Divider } from "@mui/material";

const Navbar: React.FC = () => {
  const userRole = "teacher"; // Replace with dynamic role fetching logic

  const itemsForTeacher = ["Reports", "Recommended Prompts", "Requests"];
  const itemsForAdmin = ["Manage Users", "Analytics", "System Settings"];

  const items = userRole === "teacher" ? itemsForTeacher : itemsForAdmin;

  return (
    <Box
      sx={{
        width: "250px",
        bgcolor: "primary.light",
        color: "white",
        display: "flex",
        flexDirection: "column",
        p: 2,
      }}
    >
      {/* User Name */}
      <Typography variant="h6" gutterBottom>
        John Doe {/* Replace with dynamic user name */}
      </Typography>
      <Divider sx={{ mb: 2 }} />

      {/* Dynamic Navigation Items */}
      <List>
        {items.map((item, index) => (
          <ListItem key={index}>
            <Button fullWidth variant="contained" color="secondary">
              {item}
            </Button>
          </ListItem>
        ))}
      </List>

      {/* Footer Section */}
      <Box sx={{ mt: "auto", textAlign: "center" }}>
        <Typography variant="body2">© 2025 Bright Path Analytics</Typography>
      </Box>
    </Box>
  );
};

export default Navbar;
