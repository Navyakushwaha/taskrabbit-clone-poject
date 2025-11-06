import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container,Box} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./Footer.css"
function Footer()
{
    return(
        <>
        <Container  maxWidth='full'  sx={{maxHeight:'1000px',background:"#808488ff",borderBottom:"1px solid #000",padding:'10px 18px'}}>
           <Box class="max_width">
            <Box sx={{width:'100%'}}>
                <Typography variant="h6" sx={{color:'#bebabaff'}}>Follow us! We're friendly: 
                    {/* <a href="#"><LinkedInIcon/></a>
                    <a href="#"><FacebookIcon/></a>
                    <a href="#"><InstagramIcon/></a> */}
                </Typography>
            </Box>
            <Box sx={{width:'100%',display:'flex'}}>
                <Box sx={{height:'100%',width:'32%',textAlign:'start'}}>
                    <Typography variant="h6" sx={{color:'#bebabaff'}}>
                          Discover
                    </Typography>
                    <Typography variant="h6">
                        <a className="footer_txt" href="#">Become a Tasker</a>
                    </Typography>
                    <Typography variant="h6">
                        <a className="footer_txt" href="#">Services By City</a>
                    </Typography>
                    <Typography variant="h6">
                        <a className="footer_txt" href="#">Services Nearby</a>
                    </Typography>
                    <Typography variant="h6">
                        <a className="footer_txt" href="#">Elite Tasker</a>
                    </Typography>
                    <Typography variant="h6">
                        <a className="footer_txt" href="#">Help</a>
                    </Typography>
                    
                </Box>
                <Box sx={{height:'100%',width:'32%',textAlign:'start'}}>
                    <Typography variant="h6" sx={{color:'#bebabaff'}}>
                          Company
                    </Typography>
                    <Typography variant="h6">
                        <a className="footer_txt" href="#">About Us</a>
                    </Typography>
                    <Typography variant="h6">
                        <a className="footer_txt" href="#">Careers</a>
                    </Typography>
                    <Typography variant="h6">
                        <a className="footer_txt" href="#">Partner with Taskrabbit</a>
                    </Typography>
                    <Typography variant="h6">
                        <a className="footer_txt" href="#">Press</a>
                    </Typography>
                    <Typography variant="h6">
                        <a className="footer_txt" href="#">Taskrabbit for Good</a>
                    </Typography>
                    <Typography variant="h6">
                        <a className="footer_txt" href="#">Blog</a>
                    </Typography>
                    <Typography variant="h6">
                        <a className="footer_txt" href="#">Terms & Privacy</a>
                    </Typography>
                    <Typography variant="h6">
                        <a className="footer_txt" href="#">California Consumer Notice</a>
                    </Typography>
                    <Typography variant="h6">
                        <a className="footer_txt" href="#">Do Not Sell Personal </a>
                    </Typography>
                    <Typography variant="h6">
                        <a className="footer_txt" href="#">Legal</a>
                    </Typography>
                </Box>
                <Box sx={{height:'100%',width:'32%',textAlign:'start'}}>
                    <Typography variant="h6" sx={{color:'#bebabaff'}}>
                          Download our app
                    </Typography>
                    <Typography variant="h6">
                        <a className="footer_txt" href="#">Tackle your to-do list wherever you are with our mobile app.</a>
                    </Typography>
                    <Box sx={{mt:'10px',textAlign:'center'}}>
                        <a href="#"><img className="f_img" src="https://www.taskrabbit.com/_next/static/media/download-ios.6f846953.svg"/></a>
                    </Box>
                    <Box sx={{mt:'10px',textAlign:'center'}}>
                        <a href="#"><img className="f_img2" src="https://www.taskrabbit.com/_next/static/media/google-play.e0aec133.svg"/></a>
                    </Box>
                </Box>
            </Box>
           </Box>
        </Container>
        </>
    )
}
export default Footer;