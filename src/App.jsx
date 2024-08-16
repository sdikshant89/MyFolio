import { Box } from '@mui/material';
import { blue } from '@mui/material/colors';
import AppHeader from './components/Header';
function App() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        margin: 0,
        padding: 0,
        backgroundColor: blue,
      }}
      classname="parentBox"
    >
      <AppHeader />
      <p>Click on the Vite and React logos to learn more</p>
    </Box>
  );
}

export default App;
