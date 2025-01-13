import React from "react";
import { Box, Typography, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

const ReportTable: React.FC = () => {
  const mockData = [
    { name: "John Doe", period: "First Period", math: 30, english: 28 },
    { name: "Jane Smith", period: "First Period", math: 32, english: 29 },
    { name: "Alice Johnson", period: "Second Period", math: 25, english: 27 },
  ];

  const averages = {
    math: (30 + 32 + 25) / 3,
    english: (28 + 29 + 27) / 3,
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Generated Report
      </Typography>
      {["First Period", "Second Period"].map((period) => (
        <Box key={period} sx={{ marginBottom: 4 }}>
          <Typography variant="h6">{period}</Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Math</TableCell>
                <TableCell>English</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockData
                .filter((student) => student.period === period)
                .map((student) => (
                  <TableRow key={student.name}>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.math}</TableCell>
                    <TableCell>{student.english}</TableCell>
                  </TableRow>
                ))}
              {/* Average Row */}
              <TableRow>
                <TableCell>
                  <strong>Average</strong>
                </TableCell>
                <TableCell>{averages.math.toFixed(2)}</TableCell>
                <TableCell>{averages.english.toFixed(2)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      ))}
    </Box>
  );
};

export default ReportTable;
