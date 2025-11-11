import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Box, IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
 import headerImage from "../../assets/header.jpg";
import "./Header.css"
function Header() {

    return (
        <>
            <Container maxWidth='full' sx={{
                width: { xs: "100%", sm: "100%", md: "100%",lg:'100%',xl:'100%'}, height: {
                    xs: "70vh", sm: "70vh", md: "70vh",
                    alignItems: "center",
                    justifyContent: "center",
                    padding:{xs: "60%", sm: "60%", md: "60%"},
                    backgroundImage: `url(${headerImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }
            }}>
                <Box sx={{
                    width: { xs: "100%", sm: "100%", md: "100%",lg:'100%',xl:'100%' },
                    height: {xs: "70vh", sm: "70vh", md: "70vh"}, 
                    display: 'flex',
                    flexDirection:'column',
                    background:'rgba(17, 14, 15, 0.57)'
                }}>
                    <Box sx={{ width:{xs:'60%',sm:'50%',md:'50%'},margin:' 65px auto' }}>
                        <Typography variant="h3" sx={{fontWeight: '600', color: 'var(--primary-color)', fontSize:{xs:'30px',sm:'48px' ,md:'57px'},textAlign:'center' }}>Book trusted help for home tasks</Typography>
                    </Box>
                    <Box
                        sx={{
                            justifyContent: "center",
                            alignItems: "center",
                            m: 5,
                            width: '90%', textAlign: 'center',
                            margin:' 0px auto'
                        }}
                    >
                        <TextField
                            variant="outlined"
                            placeholder="What do you need help with?"
                            sx={{
                                width: { xs: "90%", sm: "70%", md: "50%" },
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "50px",
                                    paddingRight: 0,
                                    "& fieldset": {
                                        borderColor: "#df731cff",
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "#df731cff",
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#df731cff",
                                    },
                                },
                            }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            sx={{
                                                bgcolor: "#df731cff",
                                                color: "white",
                                                borderRadius: "50%",
                                                p: {xs:'10px',md:'7px',sm:'10px'},
                                                "&:hover": { bgcolor: "#df731cff" },
                                            }}
                                        >
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
                </Box>

            </Container>
        </>
    )
}
export default Header;