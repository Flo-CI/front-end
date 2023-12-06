import React, { useContext, useState } from "react";
import { DarkModeContext } from "../DarkModeContext";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { getClaimNumber } from "../hooks/ClaimUtils";

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

export default function FileCard({
  fileName,
  fileDate,
  onClick,
  fileExists,
  onSuccessUpload,
  validationResults,
  setValidationResults,
}) {
  const { darkMode } = useContext(DarkModeContext);
  const [status, setStatus] = useState("---");
  const [uploaded, setUploaded] = useState(false);

  const color = darkMode
    ? "bg-green-500 text-white rounded-t-xl rou"
    : "bg-green-300 rounded-t-xl rou";
  const claimNumber = getClaimNumber();
  const backend_url = `https://ciflo.azurewebsites.net/`;

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    console.log(file);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(
        backend_url + `upload?claimNumber=${claimNumber}&type=${fileName}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        console.log("File uploaded successfully.");
        onSuccessUpload();
        setUploaded(true);
      } else {
        console.error("File upload failed.");
      }
    } catch (error) {
      console.error("Error uploading file", error);
    }
  };

  const handleFileValidation = async () => {
    try {
      console.log(fileName);
      const response = await fetch(
        backend_url + `validate?claimNumber=${claimNumber}&type=${fileName}`,
        {
          method: "POST",
        }
      );

      if (!response.ok) {
        console.error("Error validating file. Status: ", response.status);
        return;
      }

      console.log(response.status);
      console.log(response.headers.get("Content-Type"));
      const data = await response.json();
      console.log(data);

      let added = { ...validationResults };
      if (data.details === null) {
        added[fileName] = "Please upload the correct form.";
        setStatus("Incorrect Form");
      } else if (Array(data.details)[0].length === 0) {
        setStatus("Approved");
      } else {
        let message = "";
        let dataArray = Array(data.details)[0];
        for (let i = 0; i < dataArray.length; ++i) {
          let dataObj = dataArray.at(i);
          message = message.concat(
            dataObj.field + ": " + dataObj.message + "\n"
          );
        }
        added[fileName] = message;
        setStatus("Not Approved");
      }

      setValidationResults(added);
    } catch (error) {
      console.error("Error validating file", error);
    }
  };

  return (
    <div className="border-2 rounded-xl w-9/12 h-42 my-1 mx-4 bg-white cursor-pointer">
      {/* Header and button for pdf viewing */}
      <div className={`${color} flex justify-between`}>
        <h1 className="px-4 py-4 font-bold text-xl">{fileName}</h1>
        {fileExists ? (
          <div
            className={`${
              darkMode
                ? "bg-slate-900 text-white hover:bg-slate-600"
                : "bg-slate-100 text-black hover:bg-slate-400"
            } flex justify-center items-center px-4 py-2 font-bold rounded-tr-xl`}
            onClick={onClick}
          >
            View File PDF
          </div>
        ) : null}
      </div>

      {/* Claim status, claim number, date filed */}
      <div className={`${darkMode ? "dark" : "light"}`}>
        <div className="flex justify-between">
          <h2 className="px-4 py-2 flex">
            Status: <p className="px-1 font-semibold">{status}</p>
          </h2>
          <h2 className="px-4 py-2 flex">
            Last Updated: <p className="px-1 font-semibold">{fileDate}</p>
          </h2>
        </div>

        <h2 className="px-4 py-2 flex justify-between ">
          <label htmlFor="file-upload">
            <Button
              color="success"
              size="small"
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
            >
              Upload file
              <VisuallyHiddenInput
                id="file-upload"
                type="file"
                onChange={handleFileUpload}
              />
            </Button>
          </label>
          <label>
            {(fileExists !== null || uploaded) && (
              <div onClick={handleFileValidation}>
                <Button color="success" size="small" variant="contained">
                  Validate File
                </Button>
              </div>
            )}
          </label>
        </h2>
      </div>

      {/* Validation message */}
      <div
        className={`${
          darkMode ? "dark" : "light"
        } px-4 pb-4 whitespace-pre-wrap rounded-b-xl`}
      >
        <p className={` text-red-600 `}>
          {validationResults[fileName] ? (
            <div>
              <h1
                className={`${
                  darkMode ? "text-white" : "text-black"
                } font-bold text-lg`}
              >
                Errors:
              </h1>
              {validationResults[fileName]}
            </div>
          ) : null}
        </p>
      </div>
    </div>
  );
}
