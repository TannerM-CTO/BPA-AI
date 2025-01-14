import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  // Function to handle sending a message
  const handleSend = () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, `You: ${input}`]);
      setInput("");
      // Simulate chatbot response
      setTimeout(() => {
        setMessages((prev) => [...prev, "Bot: This is a simulated response."]);
      }, 1000);
    }
  };

  // Function to handle keypress (Enter to send message)
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent default form submission or new line
      handleSend();
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Message History */}
      <Box sx={{ flex: 1, overflowY: "auto", mb: 2 }}>
        {messages.map((msg, idx) => (
          <Typography key={idx} variant="body1" gutterBottom>
            {msg}
          </Typography>
        ))}
      </Box>

      {/* Input Field */}
      <Box sx={{ display: "flex" }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress} // Add event handler for key press
        />
        <Button variant="contained" onClick={handleSend} sx={{ ml: 2 }}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Chatbot;
