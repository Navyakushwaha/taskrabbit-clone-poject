import Typography from "@mui/material/Typography";
import { Container, Box, IconButton, InputAdornment, TextField } from "@mui/material";
import ProjectPageImage from "../../assets/Images/Furniture_Assembly.webp";
import HangImage from "../../assets/Images/Hang_Pictures.webp";
import TVImage from "../../assets/Images/Mount_TV.webp";
import HelpImage from "../../assets/Images/Help_Moving.webp";
import CleaningImage from "../../assets/Images/Home_Apartment_Cleaning.webp";
import ElectricImage from "../../assets/Images/Electrical_Help.webp";
import AdobeStockImage from "../../assets/Images/AdobeStock.webp";
import FurnitureImage from "../../assets/Images/Furniture_Removal.webp";
import "./Project.css"
const box=[
    {
        id:'',
        imag:ProjectPageImage,
        txt:'Furniture Assembly',
        price:'Project Starting at $49'

    },
    {
        id:'',
        imag:HangImage,
        txt:'Furniture Assembly',
        price:'Project Starting at $49'
    },
    {
        id:'',
        imag:TVImage,
        txt:'Furniture Assembly',
        price:'Project Starting at $49'
    },
   {
        id:'',
        imag:HelpImage,
        txt:'Furniture Assembly',
        price:'Project Starting at $49'
    },
    {
        id:'',
        imag:CleaningImage,
        txt:'Furniture Assembly',
        price:'Project Starting at $49'

    },
    {
        id:'',
        imag:AdobeStockImage,
        txt:'Furniture Assembly',
        price:'Project Starting at $49'
    },
    {
        id:'',
        imag:ElectricImage,
        txt:'Furniture Assembly',
        price:'Project Starting at $49'
    },
   {
        id:'',
        imag:FurnitureImage,
        txt:'Furniture Assembly',
        price:'Project Starting at $49'
    },
  
]
function Project()
{
    return(
        <>
        <Container maxWidth="full" sx={{ height: { xs: 'auto', sm: 'auto', md: 'auto' },padding:'80px 0px' }} >
            <Box class='max_width'>
                <Typography variant="h4" sx={{height:'50px',color:'var(--seven-color)',fontWeight:'600'}}>Popular Projects</Typography>
                    <Box sx={{display:'flex',flexWrap:'wrap',height:{xs:'auto',md:'auto',sm:'auto'},gap:'70px',p:'15px 10px',}}>
                    {box.map((item)=>(
                        <Box sx={{background:'#f4f6f7ff',borderRadius:'10px',boxShadow:'3', display:{xs:'flex',sm:'block'}}}>
                              <Box><img className="project_sec_img" src={item.imag}/></Box>
                              <Box sx={{padding:'20px 40px'}}>
                                <Typography sx={{fontSize:'16px', fontWeight:'600',color:'#023a2cff'}}>{item.txt}</Typography>
                                 <Typography variant="p" sx={{fontSize:'14px',color:'#023a2cff'}}>{item.price}</Typography>
                              </Box>
                        </Box>
                    ))}
                </Box>
                
            </Box>
        </Container>
        </>
    )
}
export default Project;