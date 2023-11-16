import React, {useState} from "react";
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
import file1 from "../test_assets/mochaHazelnutTorteRecipe.pdf";
import file2 from "../test_assets/Life Claim Initiation - Lender Statement 1.pdf";

import useAuthenticationCheck from "../hooks/useAuthenticationCheck.js";
import {Divider, Grid} from "@mui/material";

export default function ClaimFilesScreen() {
  useAuthenticationCheck();

  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

  const [fileOpen, setFileOpen] = useState(true);
  const [fileName, setFileName] = useState(file1);

  const fileOneClick = (e) => {
    if (fileOpen === false) {
        setFileOpen(true);
        setFileName(file1);
    } else if (fileName === file1){
        setFileOpen(false);
    } else {
        setFileName(file1);
    }
  };

    const fileTwoClick = (e) => {
        if (fileOpen === false) {
            setFileOpen(true);
            setFileName(file2);
        } else if (fileName === file2){
            setFileOpen(false);
        } else {
            setFileName(file2);
        }
    };

  return (
    <div className=" bg-gray-50 h-screen">
      <Navbar />
      <div className="flex justify-between items-start pt-4">
        <h1 className=" px-2 text-6xl font-bold ">ClaimName Claim</h1>
      </div>
      <Grid sx={{ flexGrow: 1 }} container direction={'row'}>
        <Grid item xs={12} sm={6}>
      <div className="flex justify-center items-start pt-4">
        <h1 className=" px-2 text-4xl font-bold ">Claim Files</h1>
      </div>
      <div className="flex justify-center items-start pt-4">
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem>
            <ListItemAvatar>
                <div onClick={fileOneClick}>
              <Avatar>
                <FolderIcon />
              </Avatar>
                </div>
            </ListItemAvatar>
            <ListItemText
              primary="Certification of Death - Physician Statement"
              secondary=" Upload Date: Oct 28, 2023"
            />
            <ListItemAvatar>
              <Avatar>
                <DeleteIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
                <div onClick={fileTwoClick}>
                    <Avatar>
                        <FolderIcon />
                    </Avatar>
                </div>
            </ListItemAvatar>
            <ListItemText
              primary="Life Claim Information Request"
              secondary="Upload Date: Nov 7, 2023"
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
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Employer Statement" />
            <ListItemAvatar>
              <Avatar>
                <CloudUploadIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
        </List>
      </div>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Document file={fileName}>
            {fileOpen ? (<Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} scale={0.7}/>) : null}
        </Document>
      </Grid>
    </Grid>

    </div>
  );
}
