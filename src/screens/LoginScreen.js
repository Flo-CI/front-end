import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import { redirect, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../state/store";
import { setPolicyNumber, setPasswordValue } from '../hooks/LoginUtils';
import background from "../assets/background.png";
import logo from "../assets/securian_name.png";

function LoginScreen({ handleAuthentication }) {

  // Base URL for database calls
  const base_policy = "https://ciflo.azurewebsites.net/user/login?policyNumber=";
  const base_password = "&password=";
  const [data, setData] = useState(null);

  // State variable that holds the user's inputted text and text when they click the log-in button
  const [policyNumber, setPolicyNumberLocally] = useState("");
  const [passwordValue, setPasswordValueLocally] = useState("");

  // Event handler to update accountValue state when the user clicks the log-in button
  const handlePolicyNumberChange = (event) => {
    setPolicyNumber(event.target.value);
    setPolicyNumberLocally(event.target.value);
  };
  const handlePasswordValueChange = (event) => {
    setPasswordValue(event.target.value);
    setPasswordValueLocally(event.target.value);
  };

  // Used to navigate between pages
  const navigate = useNavigate();

  // Update redux store
  const dispatch = useDispatch();

  // Function to perform login verification
  const performLogin = async () => {
    try {
      const fetchResult = await fetch(base_policy + policyNumber + base_password + passwordValue, {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      });
      const newData = await fetchResult.json();
      setData(newData);

      // Check the response from the backend here
      if (newData.message === "User Login Successful") {
        // Perform actions upon successful verification
        dispatch(login(policyNumber));
        navigate("/dashboard");
      } else {
        // Handle invalid login credentials
        alert("Invalid credentials");
      }
    } catch (error) {
      // Handle fetch errors or backend unavailability
      alert("Error verifying credentials");
    }
  };

  // Event handler to trigger login verification
  const handleLogin = () => {
    if (policyNumber !== "" && passwordValue !== "") {
      performLogin();
    } else {
      alert("Please enter both policy number and password");
    }
  };

  // Calls POST Database API of user inputted account number

  return (
    <div className="flex flex-row justify-center items-center h-screen w-screen">
      <div className="flex flex-auto items-center justify-center h-screen">
        <img
          src={background}
          alt="background"
          className="h-screen w-full blur-sm hue-rotate-30"
        />
        <div className="flex justify-center items-center z-10 p-12 max-w-1/2 absolute">
          {/*<h1 className="text-8xl font-bold text-green-900">Sedurian Canada</h1>*/}
          <img src={logo} alt="FloCI Logo" className="h-80" />
        </div>
      </div>

      {/* Login Components */}
      <div className="flex flex-col bg-gray-50 items-center justify-center h-screen p-8 w-4/12">
        <h1 className="text-4xl font-bold">Flo.CI Login</h1>
        {/* Login text boxes and buttons */}
        <Grid container justify="center" alignItems="center" direction="column">
          <Grid item>
            <h2>
              <TextField
                id="filled-basic"
                label="Please enter policy number"
                variant="filled"
                color="success"
                onChange={handlePolicyNumberChange}
                sx={{ m: 3, width: "42ch" }}
              />
            </h2>
          </Grid>
          <Grid item>
            <h2>
              <TextField
                id="filled-basic"
                label="Please enter policy password"
                type="password"
                variant="filled"
                color="success"
                onChange={handlePasswordValueChange}
                sx={{ m: 1, width: "42ch" }}
              />
            </h2>
          </Grid>
          <Grid item>
            <h2>
              <Stack
                style={{ justifyContent: "center" }}
                spacing={2}
                direction="row"
                sx={{ m: 2 }}
              >
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleLogin}
                >
                  Log-In
                </Button>
              </Stack>
            </h2>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default LoginScreen;
