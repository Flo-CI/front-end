import './App.css';
import React, {useState} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Grid} from "@mui/material";

function App() {
    const base_url = "http://localhost:8080/demo/claim?policyNumber=";
    const [data, setData] = useState({});

    // Define a state variable to store the user input
    const [claimNumber, setClaimNumber] = useState('');

    // Event handler to update the claimNumber state when the user types
    const handleClaimNumberChange = (event) => {
        setClaimNumber(event.target.value);
    };

    // Function that grabs info of user inputted claim number
    const fetchInfo = () => {
        // Calls GET Database API of specific claim number and saves it to data
        const response = fetch(base_url + claimNumber, {method: "GET", headers: {
                accept: 'application/json',
            },})
            .then((response) => response.json())
            .then((data) => setData(data));

        try {
            // Checks to see if the account found is correct
            if (claimNumber === data['details']['0']['policyNumber']) {
                alert("The user id is " + data['details']['0']['id']);
            } else {
                alert("The inputted policy number is not currently registered")
            }

        } catch (e) {

        }
    }

    // Calls POST Database API of user inputted claim number
    const uploadData = () => {
        fetch(base_url + claimNumber, {
            method: 'POST',
            data: {
                policyNumber: claimNumber
            }
        })
    }

  return (
    <div>
        <Grid container justify="center" alignItems="center" direction="column">
            <Grid item>
                <h2 style={{textAlign: "center",}}>Flo.CI Claim Submission Demo</h2>
            </Grid>
            <Grid item>
                <h2>
                    <Stack style={{justifyContent: 'center'}} spacing={2} direction="row">
                      <Button variant="contained" color="success" onClick={uploadData} sx={{m: 1}}>Add Claim Number</Button>
                      <Button variant="contained" color="success" onClick={fetchInfo} sx={{m: 1}}>Check Claim Number</Button>
                    </Stack>
                </h2>
            </Grid>
            <Grid item>
                <h2>
                    <TextField id="filled-basic" label="Please enter claim number" variant="filled"
                    color="success" onChange={handleClaimNumberChange} sx={{m: 1, width: '42ch'}}/>
                </h2>
            </Grid>
        </Grid>
    </div>
  );
}

export default App;
