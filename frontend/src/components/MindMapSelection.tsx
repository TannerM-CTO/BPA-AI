import React, { useState } from "react";
import { Box, Checkbox, Button, Typography } from "@mui/material";

const MindMapSelection: React.FC = () => {
  const [selectedACT, setSelectedACT] = useState<string[]>([]);
  const [selectedSubScores, setSelectedSubScores] = useState<string[]>([]);

  const handleACTSelection = (score: string) => {
    setSelectedACT((prev) =>
      prev.includes(score) ? prev.filter((s) => s !== score) : [...prev, score]
    );
  };

  const handleSubScoreSelection = (subScore: string) => {
    setSelectedSubScores((prev) =>
      prev.includes(subScore)
        ? prev.filter((s) => s !== subScore)
        : [...prev, subScore]
    );
  };

  return (
    <Box sx={{ padding: 2 }}>
      {/* ACT Selection */}
      <Typography variant="h6">Select ACT Categories</Typography>
      {["Math", "English", "Reading", "Science"].map((score) => (
        <Box key={score}>
          <Checkbox
            checked={selectedACT.includes(score)}
            onChange={() => handleACTSelection(score)}
          />
          {score}
        </Box>
      ))}

      {/* Subscores */}
      {selectedACT.length > 0 && (
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="h6">Select Subscores</Typography>
          {["Subscore 1", "Subscore 2", "Subscore 3"].map((subScore) => (
            <Box key={subScore}>
              <Checkbox
                checked={selectedSubScores.includes(subScore)}
                onChange={() => handleSubScoreSelection(subScore)}
              />
              {subScore}
            </Box>
          ))}
        </Box>
      )}

      {/* Generate Report */}
      {selectedSubScores.length > 0 && (
        <Button variant="contained" sx={{ marginTop: 2 }}>
          Generate Report
        </Button>
      )}
    </Box>
  );
};

export default MindMapSelection;
