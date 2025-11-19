import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AutoFixOffIcon from '@mui/icons-material/AutoFixOff';
import BarcodeReaderIcon from '@mui/icons-material/BarcodeReader';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import SettingsInputAntennaIcon from '@mui/icons-material/SettingsInputAntenna';
import HardwareOutlinedIcon from '@mui/icons-material/HardwareOutlined';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import WhatshotIcon from '@mui/icons-material/Whatshot';

import { useState } from "react";

import Assembly from "../Landing/Assembly";
import Cleaning from "../Landing/Cleaning";
import Mounting from "../Landing/Mounting";
import Moving from "../Landing/Moving";
import Outdoor from "../Landing/Outdoor";
import Painting from "../Landing/Painting";
import Repair from "../Landing/Repair";
import Trending from "../Landing/Trending";
import "./Logo.css"
import { Container, Box } from "@mui/material";

const Data =
    [
        {
            id: '1',
            icon: <AutoFixOffIcon />,
            txt: 'Assembly'
        },
        {
            id: '2',
            icon: <AutoFixOffIcon />,
            txt: 'Mounting'
        },
        {
            id: '3',
            icon: <AutoFixOffIcon />,
            txt: 'Moving'
        },
        {
            id: '4',
            icon: <AutoFixOffIcon />,
            txt: 'cleaning'
        },
        {
            id: '5',
            icon: <AutoFixOffIcon />,
            txt: 'Outdoor Help'
        },
        {
            id: '6',
            icon: <AutoFixOffIcon />,
            txt: 'Home Repairs'
        },
        {
            id: '7',
            icon: <AutoFixOffIcon />,
            txt: 'Painting'
        },
        {
            id: '8',
            icon: <AutoFixOffIcon />,
            txt: 'Trending'
        },
    ]

