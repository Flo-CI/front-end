import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DarkModeContext } from "../DarkModeContext";
import { setClaimName, setClaimNumber } from "../hooks/ClaimUtils";

export default function ClaimCard({
  claimName,
  claimNumber,
  dateFiled,
  applicationStatus,
}) {
  const { darkMode } = useContext(DarkModeContext);
  const navigate = useNavigate();

  const color = darkMode
    ? "bg-green-500 text-white rounded-t-xl"
    : "bg-green-300 rounded-t-xl";

  const handleClick = () => {
    setClaimNumber(claimNumber);
    setClaimName(claimName);
    navigate(`/claim-files`);
  };
  return (
    <div
      onClick={handleClick}
      className="border-2 rounded-xl w-80 h-48 m-4 bg-white cursor-pointer"
    >
      {/* Claim name */}
      <div className={color}>
        <h1 className="px-4 py-4 font-bold text-2xl">{claimName}</h1>
      </div>

      {/* Claim status, claim number, date filed */}
      <div
        className={`${darkMode ? "dark" : "light"} text-lg rounded-b-xl pb-2`}
      >
        <h2 className="px-4 py-2 flex">
          Application Status:{" "}
          <p className="px-1 font-semibold">{applicationStatus}</p>
        </h2>
        <h2 className="px-4 py-2 flex">
          Date Filed: <p className="px-1 font-semibold">{dateFiled}</p>
        </h2>

        <div className="px-4 flex flex-row font-light text-md justify-end">
          <p>No: {claimNumber}</p>
        </div>
      </div>
    </div>
  );
}
