import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

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
        />
        <Button variant="contained" onClick={handleSend} sx={{ ml: 2 }}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Chatbot;
