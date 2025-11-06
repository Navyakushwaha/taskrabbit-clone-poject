import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Box ,IconButton,InputAdornment,TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css"
function Header() {
    return (
        <>
            <Container maxWidth='full' sx={{
                width: { xs: "100%", sm: "100%", md: "100%" }, height: {
                    xs: "16vh", sm: "70vh", md: "70vh",
                    backgroundImage: "url(../../assets/header.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: { xs: "200px", sm: "300px", md: "400px" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexWrap:'wrap',
                    padding:'60px'
                }
            }}>
                <Box sx={{width:'40%',textAlign:'center',pt:"30px"}}>
                    <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#03377aff',fontSize:'55px' }}>Book trusted help for home tasks</Typography>
                </Box>
                <Box
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        p: 2,
                        width:'80%',textAlign:'center',
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
                                    borderColor: "#03377aff",
                                },
                                "&:hover fieldset": {
                                    borderColor: "#03377aff",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#03377aff",
                                },
                            },
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        sx={{
                                            bgcolor: "#03377aff",
                                            color: "white",
                                            borderRadius: "50%",
                                            p: 2,
                                            "&:hover": { bgcolor: "#03377aff" },
                                        }}
                                    >
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>

            </Container>
        </>
    )
}
export default Header;