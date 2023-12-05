import React, { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {getClaimNumber} from "../hooks/ClaimUtils";

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

export default function FileCard({
    fileName,
    fileDate,
    fileStatus,
    onClick,
    fileExists,
    onSuccessUpload,
}) {
    const { darkMode } = useContext(DarkModeContext);
    const color = darkMode
        ? 'bg-green-500 text-white rounded-t-xl rou'
        : 'bg-green-300 rounded-t-xl rou';
    const claimNumber = getClaimNumber();
    const backend_url = `https://ciflo.azurewebsites.net/upload?claimNumber=${claimNumber}&type=${fileName}`;

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        console.log(file);
        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await fetch(backend_url, {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                console.log("File uploaded successfully.");
                const uploadedFile = await response.json();
                onSuccessUpload(uploadedFile);
            } else {
                console.error("File upload failed.");
            }
        } catch (error) {
            console.error("Error uploading file", error);
        }
    };

    return (
    <div className="border-2 rounded-xl w-90 h-42 m-4 bg-white cursor-pointer">
    <div className={color} onClick={onClick}>
        <h1 className="px-4 py-4 font-bold text-xl">{fileName}</h1>
    </div>

    {/* Claim status, claim number, date filed */}
    <div className={darkMode ? 'dark' : 'light'}>
        <h2 className="px-4 py-2 flex">
            Status:{" "}
            <p className="px-1 font-semibold">{fileStatus}</p>
        </h2>
        <h2 className="px-4 py-2 flex">
            Last Updated:{" "}
            <p className="px-1 font-semibold">{fileDate}</p>
        </h2>
        <h2 className="px-4 py-2 flex justify-between">
            <label htmlFor="file-upload">
                <Button color="success" size="small" component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                    Upload file
                    <VisuallyHiddenInput id="file-upload" type="file" onChange={handleFileUpload} />
                </Button>
            </label>
            <label>
                {fileExists !== null &&
                    <Button color="success" size="small" variant="contained">
                        Validate File
                    </Button>
                }
            </label>
        </h2>
    </div>
    </div>
    );
}