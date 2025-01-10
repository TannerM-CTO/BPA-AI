import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import logo from "../assets/logo.jpg"; // Adjust the path if necessary

function Login() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Logo Section */}
        <img
          src={logo}
          alt="Company Logo"
          style={{
            width: "512px", // Adjust the width as needed
            height: "auto",
            marginBottom: "16px", // Space below the logo
          }}
        />

        <Typography variant="subtitle1" gutterBottom>
          AI-Powered Tool for Education Planning Assistance
        </Typography>

        <Box component="form" sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2 }}
          >
            Sign In
          </Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 2,
            }}
          >
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
            <Link href="#" variant="body2">
              {"Learn more about our system"}
            </Link>
          </Box>
        </Box>
      </Box>

      <Box mt={5} textAlign="center">
        <Typography variant="body2" color="text.secondary">
          {"© 2025 Bright Path Analytics. All rights reserved."}
        </Typography>
      </Box>
    </Container>
  );
}

export default Login;
