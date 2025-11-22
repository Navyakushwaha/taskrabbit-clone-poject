import { Typography, Container, Box, IconButton, InputAdornment, TextField } from "@mui/material";
import Image from "../../assets/Images/ques.jpg";
import './Question.css'
const Question = () => {
    return (
        <>
            <Container maxWidth="full" sx={{ height: "auto", width: "100%",marginY:"40px" }}>
                <Box class="max_width">
                    <Box sx={{ height: "auto", width: "100%",display:"flex",flexWrap:"wrap",padding:"10px" }}>
                       <Box sx={{height:"100%", width:{xs:"100%",sm:"100%",md:"65%"}}}>
                        <img className="driller" src={Image}/>
                       </Box>
                       <Box sx={{width:{xs:"100%",sm:"100%",md:"33%"},padding:"40px 10px"}}>
                        <Typography variant="h4" sx={{fontWeight:"600",color:"var(--forth-color)"}}>What is TaskRabbit?</Typography>
                        <Typography sx={{paddingTop:"20px",fontSize:"19px",color:"var(--forth-color)"}}>
                            TaskRabbit connects busy people in need of help with trusted local Taskers who can lend a hand with everything from home repairs to errands. As a Tasker, you can get paid to do what you love, when and where you want — all while saving the day for someone in your city.
                        </Typography>
                       </Box>
                    </Box>
                </Box>
            </Container>
        </>
    )
}
export default Question;