import { Card, CardContent, Typography } from '@mui/material';

const cardStyles = {
  container: {
    background: 'transparent',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  desc: {
    color: 'lightgrey',
    wordWrap: 'break-word',
  },
  cardNum: {
    color: 'grey',
    fontWeight: '400',
    fontSize: '10rem',
    lineHeight: 1,
  },
};

function WorkExCards(props) {
  return (
    <Card sx={cardStyles.container}>
      <CardContent sx={cardStyles.content}>
        <Typography sx={cardStyles.cardNum}>{props.number}</Typography>
        <Typography
          sx={{ color: 'white', fontSize: '1.5rem', fontWeight: 400 }}
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
          asdnfhjksdnfhjksdnfknasjnfdkjanekhfnhksenfhknaskjdnkhakhedndjk nfjkasn
          dkfjnjakds
        </Typography>
      </CardContent>
    </Card>
  );
}

export default WorkExCards;
