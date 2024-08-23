import { Box, Button, Typography } from '@mui/material';
import CppIcon from '../logos/skills/c-sharp.png';
import CSSIcon from '../logos/skills/css.png';
import GitIcon from '../logos/skills/git.png';
import HTMLIcon from '../logos/skills/html.png';
import JavaIcon from '../logos/skills/java.png';
import JiraIcon from '../logos/skills/jira.png';
import JsIcon from '../logos/skills/js.png';
import PyIcon from '../logos/skills/py.png';
import ReactIcon from '../logos/skills/react.png';
import SqlIcon from '../logos/skills/sql.png';

const pageStyles = {
  backgroundText: {
    color: '#242526',
    fontWeight: 700,
    fontSize: '28rem',
    lineHeight: 0.75,
    userSelect: 'none',
    position: 'absolute',
    zIndex: 1,
    animation: 'fadeInFromLeft 1s ease-out',
  },
  container: {
    width: '100%',
    height: '85vh', //Total height (minus) AppHeader height
    position: 'relative',
    marginTop: '15vh',
  },
  myName: {
    color: 'white',
    userSelect: 'none',
    fontWeight: '700',
    fontSize: '4rem',
    textAlign: 'right',
  },
  logos: {
    width: '1.5rem',
  },
};

const fadeInLeftStyles = `
@keyframes fadeInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
`;

const fadeInRightStyles = `
@keyframes fadeInFromRight {
  from {
    opacity: 0;
    transform: translateX(+100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
`;

document.head.insertAdjacentHTML(
  'beforeend',
  `<style>${fadeInLeftStyles}</style>`
);

document.head.insertAdjacentHTML(
  'beforeend',
  `<style>${fadeInRightStyles}</style>`
);

function WelcomePage(props) {
  return (
    <Box sx={pageStyles.container} className="WecomePageContainer">
      <Typography sx={pageStyles.backgroundText}>Hey!</Typography>
      <Box
        container="div"
        sx={{
          height: '50vh',
          width: '60vw',
          zIndex: 5,
          position: 'relative',
          margin: '25vh 10vw',
          animation: 'fadeInFromRight 1s ease-out',
        }}
      >
        <Box container="span">
          <Box container="div">
            <Typography sx={pageStyles.myName}>I'm Dikshant Sharma</Typography>
          </Box>
          <Box container="div">
            <Typography
              sx={{
                color: 'lightgrey',
                textAlign: 'right',
                userSelect: 'none',
              }}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
            </Typography>
          </Box>
          <Box
            container="div"
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '2vw',
              marginTop: '2vh',
            }}
          >
            <Button
              component="a"
              href="https://www.python.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={PyIcon} alt="" style={pageStyles.logos}></img>
            </Button>
            <Button
              component="a"
              href="https://www.mysql.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={SqlIcon} alt="" style={pageStyles.logos}></img>
            </Button>
            <Button
              component="a"
              href="https://nodejs.org/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={JsIcon} alt="" style={pageStyles.logos}></img>
            </Button>
            <Button
              component="a"
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={HTMLIcon} alt="" style={pageStyles.logos}></img>
            </Button>
            <Button
              component="a"
              href="https://www.atlassian.com/software/jira"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={JiraIcon} alt="" style={pageStyles.logos}></img>
            </Button>
            <Button
              component="a"
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ReactIcon} alt="" style={pageStyles.logos}></img>
            </Button>
            <Button
              component="a"
              href="https://www.java.com/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={JavaIcon} alt="" style={pageStyles.logos}></img>
            </Button>
            <Button
              component="a"
              href="https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/overview"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={CppIcon} alt="" style={pageStyles.logos}></img>
            </Button>
            <Button
              component="a"
              href="https://git-scm.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GitIcon} alt="" style={pageStyles.logos}></img>
            </Button>
            <Button
              component="a"
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={CSSIcon} alt="" style={pageStyles.logos}></img>
            </Button>
          </Box>
        </Box>
        <Box container="span"></Box>
      </Box>
    </Box>
  );
}

export default WelcomePage;
