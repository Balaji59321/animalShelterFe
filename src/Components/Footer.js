import { Button, Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Adopt from './Misc/Adopt';

const Footer = () => {
    const [modal,showModal] = useState(false);
  return (
    <div style={{backgroundColor: "#333",padding: "20px"}}>
        <Box sx={{display: "flex",width: {xs: "100%",md: "85%"},justifyContent: "space-between",gap: 10,margin: "auto",flexDirection: {xs: "column",md: "row"}}} px={{xs: 1,md:10}}>
            <Box sx={{color: "#fff",width: {xs:"100%",md:"40%"},display: "flex",flexDirection:"column",gap: 3}}>
                <Typography variant='h5' sx={{fontWeight:"bolder"}}>Animal Shelter</Typography>
                <Typography variant='h7'>One of the best animal places in the india.we are recognized by the government.Plase take a pledge to take care of these lovely pets</Typography>
                <Button variant='contained' color='error' sx={{width: "fit-content",fontWeight: "bolder"}} onClick={()=> showModal(prev =>!prev)}>Adopt  <ArrowRightAltIcon /></Button>
            </Box>
            <Box sx={{color: "#fff",width: {xs:"95%",md: "33%"}}}>
                <Typography sx={{fontWeight: "bold"}}>Get In Touch</Typography>
                <Box>
                    <Box sx={{display: "flex",gap: 2}} py={2}>
                        <LocationOnIcon />
                        <Typography>Elit ad Lorem quis excepteur cupidatat velit ea excepteur amet mollit irure - 600001</Typography>
                    </Box>
                    <Box sx={{display: "flex",gap: 2}} py={2}>
                        <EmailIcon />
                        <Typography>loremIpsum@gmail.com</Typography>
                    </Box>
                </Box>
                <Typography py={2} sx={{fontWeight: "bold"}}>Follow Us</Typography>
                <Box sx={{display: "flex",gap: 5}} py={0}>
                    <TwitterIcon />
                    <FacebookIcon />
                    <LinkedInIcon />
                </Box>
            </Box>
            <Box sx={{color: "#fff",width: "20%",display: "flex",flexDirection: "column",gap: 1.5}}>
                <Typography sx={{fontWeight: "bold"}}>Quick Links</Typography>
                <Typography>Home</Typography>
                <Typography>Contact Us</Typography>
            </Box>
        </Box>
        <hr style={{width: "85%",margin: "50px auto 30px auto",backgroundColor: '#ddd' }} />
        <Box sx={{display:"flex",justifyContent:"space-between",width: {xs: "100%",md: '85%'},margin: "auto",color: "white",flexDirection: {xs: "column",md: "row",gap: 20}}}>
            <Typography>CopyRight © 2023.Animal Shelter</Typography>
            <Box sx={{display:"flex",gap: 3}}>
                <Typography sx={{textDecoration:"underline"}}>Privacy Policy</Typography>
                <Typography sx={{textDecoration:"underline"}}>Terms of Service</Typography>
                <Typography sx={{textDecoration:"underline"}}>Cookie Settings</Typography>
            </Box>
        </Box>
        {modal && <Adopt updateModal={() => showModal(prev => !prev)}/>}
    </div>
  )
}

export default Footer