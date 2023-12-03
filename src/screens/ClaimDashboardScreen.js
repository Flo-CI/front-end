import React, {useState, useContext, useEffect} from "react";
import { Button } from "@mui/base";
import { DarkModeContext } from "../DarkModeContext.js";
import ClaimCard from "../components/ClaimCard.js";
import Navbar from "../components/Navbar.js";
import NewClaimScreen from "./NewClaimScreen";
import NewClaimButton from "../components/NewClaimButton";
import useAuthenticationCheck from "../hooks/useAuthenticationCheck.js";
import {backend_url} from "./LoginScreen";

export default function ClaimDashboard() {
  const { darkMode } = useContext(DarkModeContext);

  useAuthenticationCheck();

  const [allClaims, setAllClaims] = useState([]);

  useEffect(() => {
    const fetchClaims = async () => {
        try {
            const res = await fetch(backend_url);
            const data = await res.json();
            setAllClaims(data.details);
        } catch (error) {
            console.error("Error fetching claims", error);
        }
    };

    fetchClaims().then(r => console.log("Claims fetched"));
  }, []);
  console.log(allClaims)
  const currentClaimsList = allClaims.filter(claim => claim.status === "Under Review" || claim.status === "Received" || claim.status === "In Progress");
  console.log(currentClaimsList)
  const pastClaimsList = allClaims.filter(claim => claim.status === "Accepted" || claim.status === "Rejected");

    return (
    <div className={`${darkMode ? 'dark' : 'light'} bg-gray-50 h-screen`}>
      <Navbar />

      {/* Header + new claim button */}
      <div className="flex justify-between items-start pt-4">
        <h1 className=" px-2 text-6xl font-bold ">Dashboard</h1>
        <NewClaimButton></NewClaimButton>
      </div>

      {/* In progress claims */}
      <div className="pt-4">
        <h1 className="px-3 text-2xl">Current Claims</h1>

        <div className="flex flex-wrap items-center">
          {currentClaimsList.map((claim) => (
              <ClaimCard
                claimNumber={claim.claimNumber}
                claimName={claim.type}
                applicationStatus={claim.status}
                dateFiled={claim.dateCreated}>
              </ClaimCard>
          ))}
        </div>
      </div>

      {/* Past claims */}
      <div className="">
        <h1 className="px-3 text-2xl">Past Claims</h1>
          <div className="flex flex-wrap items-center">
              {pastClaimsList.map((claim) => (
                  <ClaimCard
                      claimNumber={claim.claimNumber}
                      claimName={claim.type}
                      applicationStatus={claim.status}
                      dateFiled={claim.dateCreated}>
                  </ClaimCard>
              ))}
          </div>
      </div>
    </div>
  );
}
