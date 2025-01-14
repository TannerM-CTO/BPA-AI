import React from "react";
import { Box, Alert } from "@mui/material";

interface AlertNotificationProps {
    alerts: { severity: "info" | "warning" | "error" | "success"; message: string }[];
}

const AlertNotifications: React.FC<AlertNotificationProps> = ({ alerts }) => {
    return (
        <Box sx={{ mt: 2 }}>
            {alerts.map((alert, index) => (
                <Alert key={index} severity={alert.severity} sx={{ mb: 1 }}>
                    {alert.message}
                </Alert>
            ))}
        </Box>
    );
};

export default AlertNotifications;
