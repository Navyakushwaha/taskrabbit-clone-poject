import { Typography, Container, Box,Button } from "@mui/material";
import DrawOutlinedIcon from '@mui/icons-material/DrawOutlined';
import './TaskForm.css'
const TaskForm = () => {
    return (
        <>
            <Container maxWidth="full" sx={{marginY:"10px"}}>
                <Box sx={{height:"auto",borderBottom:"1px solid gray",marginY:"10px"}}>
                    <Typography sx={{margin:"auto",width:{xs:"80%",sm:"60%",md:"40%"},color:"var(--forth-color)",fontWeight:"500" }}><DrawOutlinedIcon/>&nbsp;Tell us about your task. We use these details to show Taskers in your area who fit your needs.</Typography>
                </Box>
                <Box sx={{background:"#fff"}}>
                    <Typography variant="h5" sx={{fontWeight:"600",margin:"20px",color:"var(--forth-color)"}}>Furniture Assembly</Typography>
                    <Box sx={{border:"1px solid gray",margin:"5px",borderRadius:"10px",padding:"20px",boxShadow:'0px 4px 8px rgba(0, 0, 0, 0.2)'}}>
                        <Typography sx={{color:"var(--forth-color)",fontSize:"20px",fontWeight:"600",padding:"10px"}}>
                            Your Task Location</Typography>
                        <Box>
                            <input className="input-sty" type="text" placeholder="Street address"/>
                        </Box>
                        <Box>
                            <input className="input-sty" type="text" placeholder="unit or apt #"/>
                        </Box>
                        <Box sx={{width:"100%",marginTop:"30px"}}>
                            <Box sx={{textAlign:"center"}}>
                                <Button sx={{border:"1px solid gray",background:"#1b9658ff",color:"white",padding:"12px 17px", borderRadius:"25px",fontWeight:"600"}}>continue</Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{border:"1px solid gray",margin:"10px" ,borderRadius:"10px",padding:"20px",boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'}}>
                        <Typography sx={{color:"var(--forth-color)", fontWeight:"600" ,fontSize:"20px"}}> 
                            Your Itemes
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default TaskForm