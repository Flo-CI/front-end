import React from "react";
import { useState } from "react";
import { Button } from "@mui/base";

import ClaimCard from "../components/ClaimCard.js";
import Navbar from "../components/Navbar.js";
import NewClaimScreen from "./NewClaimScreen";
import NewClaimButton from "../components/NewClaimButton";

export default function ClaimDashboard() {
  const [currentClaims, setCurrentClaims] = useState([]);
  const [pastClaims, setPastClaims] = useState([]);

  return (
    <div className=" bg-gray-50 h-screen">
      <Navbar />

      {/* Header + new claim button */}
      <div className="flex justify-between items-start pt-4">
        <h1 className=" px-2 text-6xl font-bold ">Dashboard</h1>
        <NewClaimButton>
        </NewClaimButton>
      </div>

      {/* In progress claims */}
      <div className="pt-4">
        <h1 className="px-3 text-2xl">Current Claims</h1>

        <div className="flex flex-wrap items-center">
          <ClaimCard
            claimName={"Loss of Life Claim"}
            applicationStatus={"Received"}
            claimNumber={"1234567891011314"}
            dateFiled={"2023-10-17"}
          />
          <ClaimCard
            claimName={"Life Insurance Claim"}
            applicationStatus={"Under Review"}
            claimNumber={"1234567899289314"}
            dateFiled={"2023-10-10"}
          />
          <ClaimCard
            claimName={"Illness Claim"}
            applicationStatus={"Under Review"}
            claimNumber={"1234567891011314"}
            dateFiled={"2023-10-10"}
          />
          <ClaimCard
            claimName={"Illness Claim"}
            applicationStatus={"Under Review"}
            claimNumber={"1234567891011314"}
            dateFiled={"2023-10-10"}
          />
          <ClaimCard
            claimName={"Illness Claim"}
            applicationStatus={"Under Review"}
            claimNumber={"1234567891011314"}
            dateFiled={"2023-10-10"}
          />
          <ClaimCard
            claimName={"Illness Claim"}
            applicationStatus={"Under Review"}
            claimNumber={"1234567891011314"}
            dateFiled={"2023-10-10"}
          />
          <ClaimCard
            claimName={"Illness Claim"}
            applicationStatus={"Under Review"}
            claimNumber={"1234567891011314"}
            dateFiled={"2023-10-10"}
          />
        </div>
      </div>

      {/* Past claims */}
      <div className="">
        <h1 className="px-3 text-2xl">Past Claims</h1>

        <div className="flex flex-wrap items-center">
          <ClaimCard
            claimName={"Loss of Life Claim"}
            applicationStatus={"Rejected"}
            claimNumber={"1234567891011314"}
            dateFiled={"2019-10-17"}
          />
          <ClaimCard
            claimName={"Life Insurance Claim"}
            applicationStatus={"Accepted"}
            claimNumber={"1234567899289314"}
            dateFiled={"2019-10-10"}
          />
        </div>
      </div>
    </div>
  );
}
