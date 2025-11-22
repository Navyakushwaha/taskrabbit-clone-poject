import './Tips.css'
import { Container, Box, Typography } from "@mui/material";
import Image from "../../assets/Images/form2.jpg";
import Upper from '../../pages/Services/Upper/Upper';
const Tips = () => {
    return (
        <>
            {/* <Upper/> */}
            <Container maxWidth="full"
                sx={{
                    width: { xs: "100%", sm: "100%", md: "100%", lg: '100%', xl: '100%' }, height: {
                        xs: "auto", sm: "60vh", md: "50vh", lg: '50vh'
                    },
                    alignItems: "center",
                    justifyContent: "center",
                    padding: { xs: "30%", sm: "30%", md: "60px" },
                    backgroundImage: `url(${Image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed",
                }}>
                <Typography variant="h4" sx={{ textAlign: "center", paddingTop: { xs: "30px", sm: "20px", md: "60px" }, color: "var(--primary-color)",textShadow: "2px 2px 4px black", fontSize: { xs: "20px", sm: "30px", md: "65px" }, fontWeight: "600" }}>Become a Tasker</Typography>
            </Container>
        </>
    )
}
export default Tips;