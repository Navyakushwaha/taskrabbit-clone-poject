import { Container, Box, Button, Typography } from "@mui/material";
import HomepageImage from "../../assets/Images/Homepage_Mounting.webp";
import "./Landing.css"

const Block = [
    {
        id: '1',
        txt: 'Hang Art,Mirror & Decor'
    },
    {
        id: '2',
        txt: 'Install Blinds & Window Treatments'
    },
    {
        id: '3',
        txt: 'Mounts & Anchor Furniture'
    },
    {
        id: '4',
        txt: 'Install Sheives, Road & Hooks'
    },
    {
        id: '5',
        txt: 'Othor Mounting'
    },
    {
        id: '6',
        txt: 'TV Mounting'
    },


]
function Mounting() {
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

                <Box sx={{ position: "relative", height: { xs: 'auto', sm: 'auto', md: 'auto' }, width: { xs: 'auto', sm: '100%', md: '100%' },  }}>
                    <Box sx={{
                        height: { xs: '230px', sm: '53vh', md: '53vh' }, width: { xs: 'auto', sm: '330px', md: '330px' }, background: "white", borderRadius: '6px'
                        , p: { xs: '0px', md: "40px", sm: '40px' }, position: { xs: 'relative', md: 'absolute', sm: 'absolute' }, top: { xs: '0px', md: '100px', sm: '100px' }, left: { xs: '0px', md: '40px', sm: '40px' }
                    }}>
                        <Typography variant="h5" sx={{ mt: { xs: '10px', md: "25px", sm: '20px' } }}>Mounting</Typography>
                        <Box sx={{ height: 'auto', width: '100%', mt: { xs: '10px', md: "20px", sm: '20px' }, lineHeight: '23px' }}>
                            <Typography variant="p" sx={{ fontSize: '17px' }}>Securely mount your TV, shelves, art, mirrors, dressers, and more.</Typography><br />
                        </Box>
                        <Box sx={{ height: 'auto', width: '100%', mt: { xs: '10px', md: "30px", sm: '30px' }, lineHeight: '23px' }}>
                            <Typography variant="p" sx={{ fontSize: '17px' }}>Now Trending: Gallery walls, art TVs, and wraparound bookcases.</Typography>
                        </Box>


                    </Box>

                    <Box sx={{
                        height: { xs: 'auto', sm: 'auto', md: '90vh' }, width: { xs: 'auto', sm: 'auto', md: '100%' }
                        , background: "#d8f3ecff", borderRadius: '10px', px: { xs: 'auto', md: "120px", sm: '120px' }, py: { xs: 'auto', md: "60px", sm: '60px' }
                    }}>
                        <Box sx={{ height: { xs: '37vh', sm: 'auto', md: '70vh' }, width: { xs: '100%', sm: '95vh', md: '100vh', lg: '120vw', xl: '100vw' } }}>
                            <img className="img_sty" src={HomepageImage} />
                        </Box>
                    </Box>
                </Box>



            </Container>
        </>
    )
}
export default Mounting;