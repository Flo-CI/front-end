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
  const [textboxValue, setTextboxValue] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  // Event handler to update the textboxValue state when the user types
  const handleTextboxValueChange = (event) => {
    setTextboxValue(event.target.value);
  };
  // Event handler to update accountValue state when the user clicks the log-in button
  const handleAccountNumberChange = () => {
    setAccountNumber(textboxValue);
  };

  // Gets the returned info from the database and checks if it exists
  const dataCheck = () => {
    try {
      // Checks to see if the account found is correct
      if (accountNumber === data["details"]["0"]["policyNumber"]) {
        alert("The user id is " + data["details"]["0"]["id"]);
        // Returns if account info is not correct
      } else {
        alert("The inputted account number does not exist");
      }
    } catch (e) {
      // Catch statement when no user statement is returned
      alert("The inputted account number does not exist");
    }
  };

  // Calls GET Database API of user inputted account number
  // Occurs whenever the accountNumber state variable is changed
  useEffect(() => {
    const fetchData = async () => {
      const fetchResult = await fetch(base_url + textboxValue, {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      });
      const newData = await fetchResult.json();
      setData(newData);
    };
    fetchData();
  }, [accountNumber]);

  // Checks account info whenever the data is returned from the database
  useEffect(() => {
    if (textboxValue !== "") {
      dataCheck();
    }
  }, [data]);

  // Calls POST Database API of user inputted account number
  const uploadData = () => {
    fetch(base_url + accountNumber, {
      method: "POST",
      data: {
        policyNumber: accountNumber,
      },
    });
  };

  return (
    <div>
      <Grid container justify="center" alignItems="center" direction="column">
        <Grid item>
          <h2
            style={{
              textAlign: "center",
              marginTop: 50,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Flo.CI Claim Submission Demo
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
              <Button variant="contained" color="success" onClick={uploadData}>
                Add Claim Number
              </Button>
              <Button
                variant="contained"
                color="success"
                onClick={() => handleAccountNumberChange()}
              >
                Check Claim Number
              </Button>
            </Stack>
          </h2>
        </Grid>
        <Grid item>
          <h2>
            <TextField
              id="filled-basic"
              label="Please enter claim number"
              variant="filled"
              color="success"
              onChange={handleTextboxValueChange}
              sx={{ m: 3, width: "42ch" }}
            />
          </h2>
        </Grid>
      </Grid>
    </div>
  );
}

export default LoginScreen;