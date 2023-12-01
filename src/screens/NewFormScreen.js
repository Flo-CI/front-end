import CertificationOfDeathForm from "../components/forms/CertificationOfDeathForm";
const NewFormScreen = () => {
  return (
    <div>
      <h1>Please fill out the following form:</h1>
      {/* The following form is hardcoded for now. To handle multiple forms in the future, we will determine it by props */}
      <CertificationOfDeathForm />
    </div>
  );
};

export default NewFormScreen;
