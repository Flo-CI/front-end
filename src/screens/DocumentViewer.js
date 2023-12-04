import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function DocumentViewer({ open, handleClose }) {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfError, setPdfError] = useState('');

  const allowedFiles = ['application/pdf'];

  const handleFile = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && allowedFiles.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setPdfError('');
          setPdfFile(e.target.result);
        };
      } else {
        setPdfError('Not a valid pdf: Please select only PDF');
        setPdfFile('');
      }
    } else {
      console.log('Please select a PDF');
    }
  };

  useEffect(() => {
    if (!open) {
      setPdfError('');
      setPdfFile(null);
    }
  }, [open]);

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="lg">
      <DialogTitle>Upload File</DialogTitle>
      <DialogContent>
        <div className="container">
          <form>
            <input type="file" className="form-control" onChange={handleFile}></input>
            {pdfError && <span className="text-danger">{pdfError}</span>}
          </form>
          <div className="viewer">
            {pdfFile ? (
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer fileUrl={pdfFile} plugins={[defaultLayoutPluginInstance]}></Viewer>
              </Worker>
            ) : (
              <>No file is selected yet</>
            )}
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          Upload
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DocumentViewer;
