import LocationOnIcon from '@mui/icons-material/LocationOn';
import TodayIcon from '@mui/icons-material/Today';
import { Box, Card, CardContent, Typography } from '@mui/material';

const cardStyles = {
  container: {
    background: 'transparent',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  desc: {
    color: 'white',
    wordWrap: 'break-word',
    fontWeight: 300,
    fontSize: '1.1rem',
  },
  cardNum: {
    color: 'grey',
    fontWeight: '400',
    fontSize: '11rem',
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
        <Typography sx={cardStyles.desc}>
          I made something, did something and tried something, pretty good,
          pretty nice, bbye
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
