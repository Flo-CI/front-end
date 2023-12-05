import React, { useEffect, useState, useContext } from "react";
import { DarkModeContext } from "../DarkModeContext.js";
import Navbar from "../components/Navbar.js";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import file1 from "../assets/test-file-1.pdf";
import file2 from "../assets/test-file-2.pdf";
import useAuthenticationCheck from "../hooks/useAuthenticationCheck.js";
import { Grid } from "@mui/material";
import {getClaimNumber, getClaimName} from "../hooks/ClaimUtils";
import FileCard from "../components/FileCard";
import {getPolicyNumber} from "../hooks/LoginUtils";

export default function ClaimFilesScreen() {
  useAuthenticationCheck();

  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

  const [fileOpen, setFileOpen] = useState(false);
  const [fileName, setFileName] = useState(file1);
  const [spacing, setSpacing] = useState(50);
  const [pageNum, setPageNum] = useState(1);
  const [pageMax, setPageMax] = useState(1);
  const { darkMode } = useContext(DarkModeContext);
  const claimName = getClaimName();
  const claimNumber = getClaimNumber();
  const policyNumber = getPolicyNumber();

  const backend_url = `https://ciflo.azurewebsites.net/claim/files?claimNumber=${claimNumber}&policyNumber=${policyNumber}`;

  const [allFiles, setAllFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const res = await fetch(backend_url);
        const data = await res.json();
        setAllFiles(data.details);
      } catch (error) {
        console.error("Error fetching files", error);
      }
    };

    fetchFiles().then(r => console.log("Files fetched"));
  }, []);

  const presentFilesList = allFiles.filter(file => file.fileName !== null);
  const missingFilesList = allFiles.filter(file => file.fileName === null);

  useEffect(() => {
    if (fileOpen === true) {
      setSpacing(7);
      setPageNum(1);
    } else {
      setSpacing(50);
    }
  }, [fileOpen]);

  const handleFileClick = (file) => {
    if (fileOpen === false) {
      setFileOpen(true);
      setFileName(file);
    } else if (fileName === file) {
      setFileOpen(false);
    } else {
      setFileName(file);
      setPageNum(1);
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

  const color = darkMode ? "#333" : "white";

  return (
    <div className={`${darkMode ? "dark" : "light"} bg-gray-50 h-screen`}>
      <Navbar />
      <div className="flex justify-between items-start pt-4">
        <h1 className=" px-2 text-6xl font-bold ">{claimName}</h1>
      </div>
      <Grid container direction={"row"}>
        <Grid item xs={spacing}>
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
                  onClick={() => handleFileClick(file.fileName)}>
                  </FileCard>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-start pt-4">
            <h1 className=" px-2 text-4xl font-bold ">Missing Files</h1>
          </div>
          <div className="max-w-screen-lg mx-auto">
            <div className="grid grid-cols-2 gap-1">
            {missingFilesList.map((file) => (
                <FileCard onClick={() => handleFileClick(file.fileName)}
                    fileName={file.fileType}
                    fileDate="N/A"
                    fileStatus="N/A">
                </FileCard>
            ))}
            </div>
          </div>
        </Grid>
        {fileOpen ? (
          <Grid item>
            <div
              className={`${darkMode ? "dark" : "light"} bg-gray-50 h-screen`}
              onClick={handlePageNum}
            >
              <Document file={fileName} onLoadSuccess={documentLoadSuccess}>
                <Page
                  pageNumber={pageNum}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  scale={0.7}
                />
              </Document>
            </div>
          </Grid>
        ) : null}
      </Grid>
    </div>
  );
}
