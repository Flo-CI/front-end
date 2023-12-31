import React, { useContext, useState } from "react";
import { DarkModeContext } from "../DarkModeContext.js";
import Navbar from "../components/Navbar.js";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import ClaimFilesButton from "../components/ClaimFilesButton";
import useAuthenticationCheck from "../hooks/useAuthenticationCheck.js";
import { getPolicyNumber } from "../hooks/LoginUtils";
import { setClaimNumber } from "../hooks/ClaimUtils.js";
import { useNavigate } from "react-router-dom";

const claimTypes = [
  {
    value: "Loss of Life Claim",
    label: "Loss of Life",
  },
];

export default function NewClaimScreen() {
  useAuthenticationCheck();
  const { darkMode } = useContext(DarkModeContext);

  const colour = darkMode ? "white" : "black";

  const [selectedClaimType, setSelectedClaimType] = useState(""); // State to manage selected claim type

  const policyNumber = getPolicyNumber();
  const navigate = useNavigate();

  const handleClaimTypeChange = (event) => {
    setSelectedClaimType(event.target.value); // Update the selected claim type
  };

  const submitClaim = async () => {
    console.log("submitting claim");
    console.log(selectedClaimType);
    console.log(policyNumber);
    let initialLink = `https://ciflo.azurewebsites.net/claim/create?policyNumber=${policyNumber}&type=${selectedClaimType}`;

    const result = await fetch(initialLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    // {message: 'Loss of Life Claim 3249120 created successfully', status: 200, details: null}
    const data = await result.json();

    let message = String(data.message);
    let claimNumber = "";
    let numbers = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]);

    for (let i = 0; i < message.length; ++i) {
      if (numbers.has(message.charAt(i))) {
        // .concat is non mutating
        claimNumber = claimNumber.concat(message.charAt(i));
      }
    }
    setClaimNumber(claimNumber);
    navigate("/claim-files");
  };

  return (
    <div className={`${darkMode ? "dark" : "light"} bg-gray-50 h-screen`}>
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
            "& .MuiInputLabel-root": {
              // Target the label
              color: colour,
            },
            "& .MuiFormHelperText-root": {
              // Target the helper text
              color: colour,
            },
            "& .MuiSelect-icon": {
              // Target the dropdown arrow
              color: colour,
            },
            "& .MuiSelect-select": {
              // Target the selected value
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
