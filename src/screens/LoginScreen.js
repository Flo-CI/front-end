import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";

function LoginScreen() {
  // Base URL for database calls
  const base_url = "https://ciflo.azurewebsites.net/demo/claim?policyNumber=";
  const [data, setData] = useState(null);

  // State variable that holds the user's inputted text and text when they click the log-in button
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [policyNumber, setPolicyNumber] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  // Event handler to update the usernameValue state when the user types
  const handleUsernameValueChange = (event) => {
    setUsernameValue(event.target.value);
  };
  // Event handler to update accountValue state when the user clicks the log-in button
  const handlePolicyNumberChange = () => {
    setPolicyNumber(usernameValue);
  }
  const handlePasswordValueChange = (event) => {
    setPasswordValue(event.target.value);
  }

  // Gets the returned info from the database and checks if it exists
  const dataCheck = () => {
    try {
      // Checks to see if the account found is correct
      if (parseInt(passwordValue) === data['details']['0']['id']) {
        alert("The policy number and password is valid");
        setAuthenticated(true);
      // Returns if account info is not correct
      } else {
        alert("The password is not correct for the given policy number")
      }
    } catch (e) {
      // Catch statement when no user statement is returned
      alert("The inputted policy number does not exist")
    }
  };

  // Calls GET Database API of user inputted account number
  // Occurs whenever the policyNumber state variable is changed
  useEffect(() => {
    const fetchData = async () => {
      const fetchResult = await fetch(base_url + usernameValue, {
        method: "GET", headers: {
          accept: 'application/json',
        },
      })
      const newData = await fetchResult.json()
      setData(newData)
      setPolicyNumber('');
    }
    if (policyNumber !== ''){
      fetchData()
    }
  }, [policyNumber]);

  // Checks account info whenever the data is returned from the database
  useEffect(() => {
    if (usernameValue !== ''){
      dataCheck();
    }
  }, [data]);

  // Calls POST Database API of user inputted account number
  const uploadData = () => {
    fetch(base_url + policyNumber, {
      method: 'POST',
      data: {
        policyNumber: policyNumber
      }
    })
  }

  return (
      <div>
        <Grid container justify="center" alignItems="center" direction="column">
          <Grid item>
            <h2 style={{textAlign: "center", marginTop: 50, fontSize: 20, fontWeight: "bold"}}>Flo.CI Claim Submission Demo</h2>
          </Grid>
          <Grid item>
            <h2>
              <Stack style={{justifyContent: 'center'}} spacing={2} direction="row" sx={{m: 2}}>
                <Button variant="contained" color="success" onClick={uploadData}>Sign-Up</Button>
                <Button variant="contained" color="success" onClick={() => handlePolicyNumberChange()}>Log-In</Button>
              </Stack>
            </h2>
          </Grid>
          <Grid item>
            <h2>
              <TextField id="filled-basic" label="Please enter policy number" variant="filled"
                         color="success" onChange={handleUsernameValueChange} sx={{m: 3, width: '42ch'}}/>
            </h2>
          </Grid>
          <Grid item>
            <h2>
              <TextField id="filled-basic" label="Please enter policy password" variant="filled"
                         color="success" onChange={handlePasswordValueChange} sx={{m: 1, width: '42ch'}}/>
            </h2>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default LoginScreen;
