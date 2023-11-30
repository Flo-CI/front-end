import { useState } from "react";

const LifeClaimInitiationLenderStatementForm = () => {
  const [claimNumber, setClaimNumber] = useState("");

  // Claim Checklist
  const [statementOfAccountAttached, setStatementOfAccountAttached] =
    useState(false);
  const [deathCertificateAttached, setDeathCertificateAttached] =
    useState(false);
  const [
    lifeCLiamInformationRequestProvided,
    setLifeClaimInformationRequestProvided,
  ] = useState(false);
  const [
    certificationOfDeathPhysiciansStatmentCompleted,
    setCertificationOfDeathPhysiciansStatmentCompleted,
  ] = useState(false);

  // Deceased Information
  const [deceasedName, setDeceasedName] = useState("");
  const [otherNames, setOtherNames] = useState([]); // ['name', 'name']
  const [dob, setDob] = useState("");
  const [dod, setDod] = useState("");
  const [deceasedAddress, setDeceasedAddress] = useState("");

  // Since there are up to 3 loans, index 0 is loan 1, index 1 is loan 2, etc.
  // General Loan Information
  const [loanNumbers, setLoanNumbers] = useState([0, 0, 0]);
  const [loanApprovalDates, setLoanApprovalDates] = useState(["", "", ""]);
  const [loanOrignalAmounts, setLoanOrignalAmounts] = useState([0, 0, 0]);
  const [amountsOfInsuranceAppliedFor, setAmountsOfInsuranceAppliedFor] =
    useState([0, 0, 0]);
  const [typesOfLoan, setTypesOfLoan] = useState(["", "", ""]); // ['closed end', 'open end']
  const [datesOfFirstPayment, setDatesOfFirstPayment] = useState(["", "", ""]);
  const [interestRates, setInterestRates] = useState([0, 0, 0]);
  const [amountOfMonthlyPayments, setAmountOfMonthlyPayments] = useState([
    0, 0, 0,
  ]);
  const [datesOfLastPaymentsBeforeDeath, setDatesOfLastPaymentsBeforeDeath] =
    useState([false, false, false]);
  const [balancesOnDateOfDeath, setBalancesOnDateOfDeath] = useState([0, 0, 0]);

  // Closed End Loans
  const [termsOfLoan, setTermsOfLoan] = useState(["", "", ""]); // ['months', 'months', 'months']
  const [scheduledMaturityDates, setScheduledMaturityDates] = useState([
    "",
    "",
    "",
  ]);
  const [loanRefinanceOfPreviousLoan, setLoanRefinanceOfPreviousLoan] =
    useState([false, false, false]);
  const [previousLoanNumbers, setPreviousLoanNumbers] = useState([0, 0, 0]);
  const [previousLoanEffectiveDates, setPreviousLoanEffectiveDates] = useState([
    "",
    "",
    "",
  ]);

  // Open End Loans and Advances Only
  const [advances, setAdvances] = useState([]); // [[date1, advance1], [date2, advance2]], ...]

  // Next of Kin
  const [kinName, setKinName] = useState("");
  const [kinAddress, setKinAddress] = useState("");
  const [kinPhone, setKinPhone] = useState("");
  const [kinRelationship, setKinRelationship] = useState("");

  // Signature of Authorized Representative
  const [nameOfLendingInstitution, setNameOfLendingInstitution] = useState("");
  const [addressOfLendingInstitution, setAddressOfLendingInstitution] =
    useState("");
  const [authorizedRepresentativeName, setAuthorizedRepresentativeName] =
    useState("");
  const [
    authorizedRepresentativeTelephone,
    setAuthorizedRepresentativeTelephone,
  ] = useState("");
  const [authorizedRepresentativeEmail, setAuthorizedRepresentativeEmail] =
    useState("");
  const [certificateNumber, setCertificateNumber] = useState("");
  const [signature, setSignature] = useState("");

  return (
    <div>
      <h2>Life Claim Initiation Lender Statement</h2>

      {/* Checklist */}

      {/* Deceased Information */}

      {/* General Loan Information */}

      {/* Closed End Loans */}

      {/* Open End Loans and Advances Only*/}

      {/* Next of Kin */}

      {/* Signature of Authorized Representative */}
    </div>
  );
};

export default LifeClaimInitiationLenderStatementForm;
