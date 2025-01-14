import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

interface OverviewCardProps {
    title: string;
    value: string | number;
}

const OverviewCard: React.FC<OverviewCardProps> = ({ title, value }) => {
    return (
        <Card sx={{ minWidth: 275, margin: 1, backgroundColor: "lightblue" }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="h4" sx={{ mt: 2 }}>
                    {value}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default OverviewCard;
