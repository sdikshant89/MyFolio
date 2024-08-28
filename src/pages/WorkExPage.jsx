import { Box, Typography } from '@mui/material';
import WorkExCards from '../components/WorkExCards';

const pageStyles = {
  container: {
    width: '100vw',
    position: 'sticky',
    userSelect: 'none',
    zIndex: 5,
    minHeight: '800px',
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
    minWidth: '900px',
    maxWidth: '50vw',
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
          desc="Developed a microservice using Express and Node.js for mental health assessment and prediction, enhancing clinic software for improved patient record management and user experience."
        />
        <WorkExCards
          number="02"
          compName="Highradius Technologies"
          position="Associate Software Engineer I"
          location="Hyderabad, Telangana, India"
          year="July 2022 - Aug. 2023"
          desc="Led Agile practices and facilitated the migration of B2B payment systems to modern tech stack, resolving 150+ bugs and integrating JUnit testing across backend projects for enhanced efficiency."
        />
        <WorkExCards
          number="03"
          compName="Highradius Technologies"
          position="Software Engineer Intern"
          location="Bhubaneswar, Odisha, India"
          year="April 2021 - June 2022"
          desc="Developed a full-stack web app with React, SQL, and JDBC for managing B2B invoices, including features like invoice status management and dispute initiation. Also created a machine learning model to predict customer churn and estimate accounts receivable."
        />
      </Box>
    </Box>
  );
}

export default WorkExPage;
