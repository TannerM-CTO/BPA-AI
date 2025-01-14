import React, { useState } from "react";
import { Box, Checkbox, Button, Typography } from "@mui/material";

const MindMapSelection: React.FC = () => {
    const [selectedACT, setSelectedACT] = useState<string[]>([]);
    const [selectedSubScores, setSelectedSubScores] = useState<string[]>([]);
    const [showGenerate, setShowGenerate] = useState(false);
  
    const handleACTSelection = (score: string) => {
      const updatedACT = selectedACT.includes(score)
        ? selectedACT.filter((s) => s !== score)
        : [...selectedACT, score];
      setSelectedACT(updatedACT);
    };
  
    const handleSubScoreSelection = (subScore: string) => {
      const updatedSubScores = selectedSubScores.includes(subScore)
        ? selectedSubScores.filter((s) => s !== subScore)
        : [...selectedSubScores, subScore];
      setSelectedSubScores(updatedSubScores);
      setShowGenerate(updatedSubScores.length > 0);
    };
  
    return (
      <Box sx={{ padding: 2 }}>
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
  
        {showGenerate && (
          <Button variant="contained" sx={{ marginTop: 2 }}>
            Generate Report
          </Button>
        )}
      </Box>
    );
  };
  

export default MindMapSelection;
