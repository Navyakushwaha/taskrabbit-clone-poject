import { useState} from "react";
import { Typography,Container,Box,Drawer,Button,List,Divider,ListItem,ListItemButton,ListItemIcon,ListItemText } from "@mui/material";

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';

import { FiMenu } from "react-icons/fi";
import "./Navbar.css"
function Navbar() {

     const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250,color:"var(--seven-color)"}} role="presentation" onClick={toggleDrawer(false)}>
        <Divider />
      <List>
        {['Services'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton componenet='a' href="/block">
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['sign up / Log in'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton componenet='a' href="form">
              <ListItemIcon>
                {index % 2 === 0 ? <AccountBoxIcon /> : <AccountBoxIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider/>
      <List>
        {['Become a Tasker'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton componenet='a' href="/taskers">
              <ListItemIcon>
                {index % 2 === 0 ? <PlaylistAddCheckIcon /> : <PlaylistAddCheckIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

    return (
        <>
            <Container maxWidth='full' sx={{ width: { xs: "100%", sm: "100%", md: "100%", lg: '100%', xl: '100%' }, height: { xs: "16vh", sm: "14vh", md: "12vh", lg: '12vh', xl: '12vh' }, background: "var(--tirnery-color)", borderBottom: "1px solid var(--tirnery-color)" }}>
                <Box class="max_width">
                    <Box sx={{ height: { xs: "16vh", sm: "14vh", md: "12vh" }, display: 'flex', width: { xs: "100%", sm: "100%", md: "100%" } }}>
                        <Box sx={{ bgcolor: 'var(--tirnery-color)', height: { xs: "16vh", sm: "14vh", md: "12vh" }, width: { xs: "100%", sm: "100%", md: "35%" }, p: { xs: "0px", sm: "10px", md: "10px" }, fontSize: { xs: "20px", sm: "20px", md: "20px" }, textAlign: { xs: 'center', sm: 'center', md: 'left' } }}>
                            <Typography variant="h3" sx={{ color: "var(--primary-color)", textShadow: "2px 2px 4px black",fontSize:{xs:"2rem",sm:"3rem",md:"3rem"} }}>
                                <Button  onClick={toggleDrawer(true)}><span className="hide"><FiMenu /></span></Button>
                                <Drawer open={open} onClose={toggleDrawer(false)}>
                                    {DrawerList}
                                </Drawer>
                                 HelperHub
                            </Typography>

                        </Box>
                        <Box sx={{ bgcolor: 'var(--tirnery-color)', height: { xs: "20vh", sm: "18vh", md: "12vh" }, width: { xs: "90%", sm: "50%", md: "73%" }, display: { xs: 'none', sm: 'none', md: 'flex' }, p: { xs: "0px", sm: "10px", md: "13px 22px" } }}>
                            <a className="txt" href="/block">Services</a>
                            <a className="txt" href="form">Signup/Login</a>
                            <a className="tasker" href="/taskers">Become a Tasker</a>
                        </Box>
                        {/* import headerImage from "../../assets/header.jpg"; */}
                        {/* backgroundImage: `url(${headerImage})`, */}
                    </Box>
                </Box>

            </Container>
        </>
    )
}
export default Navbar;