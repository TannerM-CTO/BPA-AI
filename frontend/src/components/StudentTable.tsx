import React from "react";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

interface Student {
    id: number;
    name: string;
    grade: string;
}

interface StudentTableProps {
    students: Student[];
}

const StudentTable: React.FC<StudentTableProps> = ({ students }) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Grade</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {students.map((student) => (
                    <TableRow key={student.id}>
                        <TableCell>{student.id}</TableCell>
                        <TableCell>{student.name}</TableCell>
                        <TableCell>{student.grade}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default StudentTable;
