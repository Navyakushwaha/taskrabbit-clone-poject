import { Typography, Container, Box, IconButton, InputAdornment, TextField } from "@mui/material";
import { FaGreaterThan } from "react-icons/fa6";
import './GetHelp.css'

const Block = [
    {
        id: '1',
        txt: 'General Mounting'
    },
    {
        id: '2',
        txt: 'TV Mounting'
    },
    {
        id: '3',
        txt: 'Crib Assembly'
    },
    {
        id: '4', 
        txt: 'Furniture Assembly'
    },
    {
        id: '5',
        txt: ' IKEA Furniture Assembly'
    },
    {
        id: '6',
        txt: 'Help Moving'
    },
    {
        id: '7',
        txt: 'House Cleaning'
    },
    {
        id: '8',
        txt: 'Yard Work'
    },
    {
        id: '9',
        txt: 'Furniture Removel'
    },
    {
        id: '10',
        txt: 'Lawn Care'
    },
    {
        id: '11',
        txt: ' Hang Pictures '
    },
    {
        id: '12',
        txt: 'In Home Furniture  Moving'
    },
    {
        id: '13',
        txt: 'Shelf Mounting'
    },
    {
        id: '14',
        txt: 'Light Installation'
    },
    {
        id: '15',
        txt: 'Plumbing'
    },


]

function GetHelp() {
    return (
        <>
            <Container sx={{ my: '40px' }}>
                <Box class="max_width">
                    <Typography variant="h4" sx={{ fontWeight: '600', color: 'var(--seven-color)' }}>Get Help Today</Typography>
                    <Box sx={{
                        height: { xs: '100%', sm: '100%', md: '100%' },
                        display: 'flex', flexWrap: 'wrap', gap: { xs: '15px', sm: '15px', md: '20px' }, py: '35px'
                    }}>

                        {Block.map((item) => (
                            <Typography sx={{
                                border: '1px solid var(--primary-color)', px: { xs: '5px', sm: '25px', md: '25px' },
                                py: { xs: '5px', sm: '12px', md: '12px' }, borderRadius: '35px', textAlign: 'center', fontSize: '15px', fontWeight: '600', color: 'var(--forth-color)',
                                "&:hover": {
                                    color: "var(--seven-color)",
                                    transform: "scale(1.05)",
                                },
                            }}>
                                {item.txt}
                            </Typography>
                        ))}
                    </Box>
                    <Typography variant="h6" sx={{color:"var(--seven-color)",display:'flex'}}>
                        <a href="/block" className="txt_sty"> See All Services</a>
                    </Typography>
                </Box>
            </Container>
        </>
    )
}

export default GetHelp