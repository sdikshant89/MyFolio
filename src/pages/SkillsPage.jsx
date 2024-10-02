import { Box, Button, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { Hexagon, Honeycomb } from 'react-honeycomb';
import AgileIcon from '../logos/skills/agile.png';
import CSharIcon from '../logos/skills/c-sharp.png';
import CSSIcon from '../logos/skills/css.png';
import GitIcon from '../logos/skills/git.png';
import hbIcon from '../logos/skills/hibernate.png';
import HTMLIcon from '../logos/skills/html.png';
import JavaIcon from '../logos/skills/java.png';
import JiraIcon from '../logos/skills/jira.png';
import JsIcon from '../logos/skills/js.png';
import PyIcon from '../logos/skills/py.png';
import ReactIcon from '../logos/skills/react.png';
import SpringIcon from '../logos/skills/springBoot.png';
import SqlIcon from '../logos/skills/sql.png';
import JunitIcon from '../logos/skills/testingg.png';
import './styless.css';

const pageStyles = {
  container: {
    width: '100%',
    height: '110vh',
    position: 'sticky',
    minHeight: '800px',
    paddingTop: '20vh',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
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
  logos: {
    width: '8rem',
    paddingTop: '2vh',
  },
};

const items = [
  {
    name: 'HTML',
    hpLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    logo: HTMLIcon,
  },
  {
    name: 'CSS',
    hpLink: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    logo: CSSIcon,
  },
  { name: 'Python', hpLink: 'https://www.python.org/', logo: PyIcon },
  { name: 'Java', hpLink: 'https://www.java.com/en/', logo: JavaIcon },
  { name: 'Javascript', hpLink: 'https://nodejs.org/en', logo: JsIcon },
  {
    name: 'C#',
    hpLink:
      'https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/overview',
    logo: CSharIcon,
  },
  { name: 'React', hpLink: 'https://react.dev/', logo: ReactIcon },
  { name: 'SQL', hpLink: 'https://www.mysql.com/', logo: SqlIcon },

  { name: 'Git', hpLink: 'https://git-scm.com/', logo: GitIcon },

  {
    name: 'Spring Boot',
    hpLink: 'https://spring.io/projects/spring-boot',
    logo: SpringIcon,
  },
  {
    name: 'Jira',
    hpLink: 'https://www.atlassian.com/software/jira',
    logo: JiraIcon,
  },
  // { name: 'C++', hpLink: 'https://www.python.org/', logo: CppIcon },
  { name: 'Agile', hpLink: 'https://www.atlassian.com/agile', logo: AgileIcon },
  { name: 'Hibernate', hpLink: 'https://hibernate.org/', logo: hbIcon },
  { name: 'Junit', hpLink: 'https://junit.org/junit5/', logo: JunitIcon },
];

const sideLength = screen.availHeight * 0.1;

function SkillsPage(props) {
  const [hexagonSize, setHexagonSize] = useState(45);

  const scrollContainerRef = useRef(null); // Create a reference to the Box container

  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollWidth = scrollContainerRef.current.scrollWidth;
      const clientWidth = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollLeft = (scrollWidth - clientWidth) / 2;
    }
  }, []);

  useEffect(() => {
    const updateHexagonSize = () => {
      const minSize = 45;
      const maxSize = 150;
      const avgSize = Math.max(
        minSize,
        Math.min(window.innerHeight * 0.2, maxSize)
      );
      setHexagonSize(avgSize);
    };
    updateHexagonSize();

    window.addEventListener('resize', updateHexagonSize);

    return () => window.removeEventListener('resize', updateHexagonSize);
  }, []);

  const [selected, setSelected] = useState(-1);
  const handleSelect = (index) => {
    alert('Hello');
    setSelected(index);
  };

  return (
    <Box container="div" sx={pageStyles.container} id="SkillsPageContainer">
      <Box container="div" sx={pageStyles.topSection}>
        <Box container="span" sx={{ width: '60%', height: '25%' }}>
          <Typography sx={pageStyles.superHead}>SkillSet</Typography>
          <Typography sx={pageStyles.head}>My Technical Skills</Typography>
          <Typography sx={pageStyles.Subhead}>
            With expertise in multiple areas of software development, I am
            well-equipped to handle a full-scale project. Whether your needs are
            on the frontend or backend, I am ready to take on any challenge.
          </Typography>
        </Box>
        <Box container="span" sx={{ width: '40%', height: '25%' }}></Box>
      </Box>

      <Box
        ref={scrollContainerRef}
        container="div"
        sx={{
          width: '100%',
          height: '75%',
          marginTop: '2vh',
          maxWidth: '100vw',
          overflowX: 'auto',
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        <Honeycomb
          columns={7}
          size={hexagonSize}
          items={items}
          renderItem={(item, index) => (
            <Hexagon className="imageHover">
              <Button
                component="a"
                href={item.hpLink}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#242526',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textDecoration: 'none',
                  padding: 0,
                }}
              >
                <img src={item.logo} alt={item.name} style={pageStyles.logos} />
                <Typography
                  sx={{
                    fontSize: '1.2rem',
                    color: 'grey',
                    marginTop: '2vh',
                  }}
                >
                  {item.name}
                </Typography>
              </Button>
            </Hexagon>
          )}
        />
      </Box>
    </Box>
  );
}

export default SkillsPage;
