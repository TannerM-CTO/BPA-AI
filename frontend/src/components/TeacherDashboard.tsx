import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Collapse,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { mockStudents } from "../mock/mockStudents"; // Import mock students
import { mockSubjects } from "../mock/mockSubjects"; // Import mock subjects
import { Student } from "../student-data.types"; // Import TypeScript interfaces

const TeacherDashboard: React.FC = () => {
  const [expandedRows, setExpandedRows] = useState<number[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<string>("Math");

  // Toggle the row expansion
  const toggleRow = (studentId: number) => {
    setExpandedRows((prev) =>
      prev.includes(studentId) ? prev.filter((id) => id !== studentId) : [...prev, studentId]
    );
  };

  // Handle subject selection change
  const handleSubjectChange = (event: SelectChangeEvent<string>) => {
    setSelectedSubject(event.target.value);
  };

  return (
    <Box sx={{ p: 3 }}>
        {/* Dynamic Page Title */}
      <Helmet>
        <title>Bright Path Analytics - Teacher Dashboard</title>
      </Helmet>

      <Typography variant="h4" gutterBottom>
        Teacher Dashboard
      </Typography>

      {/* Subject Selector */}
      <Box sx={{ mt: 2, mb: 4 }}>
        <Typography variant="h6">Select Subject:</Typography>
        <Select
          value={selectedSubject}
          onChange={handleSubjectChange}
          displayEmpty
          fullWidth
          sx={{ mt: 1 }}
        >
          {mockSubjects.map((subject) => (
            <MenuItem key={subject.id} value={subject.name}>
              {subject.name}
            </MenuItem>
          ))}
        </Select>
      </Box>

      {/* Class Roster Table */}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell>Grade Level</TableCell>
            <TableCell>LEAP Score</TableCell>
            <TableCell>Achievement Level</TableCell>
            <TableCell>Points to Next Band</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mockStudents
            .filter((student) =>
              student.leapScores.some((score) => score.subject === selectedSubject)
            )
            .map((student: Student) => (
              <React.Fragment key={student.id}>
                <TableRow>
                  <TableCell>
                    <IconButton onClick={() => toggleRow(student.id)}>
                      {expandedRows.includes(student.id) ? <ExpandLess /> : <ExpandMore />}
                    </IconButton>
                  </TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.gradeLevel}</TableCell>
                  <TableCell>
                    {
                      student.leapScores.find(
                        (score) => score.subject === selectedSubject
                      )?.score
                    }
                  </TableCell>
                  <TableCell>
                    {
                      student.leapScores.find(
                        (score) => score.subject === selectedSubject
                      )?.tag
                    }
                  </TableCell>
                  <TableCell>
                    {
                      student.leapScores.find(
                        (score) => score.subject === selectedSubject
                      )?.pointsToNextBand
                    }
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={6} style={{ paddingBottom: 0, paddingTop: 0 }}>
                    <Collapse
                      in={expandedRows.includes(student.id)}
                      timeout="auto"
                      unmountOnExit
                    >
                      <Box sx={{ margin: 1 }}>
                        <Typography variant="h6">Subcategories</Typography>
                        <Table size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell>Subcategory</TableCell>
                              <TableCell>Performance</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {student.subcategories.map((subcat) => (
                              <TableRow key={subcat.name}>
                                <TableCell>{subcat.name}</TableCell>
                                <TableCell>{subcat.performance}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default TeacherDashboard;
