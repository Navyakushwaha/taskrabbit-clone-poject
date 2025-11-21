import imag from '../../../assets/Images/form1.png'
import './Cards.css'
import Data from '../../../Api/Api.json'
import { Container, Box, Typography } from "@mui/material";

const Cards = () => {
  return (
    <>
      <Container maxWidth="full" sx={{ height: "auto",width:"100%",paddingBottom:"40px"}}>
        <Box class="max_width">
          <Typography variant='h4' sx={{ textAlign: "center", fontWeight:"600", padding: "20px", color: "#202020ff" }}>Hire a trusted Tasker presto.</Typography>
          <Box sx={{ height:"auto",width:{xs:"100%" ,sm:"100%",md:"100%"}, display:"flex",flexWrap:"wrap",background:"#fff",gap:"18px" }}>
            {Data.map((item) => (
              <Box sx={{ height:"auto",background:"#fff",width:{xs:"100%" ,sm:"45%",md:"32%"},margin:{xs:"auto"} }}>
                <Box sx={{ height: "200px" }} >
                  <img className='card_img' src={item.image} />
                </Box>
                <Box sx={{border:"1px solid #d4d1d1ff",borderRadius:"0px 0px 5px 5px",height:"auto"}}>
                  <Typography sx={{borderBottom:"1px solid gray",margin:"15px",wordSpacing:"2px",fontWeight:"600",color:"#444242ff"}}>{item.title}</Typography>
                  <a className='target' href='#'>{item.para1}</a><br />
                  <a className='target' href='#'>{item.para2}</a><br />
                  <a className='target' href='#'>{item.para3}</a><br />
                  <a className='target' href='#'>{item.para4}</a><br />
                  <a className='target' href='#'>{item.para5}</a><br />
                  <a className='target' href='#'>{item.para6}</a><br />
                  <a className='target' href='#'>{item.para7}</a><br />
                  <a className='target' href='#'>{item.para8}</a><br />
                  <a className='target' href='#'>{item.para9}</a><br />
                  <a className='target' href='#'>{item.para10}</a><br />
                  <a className='target' href='#'>{item.para11}</a><br />
                  <a className='target' href='#'>{item.para12}</a><br />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

      </Container>
    </>
  )
}
export default Cards