import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0FA4AF", // Teal
    },
    secondary: {
      main: "#964734", // Rust
    },
    background: {
      default: "#AFDDE5", // Light Teal
      paper: "#FFFFFF", // White
    },
    text: {
      primary: "#003135", // Dark Blue-Teal
      secondary: "#024950", // Deep Teal
    },
    divider: "#024950", // Optional: Divider lines
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
    h4: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#003135", // Match primary text
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      color: "#024950", // Secondary text
    },
    button: {
      textTransform: "none", // Disable uppercase for buttons
      fontWeight: "bold",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px", // Rounded buttons
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF", // White for cards and containers
          borderRadius: "8px", // Rounded corners for cards
        },
      },
    },
  },
});

export default theme;
