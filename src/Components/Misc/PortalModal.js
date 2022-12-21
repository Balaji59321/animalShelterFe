import { TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const PortalModal = ({children}) => {

  return (
    <>
      {ReactDOM.createPortal(<Box sx={{position:"absolute",width: "100%",height: "100%",backgroundColor: "rgba(1,1,1,0.4)",top: 0,left: 0,overflow: "hidden"}} />,document.getElementById("backdrop"))}  
      {ReactDOM.createPortal(<Box sx={{position: "absolute",width: {xs: "90%",md: "50%"},height:"auto",backgroundColor:"rgb(234,249,254)",transform:{xs: "translate(5.5%,2%)",md:"translate(50%,25%)"},top:0,left: 0,overflow: "hidden"}}>{children}</Box>,document.getElementById("overlay"))}
    </>
  )
}

export default PortalModal