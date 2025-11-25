import { Container, Box, Button, Typography, Link } from "@mui/material";
import Image from "../../assets/Images/Electrical_Help.webp";
import ClearIcon from '@mui/icons-material/Clear';
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
                    padding: { xs: "0%", sm: "60%", md: "60%" },
                    backgroundImage: `url(${ImageForm})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed",
                    
                }
            }} >

                <Box sx={{ height: { xs: '90vh', md: "90vh", sm: '70vh', lg: '90vh' }, width: { xs: '100%', md: '50%', sm: '70%' }, padding:{xs:"0%",sm: '150px 55px',md: '150px 55px'}, margin: 'auto', }}>
                    <Box sx={{ height: { xs: '50vh', md: "60vh", sm: '70vh', lg: '60vh' }, background: "#fff", width: '100%', borderRadius: '10px', padding: {xs:'0px 0px',sm:'25px 10px',md:'25px 10px'},boxShadow:"5px 5px 10px 2px rgba(0, 0, 0, 0.5)" }}>
                       <Box sx={{width:"20%"}}>&nbsp;<a className="cross" href="/"><ClearIcon/></a></Box>
                        <Box sx={{ height: '25%', marginTop: "0px",display:"flex" }}>
                            <Box sx={{width:"100%"}}>
                                <Typography variant="h2" sx={{ color: "var(--primary-color)", textAlign: 'center', fontSize: { xs: '44px', md: '70px', sm: '60px' } }}>
                               HelperHub
                            </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ height: '70%', padding: { xs: '0px', md: '10px', sm: '0px' }, marginTop: { md: '15px', sm: '10px' } }}>
                            <Box sx={{ height: {md: '20%', sm: '20%' }, textAlign: 'center' }}>
                                <Button sx={{
                                    background: 'var(--primary-color)', width: '70%', fontSize: '14px', fontWeight: '600',
                                    borderRadius: '30px', color: 'white', padding: '0px',
                                    "&:hover": { background: "#fff"},border:"1px solid var(--primary-color)"
                                }}>
                                    <a href="/signup" className="target2">Sign up</a></Button>
                            </Box>
                            <Box sx={{ height: {md: '20%', sm: '20%' }, textAlign: 'center', marginTop: '20px' }}>
                                <Button sx={{
                                    background: '#fff', width: '70%', fontSize: '14px', fontWeight: '600', borderRadius: '30px', color: 'white', border: "1px solid var(--primary-color)", padding: '0px', marginTop: '0px',
                                    "&:hover": { background: "var(--primary-color)"}, textDecoration: 'none'
                                }}><a className="target1" href="/login">Log in</a></Button>
                            </Box>
                            <Box sx={{ height: '50%', textAlign: 'center', marginTop: '30px' }}>
                                <Typography sx={{ color: "#111010ff", fontWeight: "500", fontSize: '16px',lineHeight:{xs:"18px" }}}>By signing up you agree to our<a href="#" className="target" >Terms of Use</a> and <a href="#" className="target">Privacy Policy.</a></Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>

            </Container >
        </>
    )
}
export default Form;