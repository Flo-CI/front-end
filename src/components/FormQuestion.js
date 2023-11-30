const FormQuestion = ({ text, state, setState }) => {
  return (
    <div>
      <p>{text}</p>
      <TextField
        id={state}
        label={state}
        variant="outlined"
        onChange={(event) => {
          setState(event.target.value);
        }}
      />
    </div>
  );
};

export default FormQuestion;
