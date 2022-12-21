import { Box, Button, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import PortalModal from './PortalModal';
import axios from './../axios';
import Paper from '@mui/material/Paper';


const PetsList = (props) => {
  const [data,setData] = useState([]);
  const [catBtn,setcatBtn] = useState(true);
  const [dogBtn,setdogBtn] = useState(false);

  useEffect(() => {
    const call = async () => {
      const resp = await axios.get("/get");
      const temp = resp.data.filter(ele => ele.choice === "giveaway")
      setData(temp);
    }
    call()
  },[])


  return (
    <PortalModal>
          <Box sx={{'& .MuiTextField-root': { m: 1, width: {xs: '5ch',md: '25ch'},position: "relative"}}} py={5} px={{xs: 1,md:10}}>
            <CloseIcon sx={{position :"absolute",top: 0,right: 0,padding: "15px",cursor: "pointer"}} onClick={props.updateModal}/>
            <Typography variant='h5' pb={2}>What all pets do we have ?</Typography>
            <Button variant='contained' onClick={() => {setdogBtn(prev => !prev);setcatBtn(prev => !prev)}} color={!dogBtn ? "primary" : "warning"}>Dog</Button>
            <Button variant='contained' sx={{marginLeft: 2}} onClick={() => {setdogBtn(prev => !prev);setcatBtn(prev => !prev)}} color={!catBtn ? "primary": "warning"}>Cat</Button>
            <TableContainer component={Paper} sx={{marginTop: "15px"}}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Breed</TableCell>
                    <TableCell align="right">Age&nbsp;(in months)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.filter(ele => !dogBtn ? ele.type==="dog" : ele.type==="cat").map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.family}</TableCell>
                      <TableCell align="right">{row.age}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
    </TableContainer>
          </Box>
        </PortalModal>
  )
}

export default PetsList