import React from 'react';
import { Box, Typography } from '@mui/material';

import img1 from './images/camiloboxing.jpg';
import img2 from './images/IMG_4026.JPG';
import img3 from './images/IMG_4017.JPG';
import img4 from './images/IMG_4034.JPG';

export const projectData = [
  {
    id: 1,
    title: 'A martial artist',
    description:
      'Check-in system and admin dashboard designed for Reconomy AB. A full-stack employee time-tracking system built with Node.js, Express, and MySQL, featuring Employee Management, Time Logging, Admin Login, Cross-Origin Support. Backend on Heroku, frontend on Netlify.',
    img: img1,
  },
  {
    id: 2,
    title: 'A brother',
    description:
      'Camilo är alltid där för sin familj. När vi var 12 så kallade nåon min mamma något skit vidrigt och innan jag han agera tog camilo han i kragen o lyfte han från marken. Som att han var thanos sen åkte han på en oldfashioned ass whopping. Det var första gången i mitt liv någon skyddat mig på det sättet och det är något jag aldrig kommer glömma!',
    img: img2,
  },
  {
    id: 3,
    title: '<3',
    description: 'Riktig throwback här! LONG LIVE FRANKIE',
    img: img3,
  },
  {
    id: 4,
    title: 'ANT-BULLY',
    description:
      'Han illar inte när folk är elaka. Spelar ingen roll om det är mot hans nära eller en främling. Camilo är en riktig hjälte som står upp för de som inte kan stå upp för sig själva. Folke på bilden är inte en bully använde bara bilden för den var rolig',
    img: img4,
  },
];

const Projects = ({ projectData }) => (
  <Box className="projects" sx={{ px: 2, py: 4 }}>
    <div id="projects" />
    <Typography
      variant="h4"
      gutterBottom
      sx={{ fontWeight: 'bold', color: 'blue', textAlign: 'center' }}
    >
      My bro my bro
    </Typography>

    <Box
      className="project-list"
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      gap={4}
    >
      {projectData.map(({ id, title, description, img }) => (
        <Box
          key={id}
          className="project-card"
          sx={{
            width: '100%',
            maxWidth: 400,
            p: 2,
            border: '1px solid #ccc',
            borderRadius: 2,
            boxShadow: 2,
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            component="img"
            src={img}
            alt={title}
            sx={{
              width: '100%',
              height: id === 1 || id === 4 ? 600 : 200,
              objectFit: 'cover',
              borderRadius: 1,
              mb: 2,
            }}
          />

          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: 'bold', color: 'black' }}
          >
            {title}
          </Typography>

          <Typography variant="body2" sx={{ flexGrow: 1 }}>
            {description}
          </Typography>
        </Box>
      ))}
    </Box>
  </Box>
);

export default Projects;
