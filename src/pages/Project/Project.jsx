import Typography from "@mui/material/Typography";
import { Container, Box} from "@mui/material";
import ProjectPageImage from "../../assets/Images/Furniture_Assembly.webp";
import HangImage from "../../assets/Images/Hang_Pictures.webp";
import TVImage from "../../assets/Images/Mount_TV.webp";
import HelpImage from "../../assets/Images/Help_Moving.webp";
import CleaningImage from "../../assets/Images/Home_Apartment_Cleaning.webp";
import ElectricImage from "../../assets/Images/Electrical_Help.webp";
import AdobeStockImage from "../../assets/Images/AdobeStock.webp";
import FurnitureImage from "../../assets/Images/Furniture_Removal.webp";
import Ydots from '../../assets/Images/dots-yellow.svg'
import "./Project.css"
import { ImportExport } from "@mui/icons-material";
const box=[
    {
        id:'1',
        imag:ProjectPageImage,
        txt:'Furniture Assembly',
        price:'Project Starting at $49'

    },
    {
        id:'2',
        imag:HangImage,
        txt:'Mount Art,Shelves',
        price:'Project Starting at $65'
    },
    {
        id:'3',
        imag:TVImage,
        txt:'Mount a TV',
        price:'Project Starting at $99'
    },
   {
        id:'4',
        imag:HelpImage,
        txt:'Help Moving',
        price:'Project Starting at $49'
    },
    {
        id:'5',
        imag:CleaningImage,
        txt:'Home Cleaning',
        price:'Project Starting at $49'

    },
    {
        id:'6',
        imag:AdobeStockImage,
        txt:'Minor Plumbing',
        price:'Project Starting at $49'
    },
    {
        id:'7',
        imag:ElectricImage,
        txt:'Electrical Help',
        price:'Project Starting at $49'
    },
   {
        id:'8',
        imag:FurnitureImage,
        txt:'Heavy Lifting',
        price:'Project Starting at $49'
    },
  
]
function Project()
{
    return(
        <>
        <Container maxWidth="full" sx={{ height: { xs: 'auto', sm: 'auto', md: 'auto' },padding:'80px 0px',backgroundImage:`url(${Ydots})`,backgroundRepeat:"no-repeat"}} >
            <Box class='max_width'>
                {/* <img src={`${Ydots}`}/> */}
                <Typography variant="h4" sx={{height:'50px',color:'var(--seven-color)',fontWeight:'600'}}>Popular Projects</Typography>
                    <Box sx={{display:'flex',flexWrap:'wrap',height:{xs:'auto',md:'auto',sm:'auto'},gap:{xs:'30px',sm:'70px',md:'50px'},p:{xs:'10px 5px',md:"15px 40px",sm:"15px 40px"}}}>
                    {box.map((item)=>(
                        <Box sx={{background:'#f4f6f7ff',borderRadius:'10px',boxShadow:'3', display:{xs:'flex',sm:'block'}}}>
                              <Box sx={{height:{xs:'90px',md:'150px',sm:'150px'}}}><img className="project_sec_img" src={item.imag}/></Box>
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