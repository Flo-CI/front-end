/* 
To be used to represent a file, with upload functionality for use in ClaimFilesScreen
*/

import { ListItem, ListItemAvatar, ListItemText, Avatar } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const FileCard = ({
  handleFileClick,
  handleFileDelete,
  handleFileUpload,
  formName,
  dateUploaded,
  file,
  darkMode,
}) => {
  return (
    <div>
      <ListItem>
        <ListItemAvatar>
          <div onClick={() => handleFileClick(file)}>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </div>
        </ListItemAvatar>
        <ListItemText
          primary={formName}
          secondary={file ? `Upload Date: ${dateUploaded}` : ""}
          sx={{
            "& .MuiListItemText-secondary": {
              color: darkMode ? "white" : "black", // Change as needed
            },
          }}
        />
        {file ? (
          <ListItemAvatar>
            <div onClick={() => handleFileDelete(file)}>
              <Avatar>
                <DeleteIcon />
              </Avatar>
            </div>
          </ListItemAvatar>
        ) : (
          <ListItemAvatar>
            <div onClick={() => handleFileUpload(file)}>
              <Avatar>
                <CloudUploadIcon />
              </Avatar>
            </div>
          </ListItemAvatar>
        )}
      </ListItem>
    </div>
  );
};

export default FileCard;
