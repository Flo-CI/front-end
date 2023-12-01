import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import FormQuestion from "../FormQuestion";

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
  const [inquest, setInquest] = useState("");
  const [autopsyPerformed, setAutopsyPerformed] = useState("");

  // Signature of Person Providing Certification
  const [signeeName, setSigneeName] = useState("");
  const [signeeTitle, setSigneeTitle] = useState("");
  const [signeeAddress, setSigneeAddress] = useState("");
  const [signeePhoneNumber, setSigneePhoneNumber] = useState("");
  const [signeeSignature, setSigneeSignature] = useState("");
  const [signatureDate, setSignatureDate] = useState("");

  // TODO: Connect to backend and rest of app in next pr
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

    // For now to show that the change works
    console.log(formData);
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

        <FormQuestion
          text="Claim number: "
          placeholderText="Claim number"
          setState={setClaimNumber}
        />

        <h3>
          I, the undersigned, hereby certify the Deceased was officially
          pronounced dead:
        </h3>

        <FormQuestion
          text="Full name of deceased: "
          placeholderText="Enter full name of deceased"
          setState={setDeceasedName}
        />

        <FormQuestion
          text="Date of death (mo/day/yr): "
          placeholderText="mo/day/yr"
          setState={setDod}
        />

        <p>Time of death: </p>
        <FormControl fullWidth>
          <InputLabel>AM/PM</InputLabel>
          <Select
            value={timeOfDeath}
            label="timeOfDeath"
            onChange={(event) => {
              setTimeOfDeath(event.target.value);
            }}
          >
            <MenuItem value={10}>AM</MenuItem>
            <MenuItem value={20}>PM</MenuItem>
          </Select>
        </FormControl>

        <FormQuestion
          text="Immediate Cause of Death: "
          placeholderText="Cause of death"
          setState={setImmediateCauseOfDeath}
        />

        <FormQuestion
          text="Due to a consequence of: "
          placeholderText="How did the death happen?"
          setState={setConsequenceOfDeath}
        />

        <FormQuestion
          text="When did symptoms first appear or accident happen (mo/day/yr): "
          placeholderText="When did symptoms first appear?"
          setState={setSyptomsFirstAppeared}
        />

        <p>Cause of death</p>
        <FormControl fullWidth>
          <InputLabel>Cause of death</InputLabel>
          <Select
            value={causeOfDeath}
            label="causeOfDeath"
            onChange={(event) => {
              setCauseOfDeath(event.target.value);
            }}
          >
            <MenuItem value={10}>Natural</MenuItem>
            <MenuItem value={20}>Accident</MenuItem>
            <MenuItem value={30}>Suicide</MenuItem>
            <MenuItem value={40}>Homicide</MenuItem>
            <MenuItem value={50}>Undetermined</MenuItem>
          </Select>
        </FormControl>

        <FormQuestion
          text="Place of death (if institution or hospital, give name): "
          placeholderText="Place of death"
          setState={setPlaceOfDeath}
        />

        <p>Was an inquest held?</p>
        <FormControl fullWidth>
          <InputLabel>Yes/No</InputLabel>
          <Select
            value={inquest}
            label="inquest"
            onChange={(event) => {
              setInquest(event.target.value);
            }}
          >
            <MenuItem value={10}>Yes</MenuItem>
            <MenuItem value={20}>No</MenuItem>
          </Select>
        </FormControl>

        <p>Was an autopsy performed?</p>
        <FormControl fullWidth>
          <InputLabel>Yes/No</InputLabel>
          <Select
            value={autopsyPerformed}
            label="autopsy"
            onChange={(event) => {
              setAutopsyPerformed(event.target.value);
            }}
          >
            <MenuItem value={10}>Yes</MenuItem>
            <MenuItem value={20}>No</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* Signature of Person Providing Certification */}
      <div>
        <h3>Signature of Person Providing Certification</h3>

        <FormQuestion
          text="Name: "
          placeholderText="Your name"
          setState={setSigneeName}
        />

        <FormQuestion
          text="Title: "
          placeholderText="Your title"
          setState={setSigneeTitle}
        />

        <FormQuestion
          text="Address: "
          placeholderText="Your address"
          setState={setSigneeAddress}
        />

        <FormQuestion
          text="Phone number: "
          placeholderText="Your phone number"
          setState={setSigneePhoneNumber}
        />

        {/* For now, the signature will be typed. In future versions, we can implement digital wet signature */}
        <FormQuestion
          text="Signature: "
          placeholderText="Your signature"
          setState={setSigneeSignature}
        />

        <FormQuestion
          text="Date Signed: "
          placeholderText="Today's date"
          setState={setSignatureDate}
        />
      </div>

      {/* Submit Button */}
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default CertificationOfDeathForm;
