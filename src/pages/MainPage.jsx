import { Box } from '@mui/material';
import Footer from '../components/Footer';
import AppHeader from '../components/Header';
import WelcomePage from './WelcomePage';
import WorkExPage from './WorkExPage';

function MainPage(props) {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        overflowY: 'auto',
        flexGrow: 1,
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: props.theme.palette.background.default,
      }}
    >
      <AppHeader />
      <WelcomePage />
      <WorkExPage />
      <Footer />
    </Box>
  );
}

export default MainPage;
