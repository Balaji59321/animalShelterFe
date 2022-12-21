import { Box, Button, ImageList, ImageListItem, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import Adopt from './Misc/Adopt';
import Header from './../Assets/Header.png';
import Header1 from './../Assets/Header1.png';
import PetsList from './Misc/PetsList';

const Body = () => {
  const [modal,showModal] = useState(false);
  const [giveModal,setGiveModal] = useState(false);
  const [petsList,setPetsList] = useState(false);
  const [name,setName] = useState("");
  console.log("rendered1")
  return (
    <Box sx={{width: {xs:"100%",md: "75%"},margin: "auto"}} py={{xs: 3,md: 10}}>
      <Box sx={{display: 'flex',gap: 3,justifyContent:{xs: "center",md: "space-between"},flexDirection: {xs: "column",md:"row"}}} px={{xs: 3,md: 0}}>
        <Box sx={{display: "flex",flexDirection:"column",gap: 2,width: {xs: "100%",md: "50%"}}}>
          <Typography variant='h4' sx={{fontSize: {xs: "22px"}}}>Welcome to the Animal Shelter !</Typography>
          <Typography variant='h6' sx={{fontSize: {xs: "16px"}}}>Duis voluptate sit occaecat ipsum eu magna non esse voluptate enim irure excepteur. Incididunt dolor pariatur quis tempor sint excepteur consequat ad laborum officia irure do enim consequat.</Typography>
          <Box sx={{display: "flex",gap: 2,flexDirection: {xs: "column",md: "row"}}}>
            <Button variant='contained' color='error' onClick={() => showModal(prev => !prev)}>Adopt</Button>
            <Button variant='outlined' sx={{borderColor: "black",color: "black"}} onClick={() => setPetsList(prev => !prev)}>What all pets do we have ?</Button>
          </Box>
        </Box>
        <ImageListItem sx={{width: {xs: 250,md: 400}}} style={{margin: "auto"}}>
          <img src={Header} alt="adopt_a_pet"/>
        </ImageListItem>
      </Box>
      <Box sx={{textAlign: {xs: "left",md: "right"}}} pt={12}>
        <Box sx={{display: "flex",flexDirection:"column",gap: 2}} px={2}>
            <Typography variant='h4' sx={{fontSize: {xs: "22px"}}}>We do take in pets if you can't take care of them</Typography>
            <Typography variant='h6' sx={{fontSize: {xs: "16px"}}}>Laborum anim quis do adipisicing consectetur culpa enim excepteur consectetur id velit nostrud. Quis laborum cillum esse duis ut ad. Eiusmod reprehenderit aliqua do est labore nostrud eu proident ea. Cupidatat elit reprehenderit anim laborum eiusmod nulla mollit reprehenderit ad qui elit. Velit duis nostrud sit commodo esse ea magna dolor incididunt esse.</Typography>
            <Box sx={{display: "flex",gap: 2,justifyContent: "flex-end"}}>
              <Button variant='outlined'  sx={{borderColor: "black",color: "black"}} onClick={() => setGiveModal(prev => !prev)}>Give Away</Button>
            </Box>
        </Box>
      </Box>
      <Box sx={{display: 'flex',gap: 1,justifyContent:"space-between",flexDirection: {xs: "column",md: "row"}}} pt={10}>
        <ImageListItem sx={{width: {xs: 250,md: 400},margin: "auto"}}>
          <img src={Header1} alt="adopt_a_pet" />
        </ImageListItem>
        <Box sx={{width: {xs: "90%",md:"75%"}}} pt={{xs:4,md:12}} px={2}>
            <Typography variant='h6' sx={{fontSize: {xs: "16px"}}}>Laborum anim quis do adipisicing consectetur culpa enim excepteur consectetur id velit nostrud. Quis laborum cillum esse duis ut ad. Eiusmod reprehenderit aliqua do est labore nostrud eu proident ea. Cupidatat elit reprehenderit anim laborum eiusmod nulla mollit reprehenderit ad qui elit. Velit duis nostrud sit commodo esse ea magna dolor incididunt esse.</Typography>
        </Box>
      </Box>
      {modal && <Adopt updateModal={() => showModal(prev => !prev)}/>}
      {giveModal && <Adopt updateModal={() => setGiveModal(prev => !prev)} title={"GiveAway a pet"} subtitle={"What pet do you want to give away ?"} button={"Request for Give Away"} />}
      {petsList && <PetsList updateModal={() => setPetsList(prev => !prev)}/>}
    </Box>
  )
}

export default Body;