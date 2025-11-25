import { Container, Box, Button, Typography, Link } from "@mui/material";
import Image from "../../assets/Images/form3.jpg";
import ClearIcon from '@mui/icons-material/Clear';
// import "./SignUp.css"
const SignUp = () => {
    return (
        <>
            <Container maxWidth="full" sx={{
                width: { xs: "100%", sm: "100%", md: "100%", lg: '100%', xl: '100%' }, height: {
                    xs: "100%", sm: "auto", md: "100vh", lg: '100vh'
                },
                alignItems: "center",
                justifyContent: "center",
                padding: { xs: "0px", sm: "80px", md: "40px" },
                backgroundImage: `url(${Image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                // backgroundAttachment: "fixed",
            }}>
                <Box sx={{
                    height: 'auto', width: '550px', background: 'white', margin: "auto",
                    padding: "44px 105px", borderRadius: "7px", boxShadow: "5px 5px 10px 2px rgba(0, 0, 0, 0.5)"
                }}>
                    <Box sx={{ width: "10px" }}><a className="cross" href="/"><ClearIcon /></a></Box>
                    <Typography variant="h2" sx={{ color: "var(--primary-color)", textAlign: 'center', fontSize: { xs: '50px', md: '70px', sm: '60px' } }}>
                        HelperHub
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

                    {/* <Box sx={{ height: '60px', marginTop: '20px', width: '350px'}}>
                        <Typography sx={{ color: "#3f3e3eff", fontWeight: "600", fontSize: '14px',lineHeight:"18px"  }}>
                            <input type="checkbox" />
                            &nbsp;&nbsp;I agree to the<a href="#" className="target" >Terms and Conditions</a> and have reviewed the<a href="#" className="target">Privacy Policy.</a></Typography>
                    </Box> */}
                    <Button sx={{
                        height: '40px', background: '#0c6b41', color: 'white', fontWeight: "600", width: '350px',
                        borderRadius: "30px", marginTop: '35px', "&:hover": { background: "var(--primary-color)" }
                    }}>Create Account
                    </Button>
                </Box>
            </Container>
        </>
    )
}

export default SignUp