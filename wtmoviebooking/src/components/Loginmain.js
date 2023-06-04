import React, { useState,useEffect } from "react";
import Register from "./pages/Register";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {Apicalls} from "./Apicalls";
 
// Material UI Imports
import {
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  IconButton,
  Button,
  Input,
  Checkbox,
  Alert,
  Stack,
} from "@mui/material";

// Material UI Icon Imports
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";

import { ReactSession } from 'react-client-session';
// Email Validation
const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export default function Loginmain() {
  var verifyEmail;
  var verifyPassword;

  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

  //Inputs
  let [emailInput, setEmailInput] = useState();
  let [passwordInput, setPasswordInput] = useState();
  let [idInput, setIdInput] = useState();
  const [rememberMe, setRememberMe] = useState();
  let [username, setUsername] = useState('');
  let [coins, setCoins] = useState('');
  let [discountedValue, setDiscountedValue] = useState('');
  const [renderMovies, setRenderMovies] = useState(false);
  // Inputs Errors
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // Overall Form Validity
  const [formValid, setFormValid] = useState();
  const [success, setSuccess] = useState();

  // Handles Display and Hide Password
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // Label for Checkbox
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  // Validation for onBlur Email
  const handleEmail = () => {
    console.log(isEmail(emailInput));
    if (!isEmail(emailInput)) {
      setEmailError(true);
      return;
    }

    setEmailError(false);
  };

  // Validation for onBlur Password
  const handlePassword = () => {
    if (
      !passwordInput ||
      passwordInput.length < 5 ||
      passwordInput.length > 20
    ) {
      setPasswordError(true);
      return;
    }

    setPasswordError(false);
  };

  //handle Submittion
  const handleSubmit = () => {
    setSuccess(null);
    //First of all Check for Errors

    // If Email error is true
    if (emailError || !emailInput) {
      setFormValid("Email is Invalid. Please Re-Enter");
      return;
    }

    // If Password error is true
    if (passwordError || !passwordInput) {
      setFormValid(
        "Password is set btw 5 - 20 characters long. Please Re-Enter"
      );
      return;
    }
    setFormValid(null);
   
    // Proceed to use the information passed
    console.log("Email : " + emailInput);
    console.log("Password : " + passwordInput);
    console.log("Remember : " + rememberMe);
    getId();
    console.log("id: "+ idInput);
    
    
    //Show Successfull Submittion
    
    
  };
 
  const getId= () => {
    fetch('http://localhost:8081/api/users/'+ idInput).then(
      response => response.json()
    ).then(data => {
      console.log(data)
      verifyEmail = data.user.email;
      verifyPassword = data.user.password;
      username = data.user.name;
      console.log(verifyEmail);
      console.log(emailInput);
      console.log(username);
      getLoyalty();
      // verifyId();
    }, (e) =>{
      console.log(e);
    })

  } 
  const getLoyalty= () => {
   const ldetail ={
    id: idInput,
   }
   Apicalls.GetLoyalty(ldetail)
   .then(response => {
    console.log(response.data.coins);
    setCoins(response.data.coins);
    setDiscountedValue(response.data.discountedvalue)
    // ReactSession.set("coins",response.data.coins)
    verifyId();
   })
   .catch(error => {
    console.error(error);
  });

  } 
  
   const verifyId= () => {
   if(verifyEmail != emailInput){
    setFormValid("email not matched")
   }
   else if(verifyPassword != passwordInput){
    setFormValid("password does not match")
   }
   else{
    setFormValid(null);
    setUsername(username);
    setSuccess("form submitted")
    // if (success) {
    //   setUsername(username);
  
    //   setRenderMovies(true);
    //   ReactSession.set("username", username);
    //   ReactSession.set("id", idInput);
    //   ReactSession.set("password",passwordInput);
    //   ReactSession.set("email",emailInput);
    //   console.log(emailInput);
    //   return;
    //}
    // if (success) {
    //   // setSuccess("Form Submitted Successfully");
    //   navigate("/movies"); // Replace "/another-component" with the desired route
    //   ReactSession.set("username",username);
    //   return;
    // }
   }
   }
  //  if (renderMovies) {
  //   navigate("/movies");
  // }
  useEffect(() => {
    if (success) {
      
      setRenderMovies(true);
      ReactSession.set("username", username);
      ReactSession.set("id", idInput);
      ReactSession.set("password", passwordInput);
      ReactSession.set("email", emailInput);
      ReactSession.set("coins", coins);
      ReactSession.set("discountedValue",discountedValue);
       navigate("/movies");
    }
  }, [success]);
  return (
    <div style={{width: "350px",padding:"10px",margin:"auto"}}>
      <div style={{ marginTop: "5px" }}>
        <TextField
          label="Email Address"
          fullWidth
          error={emailError}
          id="standard-basic"
          variant="standard"
          sx={{ width: "100%" }}
          value={emailInput}
          InputProps={{}}
          size="small"
          onBlur={handleEmail}
          onChange={(event) => {
            setEmailInput(event.target.value);
          }}
        />
      </div>
      <div style={{ marginTop: "5px" }}>
        <TextField
          label="User id"
          fullWidth
          id="standard-basic"
          variant="standard"
          sx={{ width: "100%" }}
          value={idInput}
          InputProps={{}}
          size="small"
          onChange={(event) => {
            setIdInput(event.target.value);
          }}
          
        />
      </div>
      <div style={{ marginTop: "5px" }}>
        <FormControl sx={{ width: "100%" }} variant="standard">
          <InputLabel
            error={passwordError}
            htmlFor="standard-adornment-password"
          >
            Password
          </InputLabel>
          <Input
            error={passwordError}
            onBlur={handlePassword}
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            onChange={(event) => {
              setPasswordInput(event.target.value);
            }}
            value={passwordInput}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>

      <div style={{ fontSize: "13px" }}>
        <Checkbox
          {...label}
          size="medium"
          onChange={(event) => setRememberMe(event.target.checked)}
        />
        Remember Me
      </div>

      <div style={{ marginTop: "10px" }}>
        <Button
          variant="contained"
          fullWidth
          startIcon={<LoginIcon />}
          onClick={handleSubmit}
        >
          LOGIN
        </Button>
      </div>

      {/* Show Form Error if any */}
      {formValid && (
        <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
          <Alert severity="error" size="small">
            {formValid}
          </Alert>
        </Stack>
      )}

      {/* Show Success if no issues */}
      {success && (
        <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
          <Alert severity="success" size="small">
            {success}
          </Alert>
          
        </Stack>
      )}

      <div style={{ marginTop: "7px", fontSize: "15px" }} margin="left">
        {/* <a>Forgot Password</a> */}
        <br />
        Don't have an account ?{" "}
        <Link style={{ textDecoration: "underline", color: "blue" }} to="/register">
          Sign Up
        </Link>
      </div>
    </div>
  );
}