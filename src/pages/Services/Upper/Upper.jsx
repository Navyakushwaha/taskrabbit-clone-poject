import { Container, Box,Typography } from "@mui/material";
import Image from "../../../assets/Images/services.webp";
const Upper = () => {
    return (
        <>
            <Container maxWidth="full"
                sx={{
                    width: { xs: "100%", sm: "100%", md: "100%", lg: '100%', xl: '100%' }, height: {
                        xs: "auto", sm: "60vh", md: "70vh", lg: '70vh'
                    },
                    alignItems: "center",
                    justifyContent: "center",
                    padding: { xs: "30%", sm: "30%", md: "60px" },
                    backgroundImage: `url(${Image})`,
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center",
                    backgroundRepeat:"no-repeat",
                    // backgroundAttachment:"fixed",
                }}>
                <Typography variant="h4" sx={{textAlign:"center",paddingTop:{xs:"30px",sm:"20px",md:"130px"},color:"white",fontSize:{xs:"20px",sm:"30px",md:"60px"},fontWeight:"600",textShadow: "2px 2px 4px black"}}>Your to-do list is on us.</Typography>
            </Container>
        </>
    )
}

export default Upper