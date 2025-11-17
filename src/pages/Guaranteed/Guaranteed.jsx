import {Typography, Container, Box, IconButton, InputAdornment, TextField } from "@mui/material";
import { CiBookmarkCheck } from "react-icons/ci";
import './Guaranteed.css'
function Guaranteed()
{
    return(
        <>
        <Container maxWidth="full" sx={{mt:'50px',background:'#f2faf7ff'}} >
            <Box class="max_width">
                <Typography variant="h4" sx={{pt:'30px',fontWeight:'600',color:'var(--seven-color)'}}>Your satisfaction, <span className="gray">guaranteed</span></Typography>
                <Box sx={{height:{xs:'auto',sm:'80vh',md:'40vh'},display:'flex',gap:'15px',flexWrap:'wrap'}}>
                    <Box sx={{width:{xs:'100%',sm:'40%',md:'35%'},py:'20px' ,px:'15px'}}>
                        <Typography variant="h5" sx={{fontWeight:'600',color:'var(--seven-color)'}} >Happiness Pledge</Typography>
                        <Typography variant="h6" sx={{my:'10px',color:'var(--seven-color)'}}>If you’re not satisfied, <u>we’ll work to make it right.</u></Typography>
                        <Typography variant="h6" sx={{my:'10px'}}>
                            <a className="anchor" href="#">< CiBookmarkCheck/>Happiness pledge</a>
                        </Typography>
                    </Box>
                    <Box sx={{width:{xs:'100%',sm:'50%',md:'30%'},py:'20px' ,px:'15px',color:'var(--seven-color)'}}>
                        <Typography variant="h5" sx={{fontWeight:'600'}} >Vetted Taskers</Typography>
                        <Typography variant="h6" sx={{my:'10px'}}>Taskers are always background checked before joining the platform.</Typography>
                    </Box>
                    <Box sx={{width:{xs:'100%',sm:'40%',md:'30%'},py:'20px' ,px:'15px',color:'var(--seven-color)'}}>
                        <Typography variant="h5" sx={{fontWeight:'600'}} >Dedicated Support</Typography>
                        <Typography variant="h6" sx={{my:'10px'}}>Friendly service when you need us – every day of the week.</Typography>
                    </Box>
                </Box>
            </Box>
        </Container>
        </>
    )
}

export default Guaranteed;