import React, { useEffect, useState, useContext } from "react";
import { DarkModeContext } from "../DarkModeContext.js";
import Navbar from "../components/Navbar.js";
import List from "@mui/material/List";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import file1 from "../assets/test-file-1.pdf";
import file2 from "../assets/test-file-2.pdf";
import useAuthenticationCheck from "../hooks/useAuthenticationCheck.js";
import { Grid } from "@mui/material";
import FileCard from "../components/FileCard.js";

export default function ClaimFilesScreen() {
  // useAuthenticationCheck();

  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

  const [fileOpen, setFileOpen] = useState(false);
  const [fileName, setFileName] = useState(file1);
  const [spacing, setSpacing] = useState(50);
  const [pageNum, setPageNum] = useState(1);
  const [pageMax, setPageMax] = useState(1);
  const { darkMode } = useContext(DarkModeContext);

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

  // TODO:
  const handleFileUpload = () => {};
  const handleFileDelete = () => {};

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
        <h1 className=" px-2 text-6xl font-bold ">Claim Name</h1>
      </div>
      <Grid container direction={"row"}>
        <Grid item xs={spacing}>
          <div className="flex justify-center items-start pt-4">
            <h1 className=" px-2 text-4xl font-bold ">Claim Files</h1>
          </div>
          <div className="flex justify-center items-start pt-4">
            <List sx={{ width: "100%", maxWidth: 360, bgcolor: color }}>
              <FileCard
                formName={"Certification of Death - Physician Statement"}
                dateUploaded={"Oct 28, 2023"}
                file={file1}
                handleFileClick={handleFileClick}
                handleFileDelete={handleFileDelete}
                handleFileUpload={handleFileUpload}
                darkMode={darkMode}
              />
              <FileCard
                formName={"Life Claim Information Request"}
                dateUploaded={"Nov 7, 2023"}
                file={file2}
                handleFileClick={handleFileClick}
                handleFileDelete={handleFileDelete}
                handleFileUpload={handleFileUpload}
                darkMode={darkMode}
              />
            </List>
          </div>
          <div className="flex justify-center items-start pt-4">
            <h1 className=" px-2 text-4xl font-bold ">Missing Files</h1>
          </div>
          <div className="flex justify-center items-start pt-4">
            <List sx={{ width: "100%", maxWidth: 360, bgcolor: color }}>
              <FileCard
                formName={"Employer Statement"}
                handleFileClick={handleFileClick}
                handleFileDelete={handleFileDelete}
                handleFileUpload={handleFileUpload}
                darkMode={darkMode}
              />
            </List>
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
