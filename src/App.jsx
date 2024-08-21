import { ThemeProvider } from '@mui/material/styles';
import MainPage from './pages/MainPage';
import { darkTheme } from './themes/darkTheme';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <MainPage theme={darkTheme} />
    </ThemeProvider>
  );
}

export default App;
