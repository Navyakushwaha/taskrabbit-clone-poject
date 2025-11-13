import {Typography, Container, Box, IconButton, InputAdornment, TextField } from "@mui/material";
import "./StarRating.css"

const block=[
    {
        title:'Elizabeth P.',
        para:'Vitalii assembled the IKEA Norli drawer chest for me in less than 30 minutes, and he assembled a metal wire shelving unit as well in about 10 minutes. He also fixed a drawer on an already assembled desk so it',
        anchor:'IKEA Furniture Assembly',
        link:'https://mui.com/material-ui/react-link/'
    },
    {
        title:'Tiffany B.',
        para:'David did an awesome job assembling crib and dresser for nursery. Really appreciate this! He cleaned up the area after his work, organized the boxes for easy disposal and went through the',
        anchor:'Furniture Assembly',
        link:'https://mui.com/material-ui/react-link/'
    },
    {
        title:'Amanda L.',
        para:'I hired Joe to patch 2 holes on my wall and 1 hole on my ceiling. Joe was great with communication, was fast, professional and did a fantastic job. He even came back to do a second layer on the patches to mak',
        anchor:'Home Repairs',
        link:'https://mui.com/material-ui/react-link/'
    },
    {
        title:'Sabrina K.',
        para:'Aleksandr was fantastic! He came with all the equipment to do the job, even the hardware I did not know I would need. He hung a heavy chandelier perfectly and fixed a cabinet to our wall. 100% would hire',
        anchor:'IKEA Furniture Assembly',
        link:'https://mui.com/material-ui/react-link/'
    },
    {
        title:'Jana T.',
        para:'Jose fixed my AC drain line which was clogging my master bathroom sink. He was prompt, communicative, and efficient. Highly recommend!',
        anchor:'Furniture Assembly',
        link:'https://mui.com/material-ui/react-link/'
    },
    {
        title:'Elisa R.',
        para:'Michael did a great job helping us install frameless glass hinged shower doors with an unusual set up. He was patient and willing to help figure it out with us. Thank you Michael!',
        anchor:'Home Repairs',
        link:'https://mui.com/material-ui/react-link/'
    },
]
function StarRating(){
    return(
        <>
        <Container maxWidth="full" sx={{ height: { xs: 'auto', sm: 'auto', md: 'auto' }}}>
            <Box class="max_width">
                <Typography variant="h4" sx={{height:'50px',fontWeight:'600',color:'var(--seven-color)'}}>See what happy customers are saying about Taskrabbit</Typography>
                <Box sx={{display:'flex',flexWrap:'wrap'}}>
                  {block.map((item)=>(
                <Box sx={{height:{xs:'150px' ,sm:'250px',md:'250px'},width:'33%',p:'15px 15px',lineHeight:'28px',fontSize:'18px',gap:'20px',color:'#021b11ff'}}>
                    <Typography variant="h6" sx={{fontWeight:'600',p:'10px'}}>{item.title}</Typography>
                    <Typography variant="p">{item.para}</Typography>
                    <Typography variant="h6" sx={{fontWeight:'600',p:'10px'}}>
                        <a className="a_sty" href={item.link} target="_blank">{item.anchor}</a>
                    </Typography>
                </Box>
                  ))}
              </Box>
            </Box>
        </Container>
        </>
    )
}
export default StarRating;