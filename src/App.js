import './App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function App() {
  return (
    <div>
      <h1>Flo.CI Claim Submission Demo</h1>
      <h2>
        <Stack spacing={2} direction="row">
          <Button variant="contained" color="success" sx={{m: 1}}>Submit claim</Button>
          <Button variant="contained" color="success" sx={{m: 1}}>Retrieve claim</Button>
        </Stack>
      </h2>
      <h3>
        <TextField id="filled-basic" label="Please enter claim number" variant="filled" 
        color="success"  sx={{m: 1, width: '42ch'}}/>
      </h3>
      <h4>
      <TextField disabled id="filled-basic" label="Claim Number (from database)" variant="filled" 
        color="success"  sx={{m: 1, width: '49ch'}}/>
      </h4>
    </div>
  );
}

export default App;
