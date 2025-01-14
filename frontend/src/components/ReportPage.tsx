import React from "react";
import { useLocation } from "react-router-dom";
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
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { mockStudents } from "../mock/mockStudents"; // Import mock students
import { Student } from "../student-data.types"; // Import TypeScript interfaces

const ReportPage: React.FC = () => {
  const [expandedRows, setExpandedRows] = React.useState<number[]>([]);
  const location = useLocation();
  const { category, subject, periods } = location.state || {};

  const toggleRow = (studentId: number) => {
    setExpandedRows((prev) =>
      prev.includes(studentId) ? prev.filter((id) => id !== studentId) : [...prev, studentId]
    );
  };

  const filteredStudents = mockStudents.filter((student) =>
    student.leapScores.some((score) => score.subject === subject)
  );

  return (
    <Box sx={{ p: 3 }}>
      {/* Page Title */}
      <Typography variant="h4" gutterBottom>
        {category} Report: {subject}
      </Typography>

      {/* Periods */}
      <Typography variant="h6" sx={{ mt: 2 }}>
        Selected Periods: {periods ? periods.join(", ") : "None"}
      </Typography>

      {/* Class Roster Table */}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell>Grade Level</TableCell>
            <TableCell>{category} Score</TableCell>
            <TableCell>Achievement Level</TableCell>
            <TableCell>Points to Next Band</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredStudents.map((student: Student) => (
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
                    student.leapScores.find((score) => score.subject === subject)?.score
                  }
                </TableCell>
                <TableCell>
                  {
                    student.leapScores.find((score) => score.subject === subject)?.tag
                  }
                </TableCell>
                <TableCell>
                  {
                    student.leapScores.find((score) => score.subject === subject)?.pointsToNextBand
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

export default ReportPage;

