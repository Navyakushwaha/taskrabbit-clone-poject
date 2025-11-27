import * as React from "react";
import { Stepper, Step, StepLabel, Box, Typography } from "@mui/material";
const Describe = () => {

    const steps = [
        "Describe Your Task",
        "Next, you’ll select a date and time",
        "Processing",
        
    ];

    const [activeStep, setActiveStep] = React.useState(0);
    return (
        <>
            <Box sx={{ width: "100%", padding: 4 }}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                <Typography align="center" sx={{ mt: 3, fontSize: "18px" }}>
                    Current Status: {steps[activeStep]}
                </Typography>
            </Box>
        </>
    )
}

export default Describe