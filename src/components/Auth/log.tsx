import { Box, Button, Link, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";


const center = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh', 
  bgcolor:'var(--Bright_Gray)'
  
};

const paperStyle = {
  width:{ md:'30%',sx:"100%"},
  padding: '40px', 
  display: 'flex',
  flexDirection: 'column', 
 
 
};
const textField ={
    mb:'30px',
    color:'var(--orange)'
}
const linkstyle={
  color:'var(--orange)' ,
  mt:'30px',

  textAlign:"center",
  fontSize: 18,
  textDecoration:'none',
  fontWeight: 600,
  fontFamily:"Sous-titre",

  '&:hover': {
    textDecoration: 'none',
    color :'var(--Bright_Gray)',
  }
}

export default function Log() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/user/login", {
        username,
        password,
      }, {
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true
    });
      console.log(response);
      if (response.data.username) {
        navigate("/marcet")
      }
      
        
     
      setErrMsg(response.data.massege)
    } catch (error) {
      
    }
  }

  return (
    
    <form onSubmit={handleSubmit}>
    <Box data-aos="fade-right"  sx={center} >
    
      <Paper sx={paperStyle} >
      {errMsg && <div style={{ color: "red" }}>{errMsg}</div>}{" "}
        <Typography variant='h4'  fontFamily='Cairo, sans-serif' >LOG IN</Typography>
        <TextField  onChange={(e) => setUsername(e.target.value)}  name="email" sx={textField} id="standard-basic"  label="Email" variant="standard" />
         <TextField onChange={(e) => setPassword(e.target.value)} name="password" sx={textField} id="standard-basic"  type="password" label="Password" variant="standard" />
        <Button data-aos="fade-right"   type="submit" sx= {{ color:'var(--orange)', border:'1px solid var(--orange)',fontFamily:'Cairo, sans-serif'}} variant="outlined">SUBMIT</Button>
      
      <Link href='/' sx={linkstyle}><Typography fontFamily='Cairo, sans-serif'>Go to home</Typography></Link>

      </Paper>
    </Box>
    </form>
   
  );
}