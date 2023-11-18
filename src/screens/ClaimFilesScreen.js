import React from "react";
import Navbar from "../components/Navbar.js";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import useAuthenticationCheck from "../hooks/useAuthenticationCheck.js";

export default function ClaimFilesScreen() {
  useAuthenticationCheck();

  return (
    <div className=" bg-gray-50 h-screen">
      <Navbar />
      <div className="flex justify-between items-start pt-4">
        <h1 className=" px-2 text-6xl font-bold ">ClaimName Claim</h1>
      </div>
      <div className="flex justify-center items-start pt-4">
        <h1 className=" px-2 text-4xl font-bold ">Claim Files</h1>
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
              <Avatar>
                <FolderIcon />
              </Avatar>
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
    </div>
  );
}
