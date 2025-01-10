import React from "react";
import Layout from "./Layout";
import { Box, Typography } from "@mui/material";
import OverviewCard from "./OverviewCard";
import AlertNotifications from "./AlertNotifications";
import StudentTable from "./StudentTable";

const TeacherDashboard: React.FC = () => {
    const alerts: { severity: "info" | "warning" | "error" | "success"; message: string }[] = [
        { severity: "info", message: "You have 3 new tasks to review!" },
        { severity: "warning", message: "5 students are flagged for attention." },
    ];
    

    const students = [
        { id: 1, name: "Alice Johnson", grade: "A" },
        { id: 2, name: "Bob Smith", grade: "B" },
    ];

    return (
        <Layout>
            <Box sx={{ p: 3 }}>
                <Typography variant="h4" gutterBottom>
                    Teacher Dashboard
                </Typography>

                {/* Overview Section */}
                <Box sx={{ display: "flex", justifyContent: "space-around", mt: 2 }}>
                    <OverviewCard title="Total Students" value={150} />
                    <OverviewCard title="Flagged Students" value={5} />
                    <OverviewCard title="Upcoming Tasks" value={3} />
                </Box>

                {/* Alerts */}
                <AlertNotifications alerts={alerts} />

                {/* Student Table */}
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h5" gutterBottom>
                        Student Insights
                    </Typography>
                    <StudentTable students={students} />
                </Box>
            </Box>
        </Layout>
    );
};

export default TeacherDashboard;