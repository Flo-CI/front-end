import React from "react";
import { Link } from "react-router-dom";

export default function ClaimCard({
  claimName,
  claimNumber,
  dateFiled,
  applicationStatus,
  link,
}) {
  return (
    <Link to={link} className="border-2 rounded-xl w-80 h-32 m-4 bg-white">
      {/* Claim name */}
      <div className=" bg-green-500 rounded-t-xl rou">
        <h1 className="px-4 py-4 font-bold text-xl">{claimName}</h1>
      </div>

      {/* Claim status, claim number, date filed */}
      <div>
        <h2 className="px-4 py-2 flex">
          Application Status:{" "}
          <p className="px-1 font-semibold">{applicationStatus}</p>
        </h2>

        <div className="px-4 flex flex-row font-light text-sm justify-between">
          <p>Date Filed: {dateFiled}</p>
          <p>No: {claimNumber}</p>
        </div>
      </div>
    </Link>
  );
}
