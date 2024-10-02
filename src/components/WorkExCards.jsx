import LocationOnIcon from '@mui/icons-material/LocationOn';
import TodayIcon from '@mui/icons-material/Today';
import { Box, Card, CardContent, Typography } from '@mui/material';

const cardStyles = {
  container: {
    background: 'transparent',
    width: '25vw',
    minWidth: '400px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '400px',
    alignItems: 'flex-start',
  },
  desc: {
    color: 'white',
    wordWrap: 'break-word',
    fontWeight: 300,
    fontSize: '1.1rem',
    overflowY: 'auto',
    height: '5vh',
    '&::-webkit-scrollbar': {
      display: 'none', // Hides the scrollbar
    },
    /* Firefox */
    scrollbarWidth: 'none', // Hides the scrollbar
  },
  cardNum: {
    color: 'grey',
    fontWeight: '300',
    fontSize: '13rem',
    lineHeight: 1,
  },
};

function WorkExCards(props) {
  return (
    <Card sx={cardStyles.container}>
      <CardContent sx={cardStyles.content}>
        <Typography sx={cardStyles.cardNum}>{props.number}</Typography>
        <Typography
          sx={{ color: 'white', fontSize: '1.3rem', fontWeight: 500 }}
          container="span"
        >
          <span
            style={{
              color:
                props.compName === 'Highradius Technologies'
                  ? '#4e5fdc'
                  : 'orange',
            }}
          >
            {props.compName}
          </span>
          , {props.position}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            marginTop: '1.5vh',
          }}
        >
          <TodayIcon sx={{ color: 'grey', marginRight: '0.2vw' }} />
          <Typography sx={{ color: 'grey', fontSize: '1rem' }}>
            {props.year}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            marginTop: '1vh',
          }}
        >
          <LocationOnIcon sx={{ color: 'grey' }} />
          <Typography sx={{ color: 'grey', fontSize: '1rem' }}>
            {props.location}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default WorkExCards;
