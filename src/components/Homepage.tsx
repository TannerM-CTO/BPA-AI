import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit"; // Pencil icon
import Chatbot from "./Chatbot";
import Sidebar from "./Sidebar";
import { Helmet } from "react-helmet"; // Import Helmet for modifying the tab title

const Homepage: React.FC = () => {
  const [openFeedback, setOpenFeedback] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");

  // Handle opening and closing the feedback dialog
  const handleFeedbackClick = () => setOpenFeedback(true);
  const handleCloseFeedback = () => setOpenFeedback(false);

  // Handle form submission
  const handleSubmitFeedback = () => {
    console.log("Feedback submitted:", feedbackText); // Replace with API call or other functionality
    setFeedbackText("");
    setOpenFeedback(false);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", bgcolor: "background.default" }}>
      {/* Set Tab Title */}
      <Helmet>
        <title>Homepage</title>
      </Helmet>

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box sx={{ flex: 1, p: 4, display: "flex", flexDirection: "column" }}>
        {/* Header Section */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
          <Typography variant="h4" color="text.primary" fontWeight="bold">
            Welcome to Bright Path Analytics' AI Education Assistant Homepage!
          </Typography>

          {/* Send Feedback Button */}
          <Tooltip title="Send Feedback" arrow>
            <IconButton
              onClick={handleFeedbackClick}
              sx={{
                backgroundColor: "secondary.main",
                color: "white",
                borderRadius: "8px",
                boxShadow: 2,
                "&:hover": { backgroundColor: "secondary.dark" },
              }}
            >
              <EditIcon sx={{ fontSize: "24px" }} />
            </IconButton>
          </Tooltip>
        </Box>

        {/* Content Section */}
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Explore the features and tools designed to enhance your experience.
        </Typography>

        {/* Chatbot Interface */}
        <Box
          sx={{
            flex: 1,
            border: "1px solid",
            borderColor: "divider",
            borderRadius: "8px",
            padding: "16px",
            bgcolor: "background.paper",
            boxShadow: 1,
          }}
        >
          <Chatbot />
        </Box>
      </Box>

      {/* Feedback Dialog */}
      <Dialog open={openFeedback} onClose={handleCloseFeedback}>
        <DialogTitle>Send Feedback</DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ mb: 2 }}>
            We value your feedback! Please let us know your thoughts below.
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            placeholder="Type your feedback here..."
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseFeedback} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={handleSubmitFeedback}
            color="primary"
            variant="contained"
            disabled={!feedbackText.trim()} // Disable if the text is empty
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Homepage;
