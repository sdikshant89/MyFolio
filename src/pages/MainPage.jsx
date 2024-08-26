import { Box } from '@mui/material';
import * as React from 'react';
import Footer from '../components/Footer';
import AppHeader from '../components/Header';
import InitialPopup from '../components/InitialPopup';
import WelcomePage from './WelcomePage';
import WorkExPage from './WorkExPage';

function MainPage(props) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };
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
      <InitialPopup handleClose={handleClose} open={open} />
      <AppHeader />
      <WelcomePage />
      <WorkExPage />
      <Footer />
    </Box>
  );
}

export default MainPage;