function Logo() {

    const [page, setPage] = useState("assembly")
    function renderPage() {
        switch (page) {
            case "assembly":
                return <Assembly />;
            case "cleaning":
                return <Cleaning />;
            case "mounting":
                return <Mounting />;
            case "outdoor":
                return <Outdoor />;
            case "painting":
                return <Painting />;
            case "repair":
                return <Repair />;
            case "trending":
                return <Trending />;
            case "moving":
                return <Moving />;
            default:
                return <Assembly />;
        }
    }

    return (
        <>
            <Container maxWidth="full" sx={{ height: { xs: 'auto', sm: 'auto', md: 'auto' }, margin: '4px auto', py: { xs: '10px', sm: '10px', md: '2px' }, position: 'relative' }}>
                <Box class="max_width">
                    <Box sx={{ height: { xs: '100%', sm: '100%', md: '100%' }, width: { xs: '100%', sm: '100%', md: '100%' }, display: 'flex', gap: '20px', borderBottom: '1px solid var(--primary-color)', overflowX: { xs: 'scroll', md: 'hidden', sm: 'hidden' },marginTop:'20px' }}>

                        <Box
                            sx={{ height: { xs: '11vh', sm: '11vh', md: '11vh' }, margin: 'auto', borderBottom: '3px solid #0c4b94ff' }}
                        >
                            <Box sx={{ height: { xs: '60%', sm: '60%', md: '60%' }, width: { xs: '100%', sm: '100%', md: '100%' }, margin: 'auto', border: '1px solid white' }}>
                                <Button sx={{ color: "#444343ff", fontWeight: "bolder" }} onClick={() => setPage("assembly")} ><AutoFixOffIcon /></Button>
                            </Box>
                            <Box sx={{ height: { xs: '40%', sm: '40%', md: '40%' }, width: { xs: '100%', sm: '100%', md: '100%' }, background: '#fff' }}>
                                <Typography variant="p" sx={{ margin: 'auto', color: '#0c4b94ff', fontWeight: '600' }}>
                                    Assembly
                                </Typography>
                            </Box>
                        </Box>

                        <Box
                            sx={{ height: { xs: '11vh', sm: '11vh', md: '11vh'}, margin: 'auto' }} onClick={() => setPage("mounting")}
                        >
                            <Box sx={{ height: { xs: '60%', sm: '60%', md: '60%' }, width: { xs: '100%', sm: '100%', md: '100%' }, fontSize: '18px', fontWeight: '600', margin: 'auto', color: 'var(--six-color)' }}>

                                <Button sx={{ color: "#444343ff", fontWeight: "bolder" }} ><BarcodeReaderIcon /></Button>
                            </Box>
                            <Box sx={{ height: { xs: '40%', sm: '40%', md: '40%' }, width: { xs: '100%', sm: '100%', md: '100%' }, background: '#fff' }}>
                                <Typography variant="p" sx={{ margin: 'auto', color: 'var(--fifth-color)' }}>Mounting</Typography>
                            </Box>
                        </Box>

                        <Box
                            sx={{ height: { xs: '11vh', sm: '11vh', md: '11vh'}, margin: 'auto' }}
                        >
                            <Box sx={{ height: { xs: '60%', sm: '60%', md: '60%' }, width: { xs: '100%', sm: '100%', md: '100%' }, fontSize: '18px', fontWeight: '600', margin: 'auto', color: 'var(--six-color)' }}>

                                <Button sx={{ color: "#444343ff", fontWeight: "bolder" }} onClick={() => setPage("moving")}><LocalShippingIcon /></Button>
                            </Box>
                            <Box sx={{ height: { xs: '40%', sm: '40%', md: '40%' }, width: { xs: '100%', sm: '100%', md: '100%' }, background: '#fff' }}>
                                <Typography variant="p" sx={{ margin: 'auto', color: 'var(--fifth-color)' }}>Moving</Typography>
                            </Box>
                        </Box>

                        <Box
                            sx={{ height: { xs: '11vh', sm: '11vh', md: '11vh'}, margin: 'auto' }}
                        >
                            <Box sx={{ height: { xs: '60%', sm: '60%', md: '60%' }, width: { xs: '100%', sm: '100%', md: '100%' }, fontSize: '18px', fontWeight: '600', margin: 'auto', color: 'var(--six-color)' }}>

                                <Button sx={{ color: "#444343ff", fontWeight: "bolder" }} onClick={() => setPage("cleaning")}><CleaningServicesIcon /></Button>
                            </Box>
                            <Box sx={{ height: { xs: '40%', sm: '40%', md: '40%' }, width: { xs: '100%', sm: '100%', md: '100%' }, background: '#fff' }}>
                                <Typography variant="p" sx={{ margin: 'auto', color: 'var(--fifth-color)' }}>Cleaning</Typography>
                            </Box>
                        </Box>

                        <Box
                            sx={{ height: { xs: '11vh', sm: '11vh', md: '11vh' }, margin: 'auto' }}
                        >
                            <Box sx={{ height: { xs: '60%', sm: '60%', md: '60%' }, width: { xs: '100%', sm: '100%', md: '100%' }, fontSize: '18px', fontWeight: '600', margin: 'auto', color: 'var(--six-color)' }}>
                                <Button sx={{ color: "#444343ff", fontWeight: "bolder" }} onClick={() => setPage("outdoor")}><SettingsInputAntennaIcon /></Button>
                            </Box>
                            <Box sx={{ height: { xs: '40%', sm: '40%', md: '40%' }, width: { xs: '100%', sm: '100%', md: '100%' }, background: '#fff' }}>
                                <Typography variant="p" sx={{ margin: 'auto', color: 'var(--fifth-color)' }}>Outdoor Help</Typography>
                            </Box>
                        </Box>

                        <Box
                            sx={{ height: { xs: '11vh', sm: '11vh', md: '11vh' }, margin: 'auto' }}
                        >
                            <Box sx={{ height: { xs: '60%', sm: '60%', md: '60%' }, width: { xs: '100%', sm: '100%', md: '100%' }, fontSize: '18px', fontWeight: '600', margin: 'auto', color: 'var(--six-color)' }}>
                                <Button sx={{ color: "#444343ff", fontWeight: "bolder" }} onClick={() => setPage("repair")}><HardwareOutlinedIcon /></Button>
                            </Box>
                            <Box sx={{ height: { xs: '40%', sm: '40%', md: '40%' }, width: { xs: '100%', sm: '100%', md: '100%' }, background: '#fff' }}>
                                <Typography variant="p" sx={{ margin: 'auto', color: 'var(--fifth-color)' }}>Home Repair</Typography>
                            </Box>
                        </Box>



                        <Box
                            sx={{ height: {xs: '11vh', sm: '11vh', md: '11vh' }, margin: 'auto' }}
                        >
                            <Box sx={{ height: { xs: '60%', sm: '60%', md: '60%' }, width: { xs: '100%', sm: '100%', md: '100%' }, fontSize: '18px', fontWeight: '600', margin: 'auto', color: 'var(--six-color)' }}>

                                <Button sx={{ color: "#444343ff", fontWeight: "bolder" }} onClick={() => setPage("painting")}><FormatPaintIcon /></Button>
                            </Box>
                            <Box sx={{ height: { xs: '40%', sm: '40%', md: '40%' }, width: { xs: '100%', sm: '100%', md: '100%' }, background: '#fff' }}>
                                <Typography variant="p" sx={{ margin: 'auto', color: 'var(--fifth-color)' }}>Painting</Typography>
                            </Box>
                        </Box>

                        <Box
                            sx={{ height: { xs: '11vh', sm: '11vh', md: '11vh' }, margin: 'auto' }}
                        >
                            <Box sx={{ height: { xs: '60%', sm: '60%', md: '60%' }, width: { xs: '100%', sm: '100%', md: '100%' }, fontSize: '18px', fontWeight: '600', margin: 'auto', color: 'var(--six-color)' }}>

                                <Button sx={{ color: "#444343ff", fontWeight: "bolder" }} onClick={() => setPage("trending")}><WhatshotIcon /></Button>
                            </Box>
                            <Box sx={{ height: { xs: '40%', sm: '40%', md: '40%' }, width: { xs: '100%', sm: '100%', md: '100%' }, background: '#fff' }}>
                                <Typography variant="p" sx={{ margin: 'auto', color: 'var(--fifth-color)' }}>Trending</Typography>
                            </Box>
                        </Box>

                    </Box>

                    {renderPage()}



                </Box>

            </Container>
        </>
    )
}

export default Logo