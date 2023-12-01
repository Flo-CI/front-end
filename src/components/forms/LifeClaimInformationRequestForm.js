/*
This form is meant to be filled out by the claimant and sent to the insurance company.
Will be completed after the MVP is completed.
*/

import { useState } from "react";

const LifeClaimInformationRequestForm = () => {
  const [claimNumber, setClaimNumber] = useState("");

  // Claim Checklist
  const [deathCertificateCompleted, setDeathCertificateCompleted] =
    useState(false);
  const [deathCertificateAttached, setDeathCertificateAttached] =
    useState(false);
  const [
    statementOfLendingInstitutionCompleted,
    setStatementOfLendingInstitutionCompleted,
  ] = useState(false);

  // Deceased Information
  const [deceasedName, setDeceasedName] = useState("");
  const [dob, setDob] = useState("");
  const [dod, setDod] = useState("");

  // Medical Information
  const [causeOfDeath, setCauseOfDeath] = useState("");
  const [hospitalized, setHospitalized] = useState(false);
  const [hospitalizationDate, setHospitalizationDate] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [hospitalAddress, setHospitalAddress] = useState("");
  const [physicianName, setPhysicianName] = useState(""); // attending doctor at death
  const [physicianAddress, setPhysicianAddress] = useState("");
  const [physicianPhone, setPhysicianPhone] = useState("");
  const [familyDoctorName, setFamilyDoctorName] = useState("");
  const [familyDoctorAddress, setFamilyDoctorAddress] = useState("");
  const [familyDoctorPhone, setFamilyDoctorPhone] = useState("");
  const [otherPhysicians, setOtherPhysicians] = useState([]); // ['physician name', 'address']

  // Employment Information
  const [occupation, setOccupation] = useState("");
  const [dateLastWorked, setDateLastWorked] = useState("");
  const [employer, setEmployer] = useState("");
  const [employerAddress, setEmployerAddress] = useState("");
  const [employerPhone, setEmployerPhone] = useState("");

  // Next of Kin Information
  const [kinName, setKinName] = useState("");
  const [kinAddress, setKinAddress] = useState("");
  const [kinPhone, setKinPhone] = useState("");
  const [kinRelationship, setKinRelationship] = useState("");

  // Authorization
  const [signature, setSignature] = useState("");
  const [date, setDate] = useState("");

  // Submit Form
  const handleSubmit = () => {
    // Aggregate all the data into one object
    const formData = {
      claimNumber: claimNumber,
      deathCertificateCompleted: deathCertificateCompleted,
      deathCertificateAttached: deathCertificateAttached,
      statementOfLendingInstitutionCompleted:
        statementOfLendingInstitutionCompleted,
      deceasedName: deceasedName,
      dob: dob,
      dod: dod,
      causeOfDeath: causeOfDeath,
      hospitalized: hospitalized,
      hospitalizationDate: hospitalizationDate,
      hospitalName: hospitalName,
      hospitalAddress: hospitalAddress,
      physicianName: physicianName,
      physicianAddress: physicianAddress,
      physicianPhone: physicianPhone,
      familyDoctorName: familyDoctorName,
      familyDoctorAddress: familyDoctorAddress,
      familyDoctorPhone: familyDoctorPhone,
      otherPhysicians: otherPhysicians,
      occupation: occupation,
      dateLastWorked: dateLastWorked,
      employer: employer,
      employerAddress: employerAddress,
      employerPhone: employerPhone,
      kinName: kinName,
      kinAddress: kinAddress,
      kinPhone: kinPhone,
      kinRelationship: kinRelationship,
      signature: signature,
      signatureDate: date,
    };

    // Send the data to the server

    // Refetch the data from the server

    return;
  };

  return (
    <div>
      {/* Header */}
      <div>
        <h2>Life Claim Information Request</h2>
      </div>

      {/* Checklist */}
      <h3>Claim Checklist</h3>
      <div></div>

      {/* Deceased Information */}
      <h3>Deceased Information</h3>
      <div></div>

      {/* Medical Information */}
      <h3>Medical Information</h3>
      <div></div>

      {/* Employment Information */}
      <h3>Employment Information</h3>
      <div></div>

      {/* Next of Kin Information */}
      <h3>Next of Kin Information</h3>
      <div></div>

      {/* Authorization */}
      <h3>Authorization</h3>
      <div></div>

      {/* Checklist for Claim */}
      <h3>Claim Checklist</h3>
      <div></div>

      {/* Next of Kin Information for */}
      <h3>Next of Kin Information</h3>
      <div></div>

      {/* Authorization */}
      <h3>Authorization</h3>
      <div></div>
    </div>
  );
};

export default LifeClaimInformationRequestForm;
