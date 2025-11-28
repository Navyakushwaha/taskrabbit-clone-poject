import * as React from "react";
import { Stepper, Step, StepLabel, Box, Typography, Container } from "@mui/material";
import TaskForm from "../../taskform/TaskForm";
import Mounting from "../../mounting/Mounting";
import status from '../../../../Api/PopularProject.json'
import "./Describe.css";
const Describe = () => {

    const steps = [
        "Describe Your Task",
        "Next, you’ll select a date and time",
        "Processing",

    ];

    const [activeStep, setActiveStep] = React.useState(0);
    return (
        <>
            <Container maxWidth="full">
                <Typography variant="h3" sx={{ color: "var(--primary-color)", textShadow: "2px 2px 4px black", fontSize: { xs: "2rem", sm: "3rem", md: "3rem" },textAlign:"center" }}>
                    <a className="helper-icon" href="/">HelperHub</a>
                </Typography>
                <Box sx={{ width: "100%", padding: 4, borderBottom: "1px solid gray" }}>
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    <Typography align="center" sx={{ mt: 3, fontSize: "18px" }}>
                        {/* Current Status: {steps[activeStep]} */}
                    </Typography>
                </Box>
              
               {/* <Box>
                {status.map((item)=>(
                   item.state===1?<TaskForm/>:<Mounting/>
               ))}
               </Box> */}
                
                <TaskForm/>
                <Mounting/>
            </Container>
        </>
    )
}

export default Describe