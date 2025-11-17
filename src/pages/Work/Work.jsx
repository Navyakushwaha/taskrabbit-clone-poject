import {Typography, Container, Box, IconButton, InputAdornment, TextField } from "@mui/material";
import headerImage from "../../assets/header.jpg";
import './work.css'
function Work(){
    return(
        <>
           <Container maxWidth="full" sx={{height:'auto' ,background:'#f3f3d9ff'}}>
              <Box class="max_width">
                   <Box sx={{ position: "relative", height: { xs: 'auto', sm: '80vh', md: '95vh' }, width: { xs: '100%', sm: '100%', md: '100%' }, }}>
                                  <Box sx={{
                                     height: { xs: 'auto', sm: '80vh', md: '95vh' }, width: { xs: 'auto', sm: 'auto', md: '100%' }
                                     , background:'#f3f3d9ff', borderRadius: '10px', px: { xs: '0px', md: "120px", sm: '120px' }, py: { xs: '0px', md: "60px", sm: '60px' }
                                 }}>
                                     <Box sx={{ height: { xs: '30vh', sm: '95vh', md: '95vh' } }}>
                                         <img className="img_styl" src={headerImage} />
                                     </Box>
                                 </Box>
                                 <Box sx={{
                                     height: { xs: '230px', sm: '50vh', md: '65vh' }, width: { xs: '100%', sm: '290px', md: '390px' }, background: "white", borderRadius: '10px'
                                     , p: { xs: '0px', md: "40px", sm: '20px' }, position: { xs: 'relative', md: 'absolute', sm: 'absolute' }, top: { xs: '0px', md: '100px', sm: '76px' },
                                      left: { xs: '0px', md: '40px', sm: '40px' , }
                                 }}>
                                     <Typography variant="h5" sx={{ mt: { xs: '10px', md: "15px", sm: '15px'}, fontSize:{xs:'31px',sm:'31px',md:'31px'},fontWeight:'600', color:'var(--seven-color)' }}>How it works</Typography>
                                     <Box sx={{ height: 'auto', width: '100%', mt: { xs: '10px', md: "10px", sm: '10px' }, lineHeight:{xs:'28px',sm:'20px',md:'28px'},display:'flex' }}>
                                        <Box><span className="num1">1</span></Box>
                                         <Typography variant="p" sx={{ fontSize:{xs:'16px',sm:'16px',md:'18px'},color:'var(--seven-color)',marginLeft:'15px' }}>Choose a Tasker by price, skills, and reviews.</Typography><br />
                                     </Box>
                                     <Box sx={{ height: 'auto', width: '100%', mt: { xs: '0px', md: "10px", sm: '10px' }, lineHeight: '28px',display:'flex'  }}>
                                        <Box><span className="num2">2</span></Box>
                                         <Typography variant="p" sx={{fontSize:{xs:'16px',sm:'16px',md:'20px'},color:'var(--seven-color)',marginLeft:'15px' }}>Schedule a Tasker as early as today.</Typography>
                                     </Box>
                                     <Box sx={{ height: 'auto', width: '100%', mt: { xs: '0px', md: "10px", sm: '10px' }, lineHeight: '28px',display:'flex'  }}>
                                        <Box><span className="num3">3</span></Box>
                                         <Typography variant="p" sx={{ fontSize:{xs:'16px',sm:'16px',md:'20px'},color:'var(--seven-color)' ,marginLeft:'15px' }}>Chat, pay, tip, and review all in one place.</Typography>
                                     </Box>
                                 </Box>
             
                                 
                             </Box>
              </Box>
             
           </Container>
        </>
    )
}
export default Work;