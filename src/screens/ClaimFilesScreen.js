import React, {useEffect, useState, useContext } from "react";
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
import { Document, Page, pdfjs } from 'react-pdf';
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import file1 from "../assets/test-file-1.pdf";
import file2 from "../assets/test-file-2.pdf";
import useAuthenticationCheck from "../hooks/useAuthenticationCheck.js";
import {Grid} from "@mui/material";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
// Import Worker
import { Worker } from '@react-pdf-viewer/core';
// Import the main Viewer component
import { Viewer } from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
// default layout plugin
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Import styles of default layout plugin
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
export default function ClaimFilesScreen() {
  // useAuthenticationCheck();


  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

  const [dialogOpen, setDialogOpen] = useState(false);
  const [fileOpen, setFileOpen] = useState(false);
  const [fileName, setFileName] = useState(file1);
  const [spacing, setSpacing] = useState(50);
  const [pageNum, setPageNum] = useState(1);
  const [pageMax, setPageMax] = useState(1);
  const { darkMode } = useContext(DarkModeContext);
  
  const [open, setOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
   };
   
   const handleDialogClose = () => {
    setDialogOpen(false);
   };

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
    setPageMax(numPages)
  }

  const handlePageNum = (e) => {
    if (pageNum + 1 > pageMax) {
      setPageNum(1)
    } else {
      setPageNum(pageNum + 1)
    }
  }

  // creating new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  // pdf file onChange state
  const [pdfFile, setPdfFile]=useState(null);

  // pdf file error state
  const [pdfError, setPdfError]=useState('');


  // handle file onChange event
  const allowedFiles = ['application/pdf'];
  const handleFile = (e) =>{
    let selectedFile = e.target.files[0];
    // console.log(selectedFile.type);
    if(selectedFile){
      if(selectedFile&&allowedFiles.includes(selectedFile.type)){
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend=(e)=>{
          setPdfError('');
          setPdfFile(e.target.result);
        }
      }
      else{
        setPdfError('Not a valid pdf: Please select only PDF');
        setPdfFile('');
      }
    }
    else{
      console.log('please select a PDF');
    }
  }

    const color = darkMode 
        ? '#333'
        : 'white';

  return (
    <div className={`${darkMode ? 'dark' : 'light'} bg-gray-50 h-screen`}>
      <Navbar />
        <div className="flex justify-between items-start pt-4">
          <h1 className=" px-2 text-6xl font-bold ">Claim Name</h1>
        </div>
      <Grid container direction={'row'}>
        <Grid item xs={spacing}>
          <div className="flex justify-center items-start pt-4">
            <h1 className=" px-2 text-4xl font-bold ">Claim Files</h1>
          </div>
          <div className="flex justify-center items-start pt-4">
            <List sx={{ width: "100%", maxWidth: 360, bgcolor: color }}>
              <ListItem>
                <ListItemAvatar>
                  <div onClick={() => handleFileClick(file1)}>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </div>
                </ListItemAvatar>
                <ListItemText
                  primary="Certification of Death - Physician Statement"
                  secondary=" Upload Date: Oct 28, 2023"
                  sx={{
                    '& .MuiListItemText-secondary': {
                      color: darkMode ? 'white' : 'black', // Change as needed
                    },
                  }}
                />
                <ListItemAvatar>
                <Avatar>
                    <DeleteIcon />
                  </Avatar>
                </ListItemAvatar>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <div onClick={() => handleFileClick(file2)}>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </div>
                </ListItemAvatar>
                <ListItemText
                  primary="Life Claim Information Request"
                  secondary="Upload Date: Nov 7, 2023"
                  sx={{
                    '& .MuiListItemText-secondary': {
                      color: darkMode ? 'white' : 'black', // Change as needed
                    },
                  }}
                />
                <ListItemAvatar>
                  
                <Avatar>
                    <DeleteIcon />
                  </Avatar>
                </ListItemAvatar>
              </ListItem>
            </List>
          </div>
          <div className="flex justify-center items-start pt-4">
            <h1 className=" px-2 text-4xl font-bold ">Missing Files</h1>
          </div>
          <div className="flex justify-center items-start pt-4">
            <List sx={{ width: "100%", maxWidth: 360, bgcolor: color }}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Employer Statement" />
                <ListItemAvatar>
                <Avatar>
 <CloudUploadIcon onClick={handleDialogOpen} />
</Avatar>
                </ListItemAvatar>
              </ListItem>
            </List>
          </div>
        </Grid>
        {fileOpen ?
          (<Grid item>
            <div className={`${darkMode ? 'dark' : 'light'} bg-gray-50 h-screen`} onClick={handlePageNum}>
              <Document file={fileName}  onLoadSuccess={documentLoadSuccess}>
                <Page pageNumber={pageNum} renderTextLayer={false} renderAnnotationLayer={false} scale={0.7}/>
              </Document>
            </div>
          </Grid>) : null}
      </Grid>
      <Dialog open={dialogOpen} onClose={handleDialogClose} Width="lg">
 <DialogTitle>Upload File</DialogTitle>
 <DialogContent>
 <div className="container">

{/* Upload PDF */}
<form>


  <input type='file' className="form-control"
  onChange={handleFile}></input>

  {/* we will display error message in case user select some file
  other than pdf */}
  {pdfError&&<span className='text-danger'>{pdfError}</span>}

</form>

{/* View PDF */}

<div className="viewer">

  {/* render this if we have a pdf file */}
  {pdfFile&&(
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <Viewer fileUrl={pdfFile}
      plugins={[defaultLayoutPluginInstance]}></Viewer>
    </Worker>
  )}

  {/* render this if we have pdfFile state null   */}
  {!pdfFile&&<>No file is selected yet</>}

</div>

</div>
 </DialogContent>
 <DialogActions>
    <Button onClick={handleDialogClose} color="primary">
      Cancel
    </Button>
    <Button onClick={handleDialogClose} color="primary">
      Upload
    </Button>
 </DialogActions>
</Dialog>
    </div>
  );
}