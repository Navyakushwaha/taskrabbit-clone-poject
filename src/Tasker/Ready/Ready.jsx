import { Typography, Container, Box,Button, InputAdornment, TextField } from "@mui/material";
import Footerimg from '../../assets/Images/footer-img.jpg'
import './Ready.css'
const Ready = () => {
    return (
        <>
            <Container maxWidth="full"
                sx={{
                    backgroundImage: "/footer-img.jog",
                    height: "auto",
                    textAlign: "center",
                    paddingY: "30px",
                    backgroundImage: `url(${Footerimg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    margin:"auto"
                }}>
                <Box sx={{ height: "300px" }}>
                    <Typography variant="h3" sx={{color:"var(--forth-color)",fontWeight:"600",marginTop:"40px"}}>Ready to make money your way?</Typography>
                    <Button sx={{background:"#287562ff", color:"white",fontWeight:"600",padding:"12px 45px",marginTop:"20px"}}>Get started</Button>
                    <Box sx={{height:"100px",width:"100%",display:"flex",marginTop:"30px"}}>
                        <Box sx={{width:"50%",textAlign:"end"}}>
                            <a href="https://play.google.com/store/apps?hl=en_IN"><img className="f-icon" src="https://www.taskrabbit.com/_next/static/media/download-ios.6f846953.svg"/></a>
                        </Box>
                        <Box sx={{width:"50%",textAlign:"start"}}>
                            <a href="https://play.google.com/store/games?hl=en"><img className="f-icon" src="https://www.taskrabbit.com/_next/static/media/google-play.e0aec133.svg"/></a>
                        </Box>   
                    </Box>
                </Box>
            </Container>
        </>
    )
}
export default Ready