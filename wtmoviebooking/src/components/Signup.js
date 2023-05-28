import React, { useState, useEffect } from "react";
import { Apicalls } from "./Apicalls";
import { useNavigate } from "react-router-dom";
import { TextField, InputAdornment, FormControl, InputLabel, IconButton, Button, Input, Checkbox, Stack, Snackbar } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import { Alert } from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import Loginmain from "./Loginmain";
import { ReactSession } from "react-client-session";

const isEmail = (email) => /[\s\S]*/i.test(email);

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [usernameInput, setUsernameInput] = useState();
  const [emailInput, setEmailInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const [sucessful, setSuccessful] = useState(false);
  const [ids, setIds] = useState();
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();
  const [formValid, setFormValid] = useState(null);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const handleUsername = () => {
    if (!usernameInput) {
      setUsernameError(true);
      return;
    }
    setUsernameError(false);
  };

  const handleEmail = () => {
    if (!isEmail(emailInput)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
  };

  const handlePassword = () => {
    if (!passwordInput || passwordInput.length < 5 || passwordInput.length > 20) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);
  };

  const handleSubmit = () => {
    setFormValid(null);

    if (usernameError || !usernameInput) {
      setFormValid("Username is set between 5 - 15 characters long. Please re-enter.");
      return;
    }

    if (emailError || !emailInput) {
      setFormValid("Email is invalid. Please re-enter.");
      return;
    }

    if (passwordError || !passwordInput) {
      setFormValid("Password is set between 5 - 20 characters long. Please re-enter.");
      return;
    }

    setFormValid(null);

    console.log("Username: " + usernameInput);
    console.log("Email: " + emailInput);
    console.log("Password: " + passwordInput);
    postUser();
  };

  const postUser = () => {
    const udetail1 = {
      name: usernameInput,
      email: emailInput,
      password: passwordInput
    };

    Apicalls.PostUser(udetail1)
      .then((response) => {
        console.log("response success");
        setSuccessful(true);
        console.log(response);
        setIds(response.data.id);
        showSnackbar("Registration success! Redirecting to login..", "success");
      })
      .catch((error) => {
        console.error(error);
        showSnackbar("Registration failed. Please try again.", "error");
      });
  };

  useEffect(() => {
    if (sucessful) {
      const timer = setTimeout(() => {
        navigate("/login"); // Redirect to '/login' after 2 seconds
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [sucessful, navigate]);

  const showSnackbar = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div style={{ width: "350px", padding: "10px", margin: "auto" }}>
      <div style={{ marginTop: "10px" }}>
        <TextField
          error={usernameError}
          label="Username"
          id="standard-basic"
          variant="standard"
          sx={{ width: "100%" }}
          size="small"
          value={usernameInput}
          InputProps={{}}
          onChange={(event) => {
            setUsernameInput(event.target.value);
          }}
          onBlur={handleUsername}
        />
      </div>

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
        <FormControl sx={{ width: "100%" }} variant="standard">
          <InputLabel error={passwordError} htmlFor="standard-adornment-password">
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

      <div style={{ marginTop: "10px" }}>
        <Button variant="contained" fullWidth startIcon={<LoginIcon />} onClick={handleSubmit}>
          LOGIN
        </Button>
      </div>

      {formValid && (
        <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
          <Snackbar open={true} autoHideDuration={6000} onClose={handleSnackbarClose}>
            <Alert severity="error" size="small">
              {formValid}
            </Alert>
          </Snackbar>
        </Stack>
      )}

      {sucessful && (
        <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
          <Snackbar open={true} onClose={handleSnackbarClose}>
            <Alert severity="success" size="small">
              Registration success! Redirecting to login..
              <br />
              Note this id: {ids}
            </Alert>
          </Snackbar>
        </Stack>
      )}

      <div style={{ marginTop: "7px", fontSize: "15px" }} margin="left">
        <br />
        Do you have an account?{" "}
        <Link style={{ textDecoration: "underline", color: "blue" }} to="/login">
          Log In
        </Link>
      </div>
    </div>
  );
}
