import './FingerTips'
import {Typography, Container, Box, IconButton, InputAdornment, TextField } from "@mui/material";
import { CiBookmarkCheck } from "react-icons/ci";
import Image1 from "../../assets/Images/download.svg";
import Image2 from "../../assets/Images/download (1).svg";
import Image3 from "../../assets/Images/download (2).svg";
const FingerTips=()=>{
    return(
        <>
        <Container maxWidth="full" sx={{mt:'50px',background:'#fff',height:"auto",paddingY:"25px"}} >
            <Box class="max_width">
                <Typography variant="h4" sx={{pt:'0px',fontWeight:'600',color:'var(--forth-color)',textAlign:"center"}}>Flexible work, at your fingertips</Typography>

                <Typography sx={{pt:'10px',fontWeight:'500',fontSize:"18px",color:'var(--forth-color)',textAlign:"center",width:"50%",margin:"auto"}}>Find local jobs that fit your skills and schedule. With TaskRabbit, you have the freedom and support to be your own boss</Typography>
                <Box sx={{height:{xs:'auto',sm:'80vh',md:'40vh'},display:'flex',gap:'15px',flexWrap:'wrap'}}>

                    <Box sx={{width:{xs:'100%',sm:'40%',md:'35%'},py:'20px' ,px:'15px'}}>
                        <Box sx={{height:"90px",width:"70px",padding:"10px"}}><img className='icon-img' src={Image1}/></Box>
                        <Typography variant="h5" sx={{fontWeight:'600',color:'var(--forth-color)'}} >Be your own boss</Typography>
                        <Typography variant="h6" sx={{my:'10px',color:'var(--forth-color)',fontSize:"18px"}}>Work how, when, and where you want. Offer services in 50+ categories and set a flexible schedule and work area</Typography>
                    </Box>

                    <Box sx={{width:{xs:'100%',sm:'50%',md:'30%'},py:'20px' ,px:'15px',color:'var(--seven-color)'}}>
                        <Box sx={{height:"90px",width:"100px",padding:"10px"}}><img className='icon-img' src={Image2}/></Box>
                        <Typography variant="h5" sx={{fontWeight:'600',color:'var(--forth-color)'}} >Set your own rates</Typography>
                        <Typography variant="h6" sx={{my:'10px',fontSize:"18px",color:'var(--forth-color)'}}>You keep 100% of what you charge, plus tips! Invoice and get paid directly through our secure payment system.</Typography>
                    </Box>

                    <Box sx={{width:{xs:'100%',sm:'40%',md:'30%'},py:'20px' ,px:'15px',color:'var(--seven-color)'}}>
                        <Box sx={{height:"90px",width:"70px",padding:"10px"}}><img className='icon-img' src={Image3}/></Box>
                        <Typography variant="h5" sx={{fontWeight:'600',color:'var(--forth-color)'}} >Grow your business</Typography>
                        <Typography variant="h6" sx={{my:'10px',fontSize:"18px",color:'var(--forth-color)'}}>We connect you with clients in your area, and ways to market yourself — so you can focus on what you do best.</Typography>
                    </Box>
                </Box>
            </Box>
        </Container>
        </>
    )
}
 export default FingerTips