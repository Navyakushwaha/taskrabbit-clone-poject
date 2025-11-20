import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container,Box} from "@mui/material";
import "./Navbar.css"
function Navbar()
{
    return(
        <>
        <Container maxWidth='full' sx={{width:{xs:"100%",sm:"100%",md:"100%",lg:'100%',xl:'100%'},height:{xs:"16vh",sm:"14vh",md:"12vh",lg:'12vh',xl:'12vh'},background:"var(--tirnery-color)",borderBottom:"1px solid var(--tirnery-color)"}}>
            <Box class="max_width">
            <Box sx={{height:{xs:"16vh",sm:"14vh",md:"12vh"}, display:'flex',width:{xs:"100%",sm:"100%",md:"100%"}}}>
                    <Box sx={{bgcolor:'var(--tirnery-color)',height:{xs:"16vh",sm:"14vh",md:"12vh"},width:{xs:"100%",sm:"100%",md:"35%"},p:{xs:"0px",sm:"10px",md:"10px"},fontSize:{xs:"20px",sm:"20px",md:"20px"}, textAlign:{xs:'center',sm:'center',md:'left'}}}>
                        <Typography variant="h3" sx={{color:"var(--primary-color)"}}>
                            taskrabbit
                        </Typography>
                    </Box>
                    <Box sx={{bgcolor:'var(--tirnery-color)',height:{xs:"20vh",sm:"18vh",md:"12vh"},width:{xs:"90%",sm:"50%",md:"73%"},display:{xs:'none',sm:'none',md:'flex'},p:{xs:"0px",sm:"10px",md:"13px 22px"}}}>
                        <a className="txt" href="/block">Services</a>
                        <a className="txt" href="form">Signup/Login</a>
                        <a className="tasker" href="/taskers">Become a Tasker</a>
                    </Box>  
                      {/* import headerImage from "../../assets/header.jpg"; */}
                     {/* backgroundImage: `url(${headerImage})`, */}
            </Box>
            </Box>
        </Container>
        </>
    )
}
export default Navbar;