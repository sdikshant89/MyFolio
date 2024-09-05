import { Box } from '@mui/material';
import * as React from 'react';
import ContactPopup from '../components/ContactPopup';
import Footer from '../components/Footer';
import AppHeader from '../components/Header';
import InitialPopup from '../components/InitialPopup';
import EducationPage from './EducationPage';
import SkillsPage from './SkillsPage';
import WelcomePage from './WelcomePage';
import WorkExPage from './WorkExPage';

function MainPage(props) {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [open, setOpen] = React.useState(true);
  const [hiOpen, setHiOpen] = React.useState(false);

  const handleHiOpen = () => {
    setHiOpen(true);
  };

  const handleHiClose = () => {
    setHiOpen(false);
  };

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
      <ContactPopup handleClose={handleHiClose} open={hiOpen} />

      <AppHeader scrollToSection={scrollToSection} handleOpen={handleHiOpen} />
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          boxSizing: 'border-box',
        }}
        id="WelcomePageContainer"
      >
        <WelcomePage />
        <WorkExPage />
        <SkillsPage />
        <EducationPage />
        <Footer scrollToSection={scrollToSection} />
      </Box>
    </Box>
  );
}

export default MainPage;

// const InvisibleScrollbarBox = styled(Box)({
//   scrollbarWidth: 'thin',
//   scrollbarColor: 'transparent transparent',

//   '&::-webkit-scrollbar': {
//     width: 0,
//     background: 'transparent',
//   },

//   '&:hover::-webkit-scrollbar': {
//     width: '8px',
//   },

//   '&::-webkit-scrollbar-thumb': {
//     backgroundColor: 'rgba(0, 0, 0, 0.3)',
//     borderRadius: '10px',
//   },
// });
