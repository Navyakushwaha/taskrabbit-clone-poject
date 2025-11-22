import { Typography, Container, Box, IconButton, InputAdornment, TextField } from "@mui/material";
import Image1 from "../../assets/Images/download.svg";
import Image2 from "../../assets/Images/download (1).svg";
import Image3 from "../../assets/Images/download (2).svg";
import Image4 from "../../assets/Images/download (3).svg";
import Image5 from "../../assets/Images/eligibility.svg";
import Image6 from "../../assets/Images/profile.svg";
import './Started.css'
const Started = () => {
    return (
        <>
            <Container maxWidth="full" sx={{ height: "auto", width: "100%" }}>
                <Box class="max_width">
                    <Typography variant="h4" sx={{ pt: '0px', fontWeight: '600', color: 'var(--forth-color)', textAlign: "center" }}>Getting Started</Typography>

                    <Box sx={{ height: { xs: 'auto', sm: 'auto', md: 'auto' }, display: 'flex', gap: '15px', flexWrap: 'wrap' }}>

                        <Box sx={{ width: { xs: '100%', sm: '40%', md: '35%' }, py: '20px', px: '15px' }}>
                            <Box sx={{ height: "90px", width: "70px", padding: "10px" }}><img className='icon-img' src={Image1} /></Box>
                            <Typography variant="h5" sx={{ fontWeight: '600', color: 'var(--forth-color)' }} >
                                1. Sign up</Typography>
                            <Typography variant="h6" sx={{ my: '10px', color: 'var(--forth-color)', fontSize: "18px" }}>Create your account. Then download the Tasker app to continue registration.</Typography>
                        </Box>

                        <Box sx={{ width: { xs: '100%', sm: '50%', md: '30%' }, py: '20px', px: '15px', color: 'var(--seven-color)' }}>
                            <Box sx={{ height: "90px", width: "100px", padding: "10px" }}><img className='icon-img' src={Image2} /></Box>
                            <Typography variant="h5" sx={{ fontWeight: '600', color: 'var(--forth-color)' }} >2. Build your profile</Typography>
                            <Typography variant="h6" sx={{ my: '10px', fontSize: "18px", color: 'var(--forth-color)' }}>Select what services you want to offer and where.</Typography>
                        </Box>

                        <Box sx={{ width: { xs: '100%', sm: '40%', md: '30%' }, py: '20px', px: '15px', color: 'var(--seven-color)' }}>
                            <Box sx={{ height: "90px", width: "70px", padding: "10px" }}><img className='icon-img' src={Image3} /></Box>
                            <Typography variant="h5" sx={{ fontWeight: '600', color: 'var(--forth-color)' }} >3. Verify your eligibility to task</Typography>
                            <Typography variant="h6" sx={{ my: '10px', fontSize: "18px", color: 'var(--forth-color)' }}>Confirm your identity and submit business verifications, as required.</Typography>
                        </Box>

                        <Box sx={{ width: { xs: '100%', sm: '40%', md: '35%' }, py: '20px', px: '15px' }}>
                            <Box sx={{ height: "90px", width: "70px", padding: "10px" }}><img className='icon-img' src={Image4} /></Box>
                            <Typography variant="h5" sx={{ fontWeight: '600', color: 'var(--forth-color)' }} >
                                4. Pay registration fee</Typography>
                            <Typography variant="h6" sx={{ my: '10px', color: 'var(--forth-color)', fontSize: "18px" }}>In applicable cities, we charge a $25 registration fee that helps us provide the best service to you.</Typography>
                        </Box>

                        <Box sx={{ width: { xs: '100%', sm: '50%', md: '30%' }, py: '20px', px: '15px', color: 'var(--seven-color)' }}>
                            <Box sx={{ height: "90px", width: "100px", padding: "10px" }}><img className='icon-img' src={Image5} /></Box>
                            <Typography variant="h5" sx={{ fontWeight: '600', color: 'var(--forth-color)' }} >5. Set your schedule and work area</Typography>
                            <Typography variant="h6" sx={{ my: '10px', fontSize: "18px", color: 'var(--forth-color)' }}>Set your weekly availability and opt in to receive same-day jobs.</Typography>
                        </Box>

                        <Box sx={{ width: { xs: '100%', sm: '40%', md: '30%' }, py: '20px', px: '15px', color: 'var(--seven-color)' }}>
                            <Box sx={{ height: "90px", width: "70px", padding: "10px" }}><img className='icon-img' src={Image6} /></Box>
                            <Typography variant="h5" sx={{ fontWeight: '600', color: 'var(--forth-color)' }} >6. Start getting jobs</Typography>
                            <Typography variant="h6" sx={{ my: '10px', fontSize: "18px", color: 'var(--forth-color)' }}>Grow your business on your own terms.</Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </>
    )
}
export default Started;