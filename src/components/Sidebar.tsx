import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  Button,
  Checkbox,
  Divider,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showReportsSubsection, setShowReportsSubsection] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSubjects, setActiveSubjects] = useState<string[]>([]);
  const [selectedPeriods, setSelectedPeriods] = useState<string[]>([]);
  const [showGenerateButton, setShowGenerateButton] = useState(false);

  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
    setShowReportsSubsection(false);
    setActiveCategory(null);
    setActiveSubjects([]);
    setSelectedPeriods([]);
    setShowGenerateButton(false);
  };

  const toggleReportsSubsection = () => {
    setShowReportsSubsection((prev) => !prev);
    setActiveCategory(null);
    setActiveSubjects([]);
    setSelectedPeriods([]);
    setShowGenerateButton(false);
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    setActiveSubjects([]);
    setSelectedPeriods([]);
    setShowGenerateButton(false);
  };

  const handleSubjectClick = (subject: string) => {
    setActiveSubjects((prev) =>
      prev.includes(subject)
        ? prev.filter((s) => s !== subject) // Deselect if already selected
        : [...prev, subject] // Add to selection if not selected
    );
  };

  const handlePeriodCheckbox = (period: string) => {
    const updatedPeriods = selectedPeriods.includes(period)
      ? selectedPeriods.filter((p) => p !== period)
      : [...selectedPeriods, period];
    setSelectedPeriods(updatedPeriods);
    setShowGenerateButton(updatedPeriods.length > 0);
  };

  const handleGenerateReport = () => {
    navigate("/report-page", {
      state: {
        category: activeCategory,
        subjects: activeSubjects, // Pass the selected subjects
        periods: selectedPeriods,
      },
    });
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: isCollapsed ? "60px" : "250px",
          bgcolor: "primary.main",
          color: "white",
          display: "flex",
          flexDirection: "column",
          p: 2,
          transition: "width 0.3s",
          position: "relative",
        }}
      >
        {/* Toggle Button */}
        <IconButton
          sx={{
            position: "absolute",
            top: "10px",
            right: isCollapsed ? "-40px" : "-10px",
            bgcolor: "secondary.main",
            color: "white",
            borderRadius: "8px",
            boxShadow: 3,
            "&:hover": {
              bgcolor: "secondary.dark", // Darker color on hover
            },
          }}
          onClick={toggleSidebar}
        >
          <MenuIcon />
        </IconButton>

        {/* User Name */}
        {!isCollapsed && (
          <>
            <Typography variant="h6" gutterBottom>
              Austin Touchet
            </Typography>
            <Divider sx={{ mb: 2 }} />
          </>
        )}

        {/* Dynamic Navigation Items */}
        <List>
          {/* Reports Section */}
          {!isCollapsed && (
            <ListItem>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                onClick={toggleReportsSubsection}
                sx={{
                  justifyContent: "flex-start",
                  borderRadius: "8px",
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "secondary.dark", // Darker shade on hover
                  },
                }}
              >
                Reports
              </Button>
            </ListItem>
          )}

          {/* Reports Subsection */}
          {showReportsSubsection && !isCollapsed && (
            <>
              {/* ACT and LEAP Buttons */}
              <ListItem>
                <Button
                  fullWidth
                  variant={activeCategory === "ACT" ? "contained" : "outlined"}
                  color="secondary"
                  onClick={() => handleCategoryClick("ACT")}
                  sx={{
                    borderRadius: "8px",
                    textTransform: "none",
                    "&:hover": {
                      bgcolor: activeCategory === "ACT" ? "secondary.dark" : "secondary.light",
                    },
                  }}
                >
                  ACT
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  fullWidth
                  variant={activeCategory === "LEAP" ? "contained" : "outlined"}
                  color="secondary"
                  onClick={() => handleCategoryClick("LEAP")}
                  sx={{
                    borderRadius: "8px",
                    textTransform: "none",
                    "&:hover": {
                      bgcolor: activeCategory === "LEAP" ? "secondary.dark" : "secondary.light",
                    },
                  }}
                >
                  LEAP
                </Button>
              </ListItem>

              {/* Subject Buttons */}
              {activeCategory && (
                <>
                  {["Math", "English", "Reading", "Science"].map((subject) => (
                    <ListItem key={subject}>
                      <Button
                        fullWidth
                        variant={
                          activeSubjects.includes(subject)
                            ? "contained"
                            : "outlined"
                        }
                        color="secondary"
                        onClick={() => handleSubjectClick(subject)}
                        sx={{
                          borderRadius: "8px",
                          textTransform: "none",
                          "&:hover": {
                            bgcolor: activeSubjects.includes(subject)
                              ? "secondary.dark"
                              : "secondary.light",
                          },
                        }}
                      >
                        {subject}
                      </Button>
                    </ListItem>
                  ))}
                </>
              )}

              {/* Period Checkboxes */}
              {activeSubjects.length > 0 && (
                <Box
                  sx={{
                    bgcolor: "background.paper", // Use the theme's paper background
                    border: "1px solid",
                    borderColor: "divider", // Optional border color
                    borderRadius: "8px", // Rounded corners
                    p: 2, // Padding inside the box
                    mt: 2, // Margin on top for spacing
                    boxShadow: 1, // Subtle shadow for depth
                  }}
                >
                  <Typography variant="subtitle1" sx={{ mb: 2 }} color="text.primary">
                    Select Periods
                  </Typography>
                  {[
                    "1st Period",
                    "2nd Period",
                    "3rd Period",
                    "4th Period",
                    "5th Period",
                    "6th Period",
                    "7th Period",
                  ].map((period) => (
                    <ListItem
                      key={period}
                      sx={{ display: "flex", alignItems: "center", gap: 1, p: 0 }}
                    >
                      <Checkbox
                        checked={selectedPeriods.includes(period)}
                        onChange={() => handlePeriodCheckbox(period)}
                        color="secondary"
                        sx={{
                          "&.Mui-checked": {
                            color: "secondary.main",
                          },
                        }}
                      />
                      <Typography variant="body2" color="text.primary">
                        {period}
                      </Typography>
                    </ListItem>
                  ))}
                </Box>
              )}

              {/* Generate Report Button */}
              {showGenerateButton && (
                <ListItem>
                  <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    onClick={handleGenerateReport}
                    sx={{
                      borderRadius: "8px",
                      textTransform: "none",
                      "&:hover": {
                        bgcolor: "primary.dark", // Darker primary color
                      },
                    }}
                  >
                    Generate Report
                  </Button>
                </ListItem>
              )}
            </>
          )}

          {/* Recommended Prompts Section */}
          {!isCollapsed && (
            <ListItem>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                sx={{
                  justifyContent: "flex-start",
                  borderRadius: "8px",
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "secondary.dark", // Darker color on hover
                  },
                }}
              >
                Recommended Prompts
              </Button>
            </ListItem>
          )}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
