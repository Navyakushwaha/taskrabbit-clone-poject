
import { Typography, Container, Box, IconButton, InputAdornment, TextField } from "@mui/material";
import Image6 from "../../assets/Images/testimonial.jpg";
// import './Testimonial.css'
import { SiComma } from "react-icons/si";
const Testimonial = () => {
    return (
        <>
            <Container maxWidth="full" sx={{ height: "auto", width: "100%", marginY: "40px" }}>
                <Box class="max_width">
                    <Box sx={{ height: "auto", width: "100%", display: "flex", flexWrap: "wrap", padding: "10px" }}>
                        <Box sx={{ width: { xs: "100%", sm: "100%", md: "33%" }, padding: "40px 10px" }}>
                            <Box sx={{color:"var(--primary-color)"}}><SiComma/><SiComma/></Box>
                            <Typography sx={{ paddingTop: "20px", fontSize: {xs:"18px",sm:"24px",md:"24px"}, color: "var(--second-color)" ,fontWeight:"500"}}>
                                I love HelperHub! I was able to get out of debt, tackle bills, provide for my family, and still have enough room to save for future goals.
                                  <span>Karsheem W., New York, NY</span>
                            </Typography>
                        </Box>
                        <Box sx={{ height: "100%", width: { xs: "100%", sm: "100%", md: "65%" } }}>
                            <img className="driller" src={Image6} />
                        </Box>   
                    </Box>
                </Box>
            </Container>
        </>
    )
}
export default Testimonial