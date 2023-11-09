import React from "react";
import Navbar from "../components/Navbar.js";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import ClaimFilesButton from "../components/ClaimFilesButton";

const claimTypes = [
    {
        value: 'illness',
        label: 'Critical Illness',
    },
    {
        value: 'disability',
        label: 'Disability',
    },
    {
        value: 'job-loss',
        label: 'Involutary Job Loss',
    },
    {
        value: 'death',
        label: 'Loss of Life',
    },
];

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default function NewClaimScreen() {
    return(
        <div className=" bg-gray-50 h-screen">
            <Navbar />
            <div className="flex justify-between items-start pt-4">
                <h1 className=" px-2 text-6xl font-bold ">File A New Claim</h1>
            </div>
            <div className="flex justify-center items-start pt-4">
            <TextField
                    id="outlined-select-claim-type"
                    select
                    label="Select"
                    helperText="Please select your claim type"
                >
                    {claimTypes.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <div className="flex justify-center items-start pt-4">
                <h1 className=" px-2 text-2xl font-bold ">Upload any initial files</h1>
            </div>
            <div className="flex justify-center items-start pt-4">
                <Button component="label" variant="contained" color="success">
                    Upload files
                    <VisuallyHiddenInput type="file" />
                </Button>
            </div>
            <ClaimFilesButton>
            </ClaimFilesButton>
        </div>
    )
}