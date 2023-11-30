import { TextField } from "@mui/material";
import { useState } from "react";

const CertificationOfDeathForm = () => {
  const [claimNumber, setClaimNumber] = useState("");

  // Main Section
  const [deceasedName, setDeceasedName] = useState("");
  const [dod, setDod] = useState("");
  const [timeOfDeath, setTimeOfDeath] = useState("");
  const [immediateCauseOfDeath, setImmediateCauseOfDeath] = useState("");
  const [consequenceOfDeath, setConsequenceOfDeath] = useState("");
  const [syptomsFirstAppeared, setSyptomsFirstAppeared] = useState("");
  const [causeOfDeath, setCauseOfDeath] = useState(""); // natural, accident, suicide, homicide, undetermined
  const [placeOfDeath, setPlaceOfDeath] = useState("");
  const [inquest, setInquest] = useState(false);
  const [autopsyPerformed, setAutopsyPerformed] = useState(false);

  // Signature of Person Providing Certification
  const [signeeName, setSigneeName] = useState("");
  const [signeeTitle, setSigneeTitle] = useState("");
  const [signeeAddress, setSigneeAddress] = useState("");
  const [signeePhoneNumber, setSigneePhoneNumber] = useState("");
  const [signeeSignature, setSigneeSignature] = useState("");
  const [signatureDate, setSignatureDate] = useState("");

  const handleSubmit = () => {
    const formData = {
      claimNumber: claimNumber,
      deceasedName: deceasedName,
      dod: dod,
      timeOfDeath: timeOfDeath,
      immediateCauseOfDeath: immediateCauseOfDeath,
      consequenceOfDeath: consequenceOfDeath,
      syptomsFirstAppeared: syptomsFirstAppeared,
      causeOfDeath: causeOfDeath,
      placeOfDeath: placeOfDeath,
      inquest: inquest,
      autopsyPerformed: autopsyPerformed,
      signeeName: signeeName,
      signeeTitle: signeeTitle,
      signeeAddress: signeeAddress,
      signeePhoneNumber: signeePhoneNumber,
      signeeSignature: signeeSignature,
      signatureDate: signatureDate,
    };
  };

  return (
    <div>
      <h2>Certification of Death - Physician Statement</h2>

      {/* Main Section */}
      <div>
        <h3>
          To be completed by attending physician, coroner or family doctor
          certifying the death of the insured.{" "}
        </h3>
        <p>Claim number: </p>
        <TextField
          id="claim-number"
          label="Claim number"
          variant="outlined"
          onChange={(event) => {
            setClaimNumber(event.target.value);
          }}
        />
        <h3>
          I, the undersigned, hereby certify the Deceased was officially
          pronounced dead:
        </h3>
        <p>Full name of deceased</p>
        <TextField
          id="claim-number"
          label="Claim number"
          variant="outlined"
          onChange={(event) => {
            setClaimNumber(event.target.value);
          }}
        />
        <p>Date of death (mo/day/yr)</p>
        <TextField
          id="claim-number"
          label="Claim number"
          variant="outlined"
          onChange={(event) => {
            setClaimNumber(event.target.value);
          }}
        />
        <p>Time of death</p>
        <TextField
          id="claim-number"
          label="Claim number"
          variant="outlined"
          onChange={(event) => {
            setClaimNumber(event.target.value);
          }}
        />
        <p>Immediate Cause of Death</p>
        <TextField
          id="claim-number"
          label="Claim number"
          variant="outlined"
          onChange={(event) => {
            setClaimNumber(event.target.value);
          }}
        />
        <p>Due to a consequence of</p>
        <TextField
          id="claim-number"
          label="Claim number"
          variant="outlined"
          onChange={(event) => {
            setClaimNumber(event.target.value);
          }}
        />
        <p>When did symptoms first appear or accident happen (mo/day/yr)</p>
        <TextField
          id="claim-number"
          label="Claim number"
          variant="outlined"
          onChange={(event) => {
            setClaimNumber(event.target.value);
          }}
        />
        <p>Cause of death</p>
        <TextField
          id="claim-number"
          label="Claim number"
          variant="outlined"
          onChange={(event) => {
            setClaimNumber(event.target.value);
          }}
        />
        <p>Place of death (if institution or hospital, give name)</p>
        <TextField
          id="claim-number"
          label="Claim number"
          variant="outlined"
          onChange={(event) => {
            setClaimNumber(event.target.value);
          }}
        />
        <p>Was an inquest held?</p>
        <TextField
          id="claim-number"
          label="Claim number"
          variant="outlined"
          onChange={(event) => {
            setClaimNumber(event.target.value);
          }}
        />
        <p>Was an autopsy performed?</p>
        <TextField
          id="claim-number"
          label="Claim number"
          variant="outlined"
          onChange={(event) => {
            setClaimNumber(event.target.value);
          }}
        />
      </div>

      {/* Signature of Person Providing Certification */}
      <div>
        <h3>Signature of Person Providing Certification</h3>
        <p>Name</p>
        <TextField
          id="claim-number"
          label="Claim number"
          variant="outlined"
          onChange={(event) => {
            setClaimNumber(event.target.value);
          }}
        />
        <p>Title</p>
        <TextField
          id="claim-number"
          label="Claim number"
          variant="outlined"
          onChange={(event) => {
            setClaimNumber(event.target.value);
          }}
        />
        <p>Address</p>
        <TextField
          id="claim-number"
          label="Claim number"
          variant="outlined"
          onChange={(event) => {
            setClaimNumber(event.target.value);
          }}
        />
        <p>Phone number</p>
        <TextField
          id="claim-number"
          label="Claim number"
          variant="outlined"
          onChange={(event) => {
            setClaimNumber(event.target.value);
          }}
        />
        <p>Signature</p>
        <TextField
          id="claim-number"
          label="Claim number"
          variant="outlined"
          onChange={(event) => {
            setClaimNumber(event.target.value);
          }}
        />
        <p>Date (mo/day/yr)</p>
        <TextField
          id="claim-number"
          label="Claim number"
          variant="outlined"
          onChange={(event) => {
            setClaimNumber(event.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default CertificationOfDeathForm;
