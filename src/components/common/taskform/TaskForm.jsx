import { Typography, Container, Box } from "@mui/material";
import './TaskForm.css'
const TaskForm = () => {
    return (
        <>
            <Container>
                <Box sx={{height:"auto",borderBottom:"1px solid gray"}}>
                    <Typography sx={{margin:"auto",width:"40%" }}>Tell us about your task. We use these details to show Taskers in your area who fit your needs.</Typography>
                </Box>
                <Box>
                    <Typography variant="h5" sx={{fontWeight:"600",margin:"20px",color:"var(--forth-color)"}}>Furniture Assembly</Typography>
                    <Box sx={{border:"1px solid gray",margin:"5px",borderRadius:"10px",padding:"20px"}}>
                        <Typography variant="p" sx={{color:"var(--forth-color)",fontSize:"18px",fontWeight:"600",padding:"10px",margin:"20px"}}>
                            Your Task Location</Typography>
                        <Box>
                            <input className="input-sty" type="text" placeholder="Street address"/>
                        </Box>
                        <Box>
                            <input className="input-sty" type="text" placeholder="unit or apt #"/>
                        </Box>
                    </Box>
                    <Box sx={{border:"1px solid gray",margin:"10px" ,borderRadius:"10px"}}><h1>Hello</h1></Box>
                </Box>
            </Container>
        </>
    )
}

export default TaskForm