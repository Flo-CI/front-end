/* 
Class intended to encapsulate a question and text input field for a form.
*/

import { TextField } from "@mui/material";

const FormQuestion = ({ text, placeholderText, setState }) => {
  let stateId = String(placeholderText).toLowerCase().replace(" ", "");

  return (
    <div>
      <p>{text}</p>
      <TextField
        id={stateId}
        label={placeholderText}
        variant="outlined"
        onChange={(event) => {
          setState(event.target.value);
        }}
      />
    </div>
  );
};

export default FormQuestion;
