import React from "react";
import { Box, Typography, Button, FormControl, MenuItem, Select, InputLabel, Card, Container } from "@mui/material";
import Image from "../../assets/Images/mony.jpg";
import './Monyform.css'
function Monyform() {
    //   const [city, setCity] = React.useState("Albany");
    //   const [category, setCategory] = React.useState("Help Moving");
    const [city, setCity] = React.useState("Albany");
    const [category, setCategory] = React.useState("Help Moving");

    return (
        <>
            <Container maxWidth="full" sx={{ height: "auto", width: "100%", marginY: "40px" }}>
                <Box class="max_width">
                    <Box sx={{ height: "auto", width: "100%", display: "flex", flexWrap: "wrap", padding: "10px" }}>
                        <Box sx={{ height:{xs:"100%",sm:"100%",md:"95vh"}, width: { xs: "100%", sm: "100%", md: "65%" } }}>
                            <img className="money" src={Image} />
                        </Box>
                        <Box sx={{ width: { xs: "100%", sm: "100%", md: "33%" }, padding: "2px 2px" }}>
                            {/* <Typography variant="h4" sx={{ fontWeight: "600", color: "var(--forth-color)" }}>What is TaskRabbit?</Typography>
                            <Typography sx={{ paddingTop: "20px", fontSize: "19px", color: "var(--forth-color)" }}>
                                TaskRabbit connects busy people in need of help with trusted local Taskers who can lend a hand with everything from home repairs to errands. As a Tasker, you can get paid to do what you love, when and where you want — all while saving the day for someone in your city.
                            </Typography> */}

                            <Box
                                sx={{
                                    width: "100%",
                                    maxWidth: 420,
                                    padding: "20px",
                                    margin: "0 auto",
                                    fontFamily: "sans-serif",
                                }}
                            >
                                <Typography variant="h4" fontWeight="bold" mb={2}>
                                    Earn money your way
                                </Typography>

                                <Typography variant="body1" color="text.secondary" mb={4}>
                                    See how much you can make <br /> tasking on TaskRabbit
                                </Typography>

                                {/* Select Area */}
                                <Typography fontWeight="bold" mb={1}>
                                    Select your area
                                </Typography>
                                <FormControl fullWidth sx={{ mb: 3 }}>
                                    <Select
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        displayEmpty
                                        sx={{ height: 50 }}
                                    >
                                        <MenuItem value="Albany">Albany</MenuItem>
                                        <MenuItem value="New York">New York</MenuItem>
                                        <MenuItem value="Los Angeles">Los Angeles</MenuItem>
                                    </Select>
                                </FormControl>

                                {/* Category */}
                                <Typography fontWeight="bold" mb={1}>
                                    Choose a Category
                                </Typography>
                                <FormControl fullWidth sx={{ mb: 4 }}>
                                    <Select
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        displayEmpty
                                        sx={{ height: 50 }}
                                    >
                                        <MenuItem value="Help Moving">Help Moving</MenuItem>
                                        <MenuItem value="Cleaning">Cleaning</MenuItem>
                                        <MenuItem value="Furniture Assembly">Furniture Assembly</MenuItem>
                                    </Select>
                                </FormControl>

                                {/* Price */}
                                <Typography variant="h3" fontWeight="bold" mb={3}>
                                    $50{" "}
                                    <Typography
                                        variant="body1"
                                        component="span"
                                        color="text.secondary"
                                        fontWeight="normal"
                                    >
                                        per hour
                                    </Typography>
                                </Typography>

                                {/* Button */}
                                <Button
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        bgcolor: "#0c6b41",
                                        height: 50,
                                        fontSize: "16px",
                                        textTransform: "none",
                                        "&:hover": { bgcolor: "#085a35" },
                                    }}
                                >
                                    Get started
                                </Button>

                                {/* Sign In */}
                                <Typography
                                    variant="body2"
                                    textAlign="center"
                                    mt={3}
                                    color="text.secondary"
                                >
                                    Already have an account?{" "}
                                    <a href="/signin" style={{ color: "#0c6b41", cursor: "pointer",fontSize:"16px" }}>Sign in</a>
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Monyform
