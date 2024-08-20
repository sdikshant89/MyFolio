import { Box, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import AppHeader from './components/Header';
import { lightTheme } from './themes/lightTheme';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box
        sx={{
          flexGrow: 1,
          margin: 0,
          padding: 0,
        }}
        classname="parentBox"
      >
        <AppHeader />
        <Typography>Click on the Vite and React logos to learn more</Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;
