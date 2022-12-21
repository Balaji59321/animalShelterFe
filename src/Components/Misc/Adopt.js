import { Button, FormControl, MenuItem, Modal, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useRef, useState } from 'react';
import PortalModal from './PortalModal';
import CloseIcon from '@mui/icons-material/Close';
import axios from "./../axios";
import { useAlert } from 'react-alert'

const Adopt = (props) => {

   const alert =useAlert();
  // State Variable for storing valued changed by user
    const [name,setName] = useState("");
    const [mail,setMail] = useState("");
    const [phone,setPhone] = useState("");
    const [type,setType] = useState("dog");
    const [age,setAge] = useState(0);
    const [family,setFamily] = useState("lab");
    const [data,setData] = useState([])

    useEffect(() => {
      const call = async () => {
        const resp = await axios.get("/get");
        const temp = resp.data.filter(ele => ele.type === "giveaway")
        setData(resp.data);
      }
      call()
    },[])

    const submitHandler = async (types) => {
      if(!(name.trim().length > 0 && age > 0 && mail.trim().length>0 && phone.trim().length > 0)){
       alert.show("Please Enter All the fields")
       return;
      }
      if(types === "adopt"){
        const resp = await axios.post("/adopt",{name,mail,phone,type,family,choice: "adopt"})
        alert.show("Recorded Successfully")
      }
      else{
      const resp = await axios.post("/adopt",{name,mail,phone,type,family,choice: "giveaway",age})
      alert.show("Recorded Successfully")
      }
    }

    // const give_pet = [...new Set(data.map(ele => ele.type))]
    const pet = [
        {
          value: 'cat',
          label: 'Cat',
        },
        {
          value: 'dog',
          label: 'Dog',
        }
      ];
    
      const breed = [
        {
          value: 'lab',
          label: 'Lab',
        },
        {
          value: 'beagle',
          label: 'Beagle',
        },
        {
          value: 'dasch',
          label: 'Dasch',
        },
        {
          value: 'golden retriever',
          label: 'Golden Retriever',
        },
        {
          value: 'persian cat',
          label: 'Persian Cat',
        }
      ];
      
  return (
    <PortalModal>
          <Box sx={{'& .MuiTextField-root': { m: 1, width: {xs: "20ch",md: '25ch'},position: "relative"}}} py={5} px={{xs: 3,md: 10}}>; 
            <CloseIcon sx={{position :"absolute",top: 0,right: 0,padding: "15px",cursor: "pointer"}} onClick={props.updateModal}/>
            <Typography variant='h5' pb={2}>{props.title ? props.title : "Adopt A Pet"}</Typography>
            <Typography variant='h6' pb={1}>{props.subtitle ? props.subtitle : "What type of pet you want to adopt ?"}</Typography>
            <FormControl>
              <TextField
                  id="outlined-select-standard"
                  select
                  label="Pet Type"
                  defaultValue="dog"
                  sx={{width: "40%"}}
                  required
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  {pet.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
              </TextField>
              <TextField
                  id="outlined-select-standard"
                  select
                  label="Breed"
                  defaultValue="lab"
                  sx={{width: "80%"}}
                  required
                  value={family}
                  onChange={(e) => setFamily(e.target.value)}
                >
                  {breed.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
              </TextField>
              {props.title && <TextField id="outlined-basic" label="Age" variant="outlined" required value={age}
                  onChange={(e) => setAge(e.target.value)}/>}
              <Typography p={2}>Please Fill in your Details</Typography>
              <TextField id="outlined-basic" label="Full Name" variant="outlined" required value={name}
                  onChange={(e) => setName(e.target.value)}/>
              <TextField id="outlined-basic" label="Email" variant="outlined" required value={mail}
                  onChange={(e) => setMail(e.target.value)}/>
              <TextField id="outlined-basic" label="Phone" variant="outlined" required value={phone}
                  onChange={(e) => setPhone(e.target.value)}/>
            </FormControl>
            <Box sx={{display: "flex",justifyContent: {xs: "center",md: "flex-end"}}}>
                <Button variant='contained' color='error' style={{margin: "10px",right: 0}} onClick={() => submitHandler(props.button ? "giveaway" : "adopt")}>{props.button ? props.button : "Request For Adoption"}</Button>
            </Box>
          </Box>
        </PortalModal>
  )
}

export default Adopt