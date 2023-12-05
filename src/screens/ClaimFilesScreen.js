import React, { useEffect, useState, useContext } from "react";
import { DarkModeContext } from "../DarkModeContext.js";
import Navbar from "../components/Navbar.js";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import useAuthenticationCheck from "../hooks/useAuthenticationCheck.js";
import { Grid } from "@mui/material";
import {
  getClaimNumber,
  getClaimName,
  setClaimNumber,
} from "../hooks/ClaimUtils";
import FileCard from "../components/FileCard";
import Button from "@mui/material/Button";
import { getPolicyNumber } from "../hooks/LoginUtils";
import { Navigate, useNavigate } from "react-router";

export default function ClaimFilesScreen() {
  useAuthenticationCheck();

  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

  const [fileOpen, setFileOpen] = useState(false);
  const [fileName, setFileName] = useState();
  // Created fileType so that we can compare fileType instead of fileName when opening/closing documents
  const [fileType, setFileType] = useState();
  const [spacing, setSpacing] = useState(50);
  const [pageNum, setPageNum] = useState(1);
  const [pageMax, setPageMax] = useState(1);
  const { darkMode } = useContext(DarkModeContext);
  const claimName = getClaimName();
  const claimNumber = getClaimNumber();
  const policyNumber = getPolicyNumber();

  const backend_url_files = `https://ciflo.azurewebsites.net/claim/files?claimNumber=${claimNumber}&policyNumber=${policyNumber}`;
  const base_download_url = `https://ciflo.azurewebsites.net/download?claimNumber=${claimNumber}&type=`;

  const [allFiles, setAllFiles] = useState([]);
  const [missingFilesList, setMissingFilesList] = useState([]);
  const [presentFilesList, setPresentFilesList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const res = await fetch(backend_url_files);
        const data = await res.json();
        console.log(data);
        setAllFiles(data.details);
      } catch (error) {
        console.error("Error fetching files", error);
      }
    };

    fetchFiles().then((r) => console.log("Files fetched"));
  }, []);

  useEffect(() => {
    console.log(allFiles);
    setMissingFilesList(allFiles.filter((file) => file.fileName === null));
    setPresentFilesList(allFiles.filter((file) => file.fileName !== null));
  }, [allFiles]);

  useEffect(() => {
    if (fileOpen === true) {
      setSpacing(7);
      setPageNum(1);
    } else {
      setSpacing(50);
    }
  }, [fileOpen]);

  const handleFileClick = async (file) => {
    // earlier you were comparing fileName against fileURL as you were setting fileName = fileURL
    // also the && was changed to || as either the file is not opened and you want to open it or you want to close it 
    if (!fileOpen || fileType !== file.fileType) {
      try {
        const response = await fetch(`${base_download_url}${file.fileType}`, {
          method: "GET",
          // Add any necessary headers or configurations for your GET request
        });

        if (response.ok) {
          const blob = await response.blob(); // Get the downloaded file as a Blob
          const fileURL = URL.createObjectURL(blob); // Create a URL for the Blob

          setFileOpen(true);
          setFileName(fileURL); // Set the file URL to be displayed in the PDF viewer
          // fileType set for future comparison
          setFileType(file.fileType)
          setPageNum(1); // Reset page number to 1
        } else {
          console.error("Failed to download file");
        }
      } catch (error) {
        console.error("Error downloading file", error);
      }
    } else {
      console.log("Closing file");
      setFileOpen(false);
      setFileName(null);
    }
  };

  const documentLoadSuccess = ({ numPages }) => {
    setPageMax(numPages);
  };

  const handlePageNum = (e) => {
    if (pageNum + 1 > pageMax) {
      setPageNum(1);
    } else {
      setPageNum(pageNum + 1);
    }
  };

  const submitClaim = async () => {
    const submitUrl = `https://ciflo.azurewebsites.net/claim/submit?claimNumber=${claimNumber}`;
    try {
      const result = await fetch(submitUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await result.json();
      alert(data);
      if (data.status == 200) {
        // setClaimNumber("");
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromMissing = (currFile) => {
    let i = missingFilesList.indexOf(currFile);
    setPresentFilesList(presentFilesList.concat([currFile]));
    setMissingFilesList(
      missingFilesList
        .slice(0, i)
        .concat(missingFilesList.slice(i + 1, missingFilesList.length))
    );
  };

  const color = darkMode ? "#333" : "white";

  return (
    <div className={`${darkMode ? "dark" : "light"} bg-gray-50 h-screen`}>
      <Navbar />
      <div
        className="flex justify-between items-start pt-4"
        style={{ margin: "10px" }}
      >
        <h1 className=" px-2 text-6xl font-bold ">
          {claimName}: {claimNumber}
        </h1>{" "}
        <Button
          color="success"
          size="large"
          component="label"
          variant="contained"
          onClick={submitClaim}
        >
          Submit
        </Button>
      </div>
      <Grid container direction={"row"}>
        {/* made the design responsive. If pdfViewer is closed then files take up whole screen otherwise they take up half of it */}
        <Grid item xs={fileOpen? 6:12}>
          <div className="flex justify-center items-start pt-4">
            <h1 className=" px-2 text-4xl font-bold ">Claim Files</h1>
          </div>
          <div className="max-w-screen-lg mx-auto">
            <div className="grid grid-cols-2 gap-1">
              {presentFilesList.map((file) => (
                <FileCard
                  fileName={file.fileType}
                  fileDate={file.lastUpdated}
                  fileStatus="Implement Verification Endpoint"
                  onClick={() => handleFileClick(file)}
                  fileExists={file.fileName}
                  onSuccessUpload={() => removeFromMissing(file)}
                ></FileCard>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-start pt-4">
            <h1 className=" px-2 text-4xl font-bold ">Missing Files</h1>
          </div>
          <div className="max-w-screen-lg mx-auto">
            <div className="grid grid-cols-2 gap-1">
              {missingFilesList.map((file) => (
                <FileCard
                  fileName={file.fileType}
                  fileDate="N/A"
                  fileStatus="N/A"
                  fileExists={file.fileName}
                  onSuccessUpload={() => removeFromMissing(file)}
                ></FileCard>
              ))}
            </div>
          </div>
        </Grid>
        {fileOpen ? (
          // refer to above comment about responsive design
          <Grid item xs={6} className="flex justify-center items-center">
            <div
            // added a border for light mode. Earlier if you were in light mode, white pdf doesnt contrast against white screen.
              className={`${darkMode ? "dark" : "light"} bg-gray-50 border-black border-2`}
              onClick={handlePageNum}
            >
              <Document file={fileName} onLoadSuccess={documentLoadSuccess}>
                <Page
                  pageNumber={pageNum}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  scale={1.0}
                  // new responsive design makes screen bigger.
                />
              </Document>
            </div>
          </Grid>
        ) : null}
      </Grid>
    </div>
  );
}
