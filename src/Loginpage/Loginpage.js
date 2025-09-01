import "./Loginpage.css"; // Import the CSS file
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import HttpsIcon from '@mui/icons-material/Https';
import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";
import { useState } from "react";

const Loginpage = () => {
  const [Name, setName] = useState("")
  const [Password, setPassword] = useState("")
  const Nav1 = useNavigate();
  const Nav2 = useNavigate();

  const handleUser = (e) => {
    setName(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  const HandleSignUp = () => {
    Nav1('/signup');
  };
  const HandleLogin = (obj) => {
    obj.preventDefault();
    if(Name === "" && Password === ""){
      alert("Input fields cannot be empty!!!")
    }
    else if(Name.length <= 3){
      alert("Please enter a valid UserName")
    }
    else if(Password.length <= 4){
      alert("Please enter a valid Password")
    }
    else Nav2('/');
  };

  return (
    <div className="main">
      <div className="pic"></div>
    <div className="login-page">
      <center>
       <div className="logo1"></div>
        <h1 style={{marginBottom:'1px',marginTop:'0px'}}>WELCOME BACK</h1>
        <p style={{marginTop:'1px'}}>Please sign in to continue</p>
        </center>
      <form>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="User Name" variant="standard" onChange={handleUser} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <HttpsIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="Password" type="password" variant="standard" onChange={handlePassword}/>
        </Box>
        <div className="ForgetPass">
        <a href='' style={{textDecoration:'none'}}>Forgot Password?</a>
        </div>
      </form>
        <Button variant="contained" onClick={HandleLogin}> 
          LOG IN 
          <LoginIcon sx={{mr: 1, my: 0.5 }} />
          </Button>
      <center>
      <br></br>
          <Divider>OR</Divider>
          <br></br>
          Dont't have an account?
          <Box sx={{ '& button': { m: 1 } }}>
            <div className="head" style={{marginBottom:'0px'}}>
              <Button size="small" onClick={HandleSignUp}>SIGN UP</Button>
            </div>
          </Box>
      </center>
    </div>
    </div>
  );
};

export default Loginpage;
