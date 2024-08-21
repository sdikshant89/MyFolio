import { Box } from '@mui/material';
import AppHeader from '../components/Header';
import WelcomePage from './WelcomePage';

function MainPage(props) {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        overflowY: 'scroll',
        flexGrow: 1,
        margin: 0,
        padding: 0,
        backgroundColor: props.theme.palette.background.default,
      }}
      classname="parentBox"
    >
      <AppHeader />
      <WelcomePage />
    </Box>
  );
}

export default MainPage;
