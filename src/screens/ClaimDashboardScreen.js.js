import React from "react";
import { useState } from "react";

import ClaimCard from "../components/ClaimCard";
import Navbar from "../components/Navbar";

export default function ClaimDashboard() {
  const [currentClaims, setCurrentClaims] = useState([]);
  const [pastClaims, setPastClaims] = useState([]);

  return (
    <div className=" bg-gray-100 h-screen">
      <Navbar />

      {/* In progress claims */}
      <div className="pt-4">
        <h1 className="px-3 text-xl">Current Claims</h1>
        <div className="flex flex-wrap items-center">
          <ClaimCard
            claimName={"Loss of Life Claim"}
            applicationStatus={"Received"}
            claimNumber={"1234567891011314"}
            dateFiled={"2023-10-17"}
            link={"/claim/1234567891011314"}
          />
          <ClaimCard
            claimName={"Life Insurance Claim"}
            applicationStatus={"Under Review"}
            claimNumber={"1234567899289314"}
            dateFiled={"2023-10-10"}
            link={"/claim/1234567899289314"}
          />
          <ClaimCard
            claimName={"Illness Claim"}
            applicationStatus={"Under Review"}
            claimNumber={"1234567891011314"}
            dateFiled={"2023-10-10"}
            link={"/claim/1234567891011314"}
          />
          <ClaimCard
            claimName={"Illness Claim"}
            applicationStatus={"Under Review"}
            claimNumber={"1234567891011314"}
            dateFiled={"2023-10-10"}
            link={"/claim/1234567891011314"}
          />
          <ClaimCard
            claimName={"Illness Claim"}
            applicationStatus={"Under Review"}
            claimNumber={"1234567891011314"}
            dateFiled={"2023-10-10"}
            link={"/claim/1234567891011314"}
          />
          <ClaimCard
            claimName={"Illness Claim"}
            applicationStatus={"Under Review"}
            claimNumber={"1234567891011314"}
            dateFiled={"2023-10-10"}
            link={"/claim/1234567891011314"}
          />
          <ClaimCard
            claimName={"Illness Claim"}
            applicationStatus={"Under Review"}
            claimNumber={"1234567891011314"}
            dateFiled={"2023-10-10"}
            link={"/claim/1234567891011314"}
          />
        </div>
      </div>

      {/* Past claims */}
      <div className="">
        <h1 className="px-3 text-xl">Past Claims</h1>

        <div className="flex flex-wrap items-center">
          <ClaimCard
            claimName={"Loss of Life Claim"}
            applicationStatus={"Rejected"}
            claimNumber={"1234567891011314"}
            dateFiled={"2019-10-17"}
            link={"/claim/1234567891011314"}
          />
          <ClaimCard
            claimName={"Life Insurance Claim"}
            applicationStatus={"Accepted"}
            claimNumber={"1234567899289314"}
            dateFiled={"2019-10-10"}
            link={"/claim/1234567899289314"}
          />
        </div>
      </div>
    </div>
  );
}
