import { Box, Typography } from '@mui/material';
import UofALogo from '../logos/UofA.png';
import KiitLogo from '../logos/kiitLogo.png';

const pageStyles = {
  container: {
    width: '100%',
    height: '70vh',
    position: 'sticky',
    minHeight: '700px',
    minWidth: '950px',
    paddingTop: '20vh',
  },
  superHead: {
    color: 'darkgrey',
    marginLeft: '8vw',
    fontWeight: 500,
  },
  head: {
    color: 'white',
    userSelect: 'none',
    fontWeight: '700',
    fontSize: '4rem',
    marginLeft: '8vw',
    maxWidth: '50vw',
    minWidth: '100px',
  },
  logos: {
    width: '12rem',
    marginLeft: '8vw',
  },
};

function eduBox(color, uni, uniLink, course, courseLink, year, alignText) {
  return (
    <>
      <Box container="span">
        <Typography
          sx={{
            color: color,
            userSelect: 'none',
            fontWeight: '600',
            fontSize: '2.5rem',
            textAlign: alignText,
          }}
        >
          <a
            href={uniLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {uni}
          </a>
        </Typography>
        <Typography
          sx={{
            color: 'white',
            userSelect: 'none',
            fontWeight: '300',
            fontSize: '1.5rem',
            textAlign: alignText,
          }}
        >
          <a
            href={courseLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {course}
          </a>
        </Typography>
        <Typography
          sx={{
            color: 'grey',
            userSelect: 'none',
            fontWeight: '400',
            fontSize: '1.5rem',
            textAlign: alignText,
          }}
        >
          {year}
        </Typography>
      </Box>
    </>
  );
}

function EducationPage(props) {
  return (
    <Box container="div" sx={pageStyles.container}>
      <Box container="span" sx={{ width: '50%' }}>
        <Typography sx={pageStyles.superHead}>Education</Typography>
        <Typography sx={pageStyles.head}>
          Recent Schools that I Attended
        </Typography>
      </Box>
      <Box container="span" sx={{ width: '50%' }}></Box>
      <Box
        container="div"
        sx={{
          width: '100%',
          marginTop: '5vh',
          display: 'flex',
          alignItems: 'flex-start',
        }}
      >
        <img src={UofALogo} alt="" style={pageStyles.logos}></img>
        {eduBox(
          '#F2CC00',
          'University of Alberta',
          'https://www.ualberta.ca/en/index.html',
          'Masters of Science in Computer Science - Multimedia',
          'https://www.ualberta.ca/en/computing-science/graduate-studies/programs-and-admissions/multimedia.html',
          "2023 - Present (Expected April 25')",
          'left'
        )}
      </Box>
      <Box
        container="div"
        sx={{
          width: '100%',
          marginTop: '2vh',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        {eduBox(
          '#00A9D8',
          'KIIT University',
          'https://kiit.ac.in/',
          'Bachelors in Technology (Computer Engineering - I.T.)',
          'https://cse.kiit.ac.in/b-tech-in-information-technology/',
          '2018 - 2022',
          'right'
        )}
        <img
          src={KiitLogo}
          alt=""
          style={{ width: '12rem', marginLeft: '1vw', marginRight: '8vw' }}
        ></img>
      </Box>
    </Box>
  );
}

export default EducationPage;
