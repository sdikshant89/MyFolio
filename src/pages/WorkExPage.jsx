import { Box, Typography } from '@mui/material';
import WorkExCards from '../components/WorkExCards';

const pageStyles = {
  container: {
    width: '100%',
    height: '85vh', //Total height (minus) AppHeader height
    position: 'relative',
  },
  head: {
    color: 'darkgrey',
    marginLeft: '8vw',
    fontWeight: 500,
  },
  subHead: {
    color: 'white',
    userSelect: 'none',
    fontWeight: '700',
    fontSize: '4rem',
    marginLeft: '8vw',
    maxWidth: '50vw', // Set the maximum width for the text
    wordWrap: 'break-word',
  },
  cardBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '2vh 8vw 2vh 8vw',
    gap: '2vw',
  },
};

function WorkExPage(props) {
  return (
    <Box container="div" sx={pageStyles.container}>
      <Box container="div" className="insideBox">
        <Typography sx={pageStyles.head}>Work Experience</Typography>
      </Box>
      <Box container="div">
        <Typography sx={pageStyles.subHead}>
          Companies I have worked for in the past.
        </Typography>
      </Box>
      <Box container="div" sx={pageStyles.cardBox}>
        <WorkExCards
          number="01"
          compName="The Chokka Center"
          position="Software Developer Intern"
          location="Edmonton, AB, Canada"
          year="Jan 2024 - Present"
        />
        <WorkExCards
          number="02"
          compName="Highradius Technologies"
          position="Associate Software Engineer I"
          location="Hyderabad, Telangana, India"
          year="July 2022 - Aug. 2023"
        />
        <WorkExCards
          number="03"
          compName="Highradius Technologies"
          position="Software Engineer Intern"
          location="Bhubaneswar, Odisha, India"
          year="April 2021 - June 2022"
        />
      </Box>
    </Box>
  );
}

export default WorkExPage;
