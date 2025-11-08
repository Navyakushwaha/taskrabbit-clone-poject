import { Container, Box, Button, Typography } from "@mui/material";
import HomepageImage from "../../assets/Images/Homepage_Assembly.webp";
import "./Landing.css"
const Block = [
    {
        id: '1',
        txt: 'General Furniture Assembly'
    },
    {
        id: '1',
        txt: 'IKEA Assembly'
    },
    {
        id: '1',
        txt: 'Crib Assembly'
    },
    {
        id: '1',
        txt: 'PAX Assembly'
    },
    {
        id: '1',
        txt: ' Bookshelf Assembly'
    },
    {
        id: '1',
        txt: 'Desk Assembly'
    },


]

function Assembly() {
    return (
        <>
            <Container maxWidth="full" sx={{ height: { xs: 'auto', sm: 'auto', md: 'auto' } }}>
                <Box sx={{
                    height: { xs: '100%', sm: '100%', md: '100%' },
                    display: 'flex', flexWrap: 'wrap', gap: '20px', py: '35px'
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

                <Box sx={{ height: { xs: 'auto', sm: 'auto', md: '90vh' },width: { xs: 'auto', sm: 'auto', md: '100%'},background:"#d0e4f0ff",borderRadius:'10px',px:{xs:'auto',md:"85px",sm:'85px'},py:{xs:'auto',md:"60px",sm:'60px'}}}>
                    <Box sx={{ height: { xs: 'auto', sm: 'auto', md: '70vh'},width: { xs: 'auto', sm: 'auto', md: '130vh', }}}>
                       <img className="img_sty" src={HomepageImage}/> 
                    </Box>
                </Box>


            </Container>
        </>
    )
}
export default Assembly;