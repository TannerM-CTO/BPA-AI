import React, { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Select,
  MenuItem,
} from "@mui/material";
import { mockSubjects } from "../mock/mockSubjects";
import { mockStudents } from "../mock/mockStudents";

const SubcategoryReports: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<string>("Math");

  const handleSubjectChange = (event: SelectChangeEvent<string>) => {
    setSelectedSubject(event.target.value);
  };  

  // Calculate subcategory performance metrics
  const subcategoryMetrics = mockStudents
    .filter((student) =>
      student.leapScores.some((score) => score.subject === selectedSubject)
    )
    .flatMap((student) => student.subcategories)
    .reduce(
      (acc, subcategory) => {
        acc[subcategory.name][subcategory.performance]++;
        acc[subcategory.name].total++;
        return acc;
      },
      {} as Record<
        string,
        { Strong: number; Moderate: number; Weak: number; total: number }
      >
    );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Subcategory Performance Report
      </Typography>

      {/* Subject Selector */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6">Select Subject:</Typography>
        <Select
          value={selectedSubject}
          onChange={handleSubjectChange}
          displayEmpty
          fullWidth
        >
          {mockSubjects.map((subject) => (
            <MenuItem key={subject.id} value={subject.name}>
              {subject.name}
            </MenuItem>
          ))}
        </Select>
      </Box>

      {/* Subcategory Table */}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Subcategory</TableCell>
            <TableCell>Strong (%)</TableCell>
            <TableCell>Moderate (%)</TableCell>
            <TableCell>Weak (%)</TableCell>
            <TableCell>Total Students</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(subcategoryMetrics).map(([subcategory, data]) => (
            <TableRow key={subcategory}>
              <TableCell>{subcategory}</TableCell>
              <TableCell>
                {((data.Strong / data.total) * 100).toFixed(1)}%
              </TableCell>
              <TableCell>
                {((data.Moderate / data.total) * 100).toFixed(1)}%
              </TableCell>
              <TableCell>
                {((data.Weak / data.total) * 100).toFixed(1)}%
              </TableCell>
              <TableCell>{data.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default SubcategoryReports;
