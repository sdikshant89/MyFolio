import { Box, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import AppHeader from './components/Header';
import { darkTheme } from './themes/darkTheme';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          flexGrow: 1,
          margin: 0,
          padding: 0,
          backgroundColor: darkTheme.palette.background.default,
        }}
        classname="parentBox"
      >
        <AppHeader />
        <Typography sx={{ color: 'white' }}>
          Click on the Vite and React logos to learn more
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;
