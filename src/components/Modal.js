import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { DarkModeContext } from '../DarkModeContext'; // Import the context
import logo from "../assets/securian_logo.png";
import { HomeIcon, Cog6ToothIcon, ArrowRightOnRectangleIcon} from "@heroicons/react/24/solid";
import { Modal, Button } from "react-bootstrap";

<Modal show={showModal} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Confirm File Deletion</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    Are you sure you want to delete this file?
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Cancel
    </Button>
    <Button variant="primary" onClick={deleteFile}>
      Delete
    </Button>
  </Modal.Footer>
</Modal>