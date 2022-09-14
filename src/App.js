import {Button} from '@mui/material';
import {Settings} from '@mui/icons-material';

function App() {
  return (
    <div className="App">
      <Button startIcon={<Settings />} variant="contained" color="secondary">Click Me!</Button>
    </div>
  );
}

export default App;
