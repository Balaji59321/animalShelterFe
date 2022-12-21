import { Button, ImageListItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import Logo from "./../Assets/Logo.png";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [modal,showModal] = useState(false); 
  return (
    <Box sx={{justifyContent:"space-between",display:"flex",alignItems:"center",position: "relative"}} px={{xs: 2,md: 7}} py={2}>
      <Box sx={{display: "flex",alignItems:"center"}}>
        <ImageListItem sx={{width: {xs: 50,md: 100}}}>
          <img src={Logo} alt="logo" />
        </ImageListItem>
        <Typography variant='h4' sx={{fontWeight: "bold",fontSize: {xs: "20px",md: "40px"}}}>Animal Shelter</Typography>
      </Box>
      <Box sx={{gap: 3,textDecoration:"underline",display: {xs: "none",md: "flex"}}}>
        <Typography>Home</Typography>
        <Typography>Contact Us</Typography>
      </Box>
      <Box sx={{gap: 2,display: {xs: "none",md: "flex"}}} py={0}>
        <TwitterIcon />
        <FacebookIcon />
        <LinkedInIcon />
      </Box>
      <Button sx={{display: {xs: "flex",md: "none"},color: "#111"}} onClick={() => showModal(prev => !prev)}>
        <MenuIcon />
      </Button>
      {modal && <Box sx={{width: "30%",backgroundColor: "#ccc",position: "absolute",top: 50,right: 10,display: "flex",flexDirection: "column",justifyContent:"center",gap: 3}} p={2}>
        <Box sx={{display: "flex",gap: 1}}>
          <TwitterIcon />
          <FacebookIcon />
          <LinkedInIcon />
        </Box>
        <Typography>Home</Typography>
        <Typography>Contact Us</Typography>
        </Box>}
    </Box>
  )
}

export default Header