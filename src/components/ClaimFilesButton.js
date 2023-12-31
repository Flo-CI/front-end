import React, { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext"; // Import the context

export default function ClaimFilesButton(props) {
  // props refers to the submitClaim function on line 50 of NewClaimScreen.js
  const { darkMode } = useContext(DarkModeContext); // Use the context

  const buttonClass = darkMode
    ? "bg-green-500 p-4 text-white items-center rounded-xl h-20 font-semibold mx-4 mt-2"
    : "bg-green-300 p-4 items-center rounded-xl h-20 font-semibold mx-4 mt-2";

  return (
    <div className="flex justify-center">
      <button
        variant="contained"
        color="success"
        className={buttonClass}
        onClick={props.onClick}
      >
        Create Claim
      </button>
    </div>
  );
}
