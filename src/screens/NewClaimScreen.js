import React, {useContext, useState} from "react";
import { DarkModeContext } from "../DarkModeContext.js";
import Navbar from "../components/Navbar.js";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import ClaimFilesButton from "../components/ClaimFilesButton";
import useAuthenticationCheck from "../hooks/useAuthenticationCheck.js";
import { getPolicyNumber, getPasswordValue } from '../hooks/LoginUtils';

const policyNumber = getPolicyNumber();
const passwordValue = getPasswordValue();
const backend_url = `https://ciflo.azurewebsites.net/claims?policyNumber=${policyNumber}&password=${passwordValue}`;


const claimTypes = [
  {
    value: "Loss of Life Claim",
    label: "Loss of Life",
  },
];

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function NewClaimScreen() {
  // useAuthenticationCheck();
  const { darkMode } = useContext(DarkModeContext);

  const colour = darkMode ? "white" : "black"

  const [selectedClaimType, setSelectedClaimType] = useState(""); // State to manage selected claim type

  const handleClaimTypeChange = (event) => {
    setSelectedClaimType(event.target.value); // Update the selected claim type
  };

  const submitClaim = async () => {
      console.log("submitting claim");
      console.log(selectedClaimType);
      let initialLink = `https://ciflo.azurewebsites.net/claim/create?policyNumber=1234567890&type=${selectedClaimType}`;

      const result = await fetch(initialLink, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
      })
      const data = await result.json();
      console.log(data);
  }

  return (
    <div className={`${darkMode ? 'dark' : 'light'} bg-gray-50 h-screen`}>
      <Navbar />
      <div className="flex justify-between items-start pt-4">
        <h1 className=" px-2 text-6xl font-bold ">File A New Claim</h1>
      </div>
      <div className="flex justify-center items-start pt-4">
        <TextField
          id="outlined-select-claim-type"
          select
          label="Select"
          value={selectedClaimType}
          onChange={handleClaimTypeChange}
          helperText="Please select your claim type"
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: colour,
              },
              "&:hover fieldset": {
                borderColor: colour,
              },
              "&.Mui-focused fieldset": {
                borderColor: colour,
              },
            },
            "& .MuiInputLabel-root": { // Target the label
              color: colour,
            },
            "& .MuiFormHelperText-root": { // Target the helper text
              color: colour,
            },
            "& .MuiSelect-icon": { // Target the dropdown arrow
              color: colour,
            },
            "& .MuiSelect-select": { // Target the selected value
              color: colour,
            },
          }}
        >
          {claimTypes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <ClaimFilesButton onClick={submitClaim}></ClaimFilesButton>
    </div>
  );
}
