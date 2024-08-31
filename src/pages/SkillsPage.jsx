import { Box, Typography } from '@mui/material';

const pageStyles = {
  container: {
    width: '100%',
    height: '70vh',
    position: 'sticky',
    minHeight: '600px',
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
  Subhead: {
    color: 'grey',
    userSelect: 'none',
    fontWeight: '400',
    fontSize: '1.5rem',
    marginLeft: '8vw',
    maxWidth: '35vw',
    minWidth: '500px',
  },
};

function SkillsPage(props) {
  return (
    <Box container="div" sx={pageStyles.container} id="SkillsPageContainer">
      <Box container="span" sx={{ width: '50%' }}>
        <Typography sx={pageStyles.superHead}>SkillSet</Typography>
        <Typography sx={pageStyles.head}>My Technical Skills</Typography>
        <Typography sx={pageStyles.Subhead}>
          With expertise in multiple areas of software development, I am
          well-equipped to handle a full-scale project. Whether your needs are
          on the frontend or backend, I am ready to take on any challenge.
        </Typography>
      </Box>
      <Box container="span" sx={{ width: '50%' }}></Box>
    </Box>
  );
}

export default SkillsPage;
