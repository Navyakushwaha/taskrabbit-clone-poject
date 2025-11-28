import Typography from "@mui/material/Typography";
import { Container, Box} from "@mui/material";
import Ydots from '../../assets/Images/dots-yellow.svg'
import box from '../../Api/PopularProject.json'
import "./Project.css"
import { ImportExport } from "@mui/icons-material";

function Project()
{
    return(
        <>
        <Container maxWidth="full" sx={{ height: { xs: 'auto', sm: 'auto', md: 'auto' },padding:'80px 0px',backgroundImage:`url(${Ydots})`,backgroundRepeat:"no-repeat"}} >
            <Box class='max_width'>
                <Typography variant="h4" sx={{height:'50px',color:'var(--seven-color)',fontWeight:'600'}}>Popular Projects</Typography>
                    <Box sx={{display:'flex',flexWrap:'wrap',height:{xs:'auto',md:'auto',sm:'auto'},gap:{xs:'30px',sm:'70px',md:'50px'},p:{xs:'10px 5px',md:"15px 40px",sm:"15px 40px"}}}>
                    {box.map((item)=>(
                        <Box sx={{background:'#f4f6f7ff',borderRadius:'10px',boxShadow:'3', display:{xs:'flex',sm:'block'}}}>
                              <a className="project-anchor" href="/describe">
                                <Box sx={{height:{xs:'90px',md:'150px',sm:'150px'}}}><img className="project_sec_img" src={item.imag}/></Box>
                              <Box sx={{padding:'20px 40px'}}>
                                <Typography sx={{fontSize:'16px', fontWeight:'600',color:'#023a2cff'}}>{item.txt}</Typography>
                                 <Typography variant="p" sx={{fontSize:'14px',color:'#023a2cff'}}>{item.price}</Typography>
                              </Box>
                              </a>
                        </Box>
                    ))}
                </Box>
                
            </Box>
        </Container>
        </>
    )
}
export default Project;