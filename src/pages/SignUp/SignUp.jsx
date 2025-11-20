import { Container, Box, Button, Typography, Link } from "@mui/material";
import Image from "../../assets/Images/Electrical_Help.webp";
// import "./SignUp.css"
const SignUp = () => {
    return (
        <>
            <Container maxWidth="full" sx={{
                width: { xs: "100%", sm: "100%", md: "100%", lg: '100%', xl: '100%' }, height: {
                    xs: "auto", sm: "100vh", md: "130vh", lg: '130vh'},
                alignItems: "center",
                justifyContent: "center",
                padding: { xs: "auto", sm: "16%", md: "60px" },
                backgroundImage: `url(${Image})`,
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
            }}>
                <Box sx={{ height: 'auto', width: '550px', background: 'white', margin: "auto", 
                    padding: "40px 105px", borderRadius: "7px" }}>
                    <Typography variant="h2" sx={{ color: "var(--primary-color)", textAlign: 'center', fontSize: { xs: '50px', md: '70px', sm: '60px' } }}>
                        taskrabbit
                    </Typography>
                    <Box sx={{ height: 'auto', width: '100%' }}>
                        <input className="input" type="text" placeholder="First Name" />
                    </Box>
                    <Box sx={{ height: 'auto', width: '100%' }}>
                        <input className="input1" type="text" placeholder="Last Name" />
                    </Box>
                    <Box sx={{ height: 'auto', width: '100%' }}>
                        <input className="input1" type="text" placeholder="Email Address" />
                    </Box>
                    <Box sx={{ height: 'auto', width: '100%' }}>
                        <input className="input1" type="text" placeholder="Password" />
                    </Box>
                    <Box sx={{ height: 'auto', width: '100%' }}>
                        <input className="input1" type="text" placeholder="Zip Code" />
                    </Box>
                    
                    <Box sx={{ height: '60px', marginTop: '20px', width: '350px'}}>
                        <Typography sx={{ color: "#3f3e3eff", fontWeight: "600", fontSize: '14px',lineHeight:"18px"  }}>
                            <input type="checkbox" />
                            &nbsp;&nbsp;I agree to the<a href="#" className="target" >Terms and Conditions</a> and have reviewed the<a href="#" className="target">Privacy Policy.</a></Typography>
                    </Box>
                    <Button sx={{
                        height: '40px', background: '#919493ff', color: 'white', fontWeight: "600", width: '350px',
                        borderRadius: "30px", marginTop: '5px'
                    }}>Create Account
                    </Button>
                </Box>
            </Container>
        </>
    )
}

export default SignUp