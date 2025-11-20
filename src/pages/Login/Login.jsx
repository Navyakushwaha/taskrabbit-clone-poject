import { Container, Box, Button, Typography, Link } from "@mui/material";
import Image from "../../assets/Images/Electrical_Help.webp";
import './Login.css'
const Login = () => {
    return (
        <>
            <Container maxWidth="full" sx={{
                width: { xs: "100%", sm: "100%", md: "100%", lg: '100%', xl: '100%' }, height: {
                    xs: "auto", sm: "60vh", md: "100vh", lg: '100vh'
                },
                alignItems: "center",
                justifyContent: "center",
                padding: { xs: "60%", sm: "60%", md: "60px" },
                backgroundImage: `url(${Image})`,
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
            }}>
                <Box sx={{ height: 'auto', width: '500px', background: 'white', margin: "auto",padding:"20px 75px",borderRadius:"7px" }}>
                    <Typography variant="h2" sx={{ color: "var(--primary-color)", textAlign: 'center', fontSize: { xs: '50px', md: '70px', sm: '60px' } }}>
                        taskrabbit
                    </Typography>
                    <Box sx={{ height: 'auto', width: '100%' }}>
                        <input className="input" type="text" placeholder="Email Address" />
                    </Box>
                    <Box sx={{ height: 'auto', width: '100%' }}>
                        <input className="input1" type="text" placeholder="Password" />
                    </Box>
                    <Typography sx={{marginTop:'10px',}}><a className="link" href="#">Forgot Password?</a></Typography>
                    <Button sx={{height:'40px', background: '#558f87ff',color:'white',fontWeight:"600",width:'350px',
                        borderRadius:"30px",marginTop:'20px', "&:hover": { background: "var(--primary-color)" }}}>Log in</Button>
                    
                    <Box sx={{height:'100px',marginTop:'40px',width:'350px'}}>
                        <Typography sx={{fontSize:'14px',color:"gray",textAlign:"center"}}>
                            Did you purchase an assembly from IKEA or sign up
                            via Facebook or Google? <br/><a className="link" href="#">Create Password</a>
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </>
    )
}
export default Login