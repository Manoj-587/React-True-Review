import React, { useState } from "react";
import "./Register.css"
import { useNavigate } from "react-router-dom";
import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import XIcon from '@mui/icons-material/X';
import { Divider } from "@mui/material";

const Register = () => {
  const[Name,setName] = useState("");
  const[Password,setPassword] = useState("");
  const[ConfirmPass,setConfirmPass] = useState("");
  const[Email,setEmail] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handleConfirmPass = (e) => {
    setConfirmPass(e.target.value);
  }

  const Nav = useNavigate()
  const HandleRegister = (obj) => {
    obj.preventDefault();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(Name === "" && Password === "" && Email === ""){
      alert("Sorry again the input fields cannot be empty!!!")
    }
    else if(Name.length < 3){
      alert("UserName must be atleast 3 characters required!!!")
    }
    else if(!emailPattern.test(Email)){
      alert("Please Enter your Valid Email Address")
    }
    else if(Password.length <= 4){
      alert("Password must be atleast 5 characters")
    }
    else if(Password !== ConfirmPass){
      alert("Please correct your Confirm Password")
    }
    else Nav('/')
  }
  return (
    <div className="Main">
      <div className="picture"></div>
    <div className="register-page">
      <center>
      <div className="logo"></div>
        <h1 style={{marginBottom:'0px',marginTop:'0px'}}>REGISTER</h1>
        <p style={{marginTop:'0px'}}>to create account</p>
        </center>
      <form>
        <div className="form-group">
          <label>

              <table>
            <tr>
              <td><Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            </Box></td>
            <td>User Name</td>
            </tr>
            </table>
            </label>
          <div className="parent_box"><input type="text" name="username" className="box" onChange={handleName}/></div>
        </div>
        <div className="form-group">
          <label>
          <div>
              <table>
            <tr>
              <td><Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            </Box></td>
            <td>Email</td>
            </tr>
            </table>
            </div>
            </label>
            <div className="parent_box"><input type="email" name="email"  className="box" onChange={handleEmail}/></div>
        </div>
        <div className="form-group">
          <label>
          <div>
              <table>
            <tr>
              <td>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              </Box></td>
            <td>Password</td>
            </tr>
            </table>
            </div>
          </label>
          <div className="parent_box"><input type="password"name="password" className="box" onChange={handlePassword}/></div>
        </div>
        <div className="form-group">
          <label>
          <div>
              <table>
            <tr>
              <td>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              </Box></td>
            <td>Confirm Password</td>
            </tr>
            </table>
            </div>
          </label>
          <div className="parent_box"><input type="password" name="confirmPassword" className="box" onChange={handleConfirmPass}/></div>
        </div>
        <br></br>
       <center> <Button variant="contained" size="medium" onClick={HandleRegister}> SIGN UP</Button></center>
      </form>

      <center>
        <div>
        <br></br>
        <Divider>OR</Divider> <br></br>
          Or SignUp using
          <div>
            <GoogleIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <FacebookRoundedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <XIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          </div>
        </div>
        </center>
    </div>
    </div>
  );
};

export default Register;
