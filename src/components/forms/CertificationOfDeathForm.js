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
        <h3>
          I, the undersigned, hereby certify the Deceased was officially
          pronounced dead:
        </h3>
        <p>Full name of deceased</p>
        <p>Date of death (mo/day/yr)</p>
        <p>Time of death</p>
        <p>Immediate Cause of Death</p>
        <p>Due to a consequence of</p>
        <p>When did symptoms first appear or accident happen (mo/day/yr)</p>
        <p>Cause of death</p>
        <p>Place of death (if institution or hospital, give name)</p>
        <p>Was an inquest held?</p>
        <p>Was an autopsy performed?</p>
      </div>

      {/* Signature of Person Providing Certification */}
      <div>
        <h3>Signature of Person Providing Certification</h3>
        <p>Name</p>
        <p>Title</p>
        <p>Address</p>
        <p>Phone number</p>
        <p>Signature</p>
        <p>Date (mo/day/yr)</p>
      </div>
    </div>
  );
};

export default CertificationOfDeathForm;
