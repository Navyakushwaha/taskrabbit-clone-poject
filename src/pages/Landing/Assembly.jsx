import { Container, Box, Button, Typography } from "@mui/material";
import HomepageImage from "../../assets/Images/Homepage_Assembly.webp";
import "./Landing.css"
import { Margin } from "@mui/icons-material";
const Block = [
    {
        id: '1',
        txt: 'General Furniture Assembly'
    },
    {
        id: '2',
        txt: 'IKEA Assembly'
    },
    {
        id: '3',
        txt: 'Crib Assembly'
    },
    {
        id: '4',
        txt: 'PAX Assembly'
    },
    {
        id: '5',
        txt: ' Bookshelf Assembly'
    },
    {
        id: '6',
        txt: 'Desk Assembly'
    },


]

function Assembly() {
    return (
        <>
            <Container maxWidth="full" sx={{ height: { xs: 'auto', sm: 'auto', md: 'auto' } }}>
                <Box sx={{
                    height: { xs: '100%', sm: '100%', md: '100%' },
                    display: 'flex', flexWrap: 'wrap', gap: { xs: '15px', sm: '15px', md: '20px' }, py: '35px'
                }}>
                    {Block.map((item) => (
                        <Typography sx={{
                            border: '1px solid var(--primary-color)', px: { xs: '5px', sm: '25px', md: '25px' },
                            py: { xs: '5px', sm: '12px', md: '12px' }, borderRadius: '35px', textAlign: 'center', fontSize: '15px', fontWeight: '600', color: 'var(--forth-color)',
                            "&:hover": {
                                color: "var(--primary-color)",
                                transform: "scale(1.05)",
                            },
                        }}>
                            {item.txt}
                        </Typography>
                    ))}
                </Box>

                <Box sx={{ position: "relative", height: { xs: 'auto', sm: 'auto', md: 'auto' }, width: { xs: '100%', sm: '100%', md: '100%' }, }}>
                    <Box sx={{
                        height: { xs: '230px', sm: '53vh', md: '53vh' }, width: { xs: '100%', sm: '330px', md: '330px' }, background: "white", borderRadius: '6px'
                        , p: { xs: '0px', md: "40px", sm: '40px' }, position: { xs: 'relative', md: 'absolute', sm: 'absolute' }, top: { xs: '0px', md: '100px', sm: '100px' }, left: { xs: '0px', md: '40px', sm: '40px' }
                    }}>
                        <Typography variant="h5" sx={{ mt: { xs: '10px', md: "25px", sm: '20px' } }}>Assembly</Typography>
                        <Box sx={{ height: 'auto', width: '100%', mt: { xs: '10px', md: "20px", sm: '20px' }, lineHeight: '23px' }}>
                            <Typography variant="p" sx={{ fontSize: '17px' }}>Assemble or disassemble furniture items by unboxing, building, and any cleanup.</Typography><br />
                        </Box>
                        <Box sx={{ height: 'auto', width: '100%', mt: { xs: '10px', md: "30px", sm: '30px' }, lineHeight: '23px' }}>
                            <Typography variant="p" sx={{ fontSize: '17px' }}>Now Trending: Curved sofas, computer desks, and sustainable materials.</Typography>
                        </Box>
                    </Box>

                    <Box sx={{
                        height: { xs: 'auto', sm: 'auto', md: '90vh' }, width: { xs: 'auto', sm: 'auto', md: '100%' }
                        , background: "#e3eef5ff", borderRadius: '10px', px: { xs: 'auto', md: "120px", sm: '120px' }, py: { xs: 'auto', md: "60px", sm: '60px' }
                    }}>
                        <Box sx={{ height: { xs: '37vh', sm: 'auto', md: '70vh' } }}>
                            <img className="img_sty" src={HomepageImage} />
                        </Box>
                    </Box>
                </Box>



            </Container>
        </>
    )
}
export default Assembly;