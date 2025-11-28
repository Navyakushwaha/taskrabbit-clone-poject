import { Typography, Container, Box, Button } from "@mui/material";
// import TVImage from '../../../assets/Images/Mount_TV.webp';
import './Mounting.css'
const Mounting = () => {
    return (
        <>
            <Container maxWidth="full">
                <Box sx={{ display: "flex", gap: "40px", paddingY: "20px" }}>
                   <Box sx={{width:{xs:"100%",sm:"100%",md:"60%"},padding: "20px"}}>
                     <Box sx={{ width: "100%", border: "1px solid gray", borderRadius: "10px",padding: "20px", color: "var(--forth-color)",boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
                        <Typography variant="h4" sx={{ fontWeight: "600" }}>TV Mounting</Typography>
                        <Typography variant="h5" sx={{ fontWeight: "600", marginY: "10px" }}>1. Your task location*</Typography>

                        <Box sx={{padding:"10px"}}>
                            <lable className="lable">Street address</lable>
                            <input className="input-style" type="text"  />
                        </Box>
                        <Box sx={{padding:"10px"}}>
                            <lable className="lable">Unit or apt #</lable>
                            <input className="input-style" type="text" />
                        </Box>
                        <Box sx={{width:"100%",marginY:"10px"}}>
                               &nbsp; <Button sx={{border:"1px solid var(--seven-color) ",background:"#fff",color:"var(--seven-color)",padding:"15px 18pxx", borderRadius:"25px",fontWeight:"600"}}>Set Location</Button>
                        </Box>
                    </Box>

                    <Box sx={{border:"1px solid gray",marginTop:"10px" ,borderRadius:"10px",padding:"20px",boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'}}>
                        <Typography variant="h5" sx={{color:"var(--forth-color)", fontWeight:"600"}}> 
                            2. Details
                        </Typography>
                    </Box>
                   </Box>
                   
                    <Box sx={{ display:{xs:"none",sm:"none",md:"block"}, width: "40%", border: "1px solid gray",
                     borderRadius: "10px", padding: "0px",boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
                        <Box sx={{width:"100%"}}><img className="hang-image" src="/Mount_TV.webp"/></Box>
                        <Box sx={{padding:"20px",color:"var(--forth-color)",borderBottom:"1px solid gray"}}>
                            <Typography variant="h5" sx={{fontWeight:"600"}}>Details for your Tasker</Typography>
                            <Typography sx={{fontSize:"16px",fontWeight:"500",marginY:"10px"}}>Location</Typography>
                            <Typography sx={{fontSize:"16px",fontWeight:"500",marginY:"10px"}}>Numbers of TVs</Typography>
                            <Typography sx={{fontSize:"16px",fontWeight:"500",marginY:"10px"}}>Help lifting the TV</Typography>
                            <Typography sx={{fontSize:"16px",fontWeight:"500",marginY:"10px"}}>Mount type</Typography>
                            <Typography sx={{fontSize:"16px",fontWeight:"500",marginY:"10px"}}>Wall Type</Typography>
                            <Typography sx={{fontSize:"16px",fontWeight:"500",marginY:"10px"}}>Extra services</Typography>
                            <Typography sx={{fontSize:"16px",fontWeight:"500",marginY:"10px"}}>Anything else</Typography>
                        </Box>
                        <Box sx={{padding:"20px"}}>
                            <Typography variant="h5" sx={{fontWeight:"600",fontSize:"18px" ,color:"var(--forth-color)"}}>Taskrabbit Happiness Pledge</Typography>
                            <Typography variant="h6" sx={{paddingY:"10px",fontSize:"16px",color:"var(--forth-color)",fontWeight:"500"}}>
                                We’ve got your back! If you’re unhappy with the outcome of your task, we’ll work to make it right.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Mounting