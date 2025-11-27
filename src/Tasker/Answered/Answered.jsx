import './Answered.css'
import {Typography, Container, Box } from "@mui/material";
const Answered=()=>{
    return(
        <>
         <Container maxWidth="full" sx={{background:'#fff',height:"auto",textAlign:"center",paddingY:"30px"}}>
               <Typography variant='h3' sx={{fontWeight:"600",color:"var(--forth-color)"}}>Your questions, answered</Typography>
               <Box sx={{height:{xs:"auto",sm:"auto",md:"350px"},display:"flex",width:"100%",marginTop:"25px",gap:{xs:"20px",sm:"20px",md:"50px"},flexWrap:"wrap"}}>
                  <Box sx={{width:{xs:"100%",sm:"100%",md:"48%"},textAlign:"start"}}>
                     <Box sx={{height:"40px",borderBottom:"1px solid #2e8370",marginTop:"25px"}}><a className='anchor-txt' href="#">What's required to become a Tasker ?</a></Box>
                     <Box sx={{height:"40px",borderBottom:"1px solid #2e8370",marginTop:"25px"}}><a className='anchor-txt'   href='#'>How do I get Jobs?</a></Box>
                     <Box sx={{height:"40px",borderBottom:"1px solid #2e8370" ,marginTop:"25px"}}><a className='anchor-txt'  href="#">Where does TaskRabbit operate?</a></Box>
                     <Box sx={{height:"40px",borderBottom:"1px solid #2e8370",marginTop:"25px"}}><a className='anchor-txt'  href="#">How long does it takes for my registration to be processed?</a></Box>
                  </Box>

                  <Box sx={{width:{xs:"100%",sm:"100%",md:"48%"},textAlign:"start"}}>
                     <Box sx={{height:"40px",borderBottom:"1px solid #2e8370",marginTop:{xs:"0%",sm:"0%",md:"25px"}}}><a className='anchor-txt' href="#">Do I need experience to task?</a></Box>
                     <Box sx={{height:"40px",borderBottom:"1px solid #2e8370",marginTop:"25px"}}><a className='anchor-txt'   href='#'>How do I get paid?</a></Box>
                     <Box sx={{height:"40px",borderBottom:"1px solid #2e8370" ,marginTop:"25px"}}><a className='anchor-txt'  href="#">What categories can I task in on HelperHub?</a></Box>
                  </Box>
               </Box>
         </Container>
        </>
    )
}
export default Answered