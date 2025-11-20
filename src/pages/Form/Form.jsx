import { Container, Box, Button, Typography, Link } from "@mui/material";
import Image from "../../assets/Images/Electrical_Help.webp";
import ImageForm from "../../assets/Images/form3.jpg";
import './Form.css'

const Form = () => {
    return (
        <>
            <Container maxWidth='full' sx={{
                width: { xs: "100%", sm: "100%", md: "100%", lg: '100%', xl: '100%' }, height: {
                    xs: "auto", sm: "60vh", md: "90vh", lg: '100vh',
                    alignItems: "center",
                    justifyContent: "center",
                    padding: { xs: "60%", sm: "60%", md: "60%" },
                    backgroundImage: `url(${ImageForm})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed",
                }
            }} >

                <Box sx={{ height: { xs: '50vh', md: "90vh", sm: '70vh', lg: '90vh' }, width: { xs: '50%', md: '50%', sm: '70%' }, padding: '150px 55px', margin: 'auto' }}>
                    <Box sx={{ height: { xs: '50vh', md: "55vh", sm: '50vh', lg: '55vh' }, background: "rgba(0, 0, 0, 0.58)", width: '100%', borderRadius: '10px', padding: '25px 10px' }}>
                        <Box sx={{ height: '25%', marginTop: "10px" }}>
                            <Typography variant="h2" sx={{ color: "var(--primary-color)", textAlign: 'center', fontSize: { xs: '50px', md: '70px', sm: '60px' } }}>
                                taskrabbit
                            </Typography>
                        </Box>
                        <Box sx={{ height: '70%', padding: { xs: '10px', md: '10px', sm: '0px' }, marginTop: { xs: '18px', md: '18px', sm: '10px' } }}>
                            <Box sx={{ height: { xs: '0px', md: '20%', sm: '20%' }, textAlign: 'center' }}>
                                <Button sx={{
                                    background: 'var(--primary-color)', width: '70%', fontSize: '14px', fontWeight: '600',
                                    borderRadius: '30px', color: 'white', padding: '0px',
                                    "&:hover": { background: "#558f87ff" }
                                }}>
                                    <a href="/signup" className="target1">Sign up</a></Button>
                            </Box>
                            <Box sx={{ height: { xs: '0px', md: '20%', sm: '20%' }, textAlign: 'center', marginTop: '20px' }}>
                                <Button sx={{
                                    background: '#558f87ff', width: '70%', fontSize: '14px', fontWeight: '600', borderRadius: '30px', color: 'white', border: "1px solid #558f87ff", padding: '0px', marginTop: '0px',
                                    "&:hover": { background: "var(--primary-color)" }, textDecoration: 'none'
                                }}><a className="target1" href="/login">Log in</a></Button>
                            </Box>
                            <Box sx={{ height: '50%', textAlign: 'center', marginTop: '30px' }}>
                                <Typography sx={{ color: "#fff", fontWeight: "500", fontSize: '16px' }}>By signing up you agree to our<a href="#" className="target" >Terms of Use</a> and <a href="#" className="target">Privacy Policy.</a></Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>

            </Container >
        </>
    )
}
export default Form;