import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function DocumentViewer({ open, handleClose, fileURL }) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="lg">
      <DialogContent>
        <div className="container">
          <div className="viewer">
            {fileURL ? (
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer fileUrl={fileURL} plugins={[defaultLayoutPluginInstance]}></Viewer>
              </Worker>
            ) : (
              <>No file is selected yet</>
            )}
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DocumentViewer;
