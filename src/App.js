import {Button, styled, Typography} from '@mui/material';
import {Settings} from '@mui/icons-material';

function App() {
  const BlueButton = styled(Button)({
    backgroundColor:'skyblue',
    color:'#888',
    margin:5,
    '&:hover': {
      backgroundColor:'lightblue'
    },
    '&:disabled': {
      backgroundColor:'grey',
      color:'white'
    }
  })

  return (
    <div className="App">
      <Button startIcon={<Settings />} variant="contained" color="secondary">Click Me!</Button>
      <BlueButton>My Button</BlueButton>
    </div>
  );
}

export default App;
