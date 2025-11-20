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
                    padding: { xs: "60%", sm: "60%", md: "60px" },
                    backgroundImage: `url(${Image})`,
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center",
                    backgroundRepeat:"no-repeat",
                    backgroundAttachment:"fixed",
                }}>
                <Typography variant="h4" sx={{textAlign:"center",marginTop:"140px",color:"white",fontSize:"40px",fontWeight:"600"}}>Your to-do list is on us.</Typography>
            </Container>
        </>
    )
}

export default Upper