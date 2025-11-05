import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container,Box} from "@mui/material";
import "./Navbar.css"
function Navbar()
{
    return(
        <>
        <Container maxWidth='full' sx={{width:'100%',background:"#f7f3f3ff",borderBottom:"1px solid #000"}}>
            <Box class="max_width">
            <Box sx={{height:'13vh', display:'flex',width:'100%'}}>
                    <Box sx={{bgcolor:'#f7f3f3ff',height:'13vh',width:'50%',padding:'5px'}}>
                        <Typography variant="h3" sx={{padding:'5px',color:"#03377aff"}}>
                            taskrabbit
                        </Typography>
                    </Box>
                    <Box sx={{bgcolor:'#f7f3f3ff',height:'13vh',width:'50%',display:'flex',padding:'12px'}}>
                        <a href="#">Servisec</a>
                        <a href="#">Signup/Login</a>
                        <a className="tasker" href="#">Become a Tasker</a>
                    </Box>  
            </Box>
            </Box>
        </Container>

        {/* <div className="navbar_outer">
            <div className="max_width">
                <div>hii</div>
                <div>hello</div>
            </div>
        </div> */}
        </>
    )
}
export default Navbar;