import { Container, Box, Button, Typography } from "@mui/material";
import bannerImage from "../../assets/Images/banner.webp";
import "./Review.css"
function Review()
{
    return(
        <>
        <Container maxWidth="full" sx={{height:{xs:'150vh', md:'35vh',sm:'50vh'},background: "linear-gradient(to bottom, #fff,  #e3f3edff, #d4e9e0ff)"}}>
            <Box class="max_width">
                <Box sx={{height:{xs:'auto', md:'30vh',sm:'64vh'},display:'flex',flexWrap:'wrap',gap:'40px',padding:'45px',fontSize:'20px',fontWeight:'600',color:'#042405ff'}}>
                    <Box sx={{height:{xs:'10vh', md:'10vh',sm:'10vh'}}}>
                        <Typography variant="p">Furniture <br/> Assemblies:</Typography>
                        <Typography variant="h6" sx={{color:'#128f70ff',fontWeight:'600',fontSize:'24px'}}>3.4 million+</Typography>
                    </Box>
                    <Box sx={{height:{xs:'10vh', md:'10vh',sm:'10vh'}}}>
                        <Typography variant="p">Moving tasks:</Typography>
                        <Typography variant="h6" sx={{color:'#128f70ff',fontWeight:'600',fontSize:'24px'}}>1.4 million+</Typography>
                    </Box>
                    <Box sx={{height:{xs:'10vh', md:'10vh',sm:'10vh'}}}>
                        <Typography variant="p">Items mounted:</Typography>
                        <Typography variant="h6" sx={{color:'#128f70ff',fontWeight:'600',fontSize:'24px'}}>1 million+</Typography>
                    </Box>
                    <Box sx={{height:{xs:'10vh', md:'10vh',sm:'10vh'}}}>
                        <Typography variant="p">Home Repairs:</Typography>
                        <Typography variant="h6" sx={{color:'#128f70ff',fontWeight:'600',fontSize:'24px'}}>700,000+ million+</Typography>
                    </Box>
                    <Box sx={{height:{xs:'10vh', md:'10vh',sm:'10vh'}}}>
                        <Typography variant="p">Homes cleaned:</Typography>
                        <Typography variant="h6" sx={{color:'#128f70ff',fontWeight:'600',fontSize:'24px'}}>890,000+</Typography>
                    </Box>
                    <Box >
                        {/* <Typography variant="p">Furniture </Typography>
                        <Typography variant="h6" sx={{color:'#128f70ff',fontWeight:'600',fontSize:'24px'}}> million+</Typography> */}
                        <img className="banner_img" src={bannerImage}/>
                    </Box>
                </Box>
            </Box>
        </Container>
        </>
    )
}
export default Review;