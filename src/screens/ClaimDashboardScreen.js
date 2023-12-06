import React, { useState, useContext, useEffect } from "react";
import { DarkModeContext } from "../DarkModeContext.js";
import ClaimCard from "../components/ClaimCard.js";
import Navbar from "../components/Navbar.js";
import NewClaimButton from "../components/NewClaimButton";
import useAuthenticationCheck from "../hooks/useAuthenticationCheck.js";
import { getPolicyNumber, getPasswordValue } from "../hooks/LoginUtils";

export default function ClaimDashboard() {
  const { darkMode } = useContext(DarkModeContext);

  useAuthenticationCheck();

  const [allClaims, setAllClaims] = useState([]);
  const [rankMap, setRankMap] = useState({});
  const policyNumber = getPolicyNumber();
  const passwordValue = getPasswordValue();

  const backend_url = `https://ciflo.azurewebsites.net/`;

  useEffect(() => {
    const fetchClaims = async () => {
      try {
        const res = await fetch(
          backend_url +
            `claims?policyNumber=${policyNumber}&password=${passwordValue}`
        );
        const data = await res.json();
        setAllClaims(data.details);
      } catch (error) {
        console.error("Error fetching claims", error);
      }
    };

    const fetchRanks = async () => {
      const res = await fetch(
        backend_url + `claim/rank?policyNumber=${policyNumber}`
      );
      const data = await res.json();
      setRankMap(data.details);
    };

    fetchClaims().then((r) => console.log("Claims fetched"));
    fetchRanks();
  }, [backend_url, passwordValue, policyNumber]);

  console.log(allClaims);
  const currentClaimsList = allClaims.filter(
    (claim) =>
      claim.status === "Under Review" ||
      claim.status === "Received" ||
      claim.status === "In Progress"
  );
  console.log(currentClaimsList);
  const pastClaimsList = allClaims.filter(
    (claim) => claim.status === "Accepted" || claim.status === "Rejected"
  );

  return (
    <div className={`${darkMode ? "dark" : "light"} bg-gray-50 h-screen`}>
      <Navbar />

      {/* Header + new claim button */}
      <div className="flex justify-between items-start pt-4">
        <h1 className=" px-2 text-6xl font-bold ">Dashboard</h1>
        <NewClaimButton />
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
              dateFiled={claim.dateCreated}
              rank={rankMap[claim.claimNumber]}
            ></ClaimCard>
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
              dateFiled={claim.dateCreated}
              rank={rankMap[claim.claimNumber]}
            ></ClaimCard>
          ))}
        </div>
      </div>
    </div>
  );
}
