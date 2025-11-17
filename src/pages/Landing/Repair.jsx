import { Container, Box, Button, Typography } from "@mui/material";
import HomepageImage from "../../assets/Images/Homepage_HomeRepairs.webp";
import "./Landing.css"

const Block = [
    {
        id: '1',
        txt: 'Door,Cabinet, & furniture Repair'
    },
    {
        id: '2',
        txt: 'Wall Repair'
    },
    {
        id: '3',
        txt: 'Sealing & Caulking'
    },
    {
        id: '4',
        txt: 'Appliance Installation & Repairs'
    },
    {
        id: '5',
        txt: ' Window & Blinds Reair'
    },
    {
        id: '6',
        txt: 'Flooring & Tiling Help'
    },
    {
        id: '7',
        txt: 'Electrical Help'
    },
    {
        id: '8',
        txt: ' Plumbing Help'
    },
    {
        id: '9',
        txt: 'Light Carpentry'
    },


]

function Repair()
{
    return(
        <>
        <Container maxWidth="full" sx={{ height: { xs: 'auto', sm: 'auto', md: 'auto' } }}>
                        <Box sx={{
                            height: { xs: '100%', sm: '100%', md: '100%' },
                            display: 'flex', flexWrap: 'wrap', gap:{xs:'15px',sm:'15px',md:'20px'}, py: '35px'
                        }}>
                            {Block.map((item) => (
                                <Typography sx={{
                                    border: '1px solid var(--primary-color)',px: { xs: '5px', sm: '25px', md: '25px' },
                                    py: { xs: '5px', sm: '12px', md: '12px' }, borderRadius: '35px', textAlign: 'center', fontSize: '15px', fontWeight: '600',color:'var(--forth-color)',
                                    "&:hover": {
                                        color: "var(--primary-color)",
                                        transform: "scale(1.05)",
                                    },
                                }}>
                                    {item.txt}
                                </Typography>
                            ))}
                        </Box>
                         
                         <Box sx={{position:"relative",height: { xs: 'auto', sm: 'auto', md: 'auto' },width: { xs: 'auto', sm: '100%', md: '100%'},}}>
                            <Box sx={{ height: { xs: '230px', sm: '53vh', md: '53vh' },width: { xs: 'auto', sm: '330px', md: '330px'},background:"white",borderRadius:'6px'
                                 ,p:{xs:'0px',md:"40px",sm:'40px'},position:{xs:'relative',md:'absolute',sm:'absolute'},top:{xs:'0px',md:'100px',sm:'100px'},left:{xs:'0px',md:'40px',sm:'40px'}}}>
                            <Typography variant="h5" sx={{mt:{xs:'10px',md:"25px",sm:'20px'}}}>Home Repairs</Typography>
                            <Box sx={{height:'auto',width:'100%' ,mt:{xs:'10px',md:"20px",sm:'20px'},lineHeight:'23px'}}>
                                <Typography variant="p" sx={{fontSize:'17px'}}>Home improvements like plumbing, electrical, and appliance installation.</Typography><br/>
                            </Box>
                            <Box sx={{height:'auto',width:'100%',mt:{xs:'10px',md:"30px",sm:'30px'},lineHeight:'23px'}}>
                                <Typography variant="p" sx={{fontSize:'17px'}}>Now Trending: Chandeliers, brass faucets, and smart toilets.</Typography>
                            </Box>
                            
                            
                        </Box>
        
                        <Box sx={{ height: { xs: 'auto', sm: 'auto', md: '90vh' },width: { xs: 'auto', sm: 'auto', md: '100%'}
                        ,background:"#f5e3f1ff",borderRadius:'10px',px:{xs:'auto',md:"120px",sm:'120px'},py:{xs:'auto',md:"60px",sm:'60px'}}}>
                            <Box sx={{ height: { xs: '37vh', sm: 'auto', md: '70vh'},width: { xs: '100%', sm: '95vh', md: '100vh',lg:'120vw',xl:'100vw' }}}>
                               <img className="img_sty" src={HomepageImage}/> 
                            </Box>
                        </Box>
                         </Box>
                        
        
        
                    </Container>
        </>
    )
}
export default Repair;