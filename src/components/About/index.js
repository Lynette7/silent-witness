import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import pic2 from '../../assets/pic2.jpg';

const StyledBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '100vw',
  padding: '20px',
  backgroundImage: `url(${pic2})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  boxSizing: 'border-box', 
});

const OverlayBox = styled(Box)({
    marginTop: '100px',
    backgroundColor: '#f4f6f8',
    padding: '40px',
    borderRadius: '10px',
    backgroundImage: 'linear-gradient(to right, #ff9966 0%, #ff5e62 100%)', // a linear gradient background
    color: 'white', // to make the text more visible on the dark background
    width: '50vw',
});

const About = () => (
  <StyledBox>
    <OverlayBox>
      <Typography variant="h3" align="center" gutterBottom>
        About Silent Witness
      </Typography>

      <Typography variant="body1" align="justify">
        Silent Witness is a digital platform designed to facilitate the secure and anonymous reporting of incidents. Our goal is to create an environment where individuals feel safe to report any incidents without fear of retribution or harm. This platform helps to enhance transparency, accountability, and ultimately, trust within communities.
      </Typography>

      <Typography variant="h4" align="center" gutterBottom style={{ marginTop: '20px' }}>
        How to Use the App
      </Typography>

      <Typography variant="body1" align="justify">
        To start using the Silent Witness app, you need to first create an account or log in. Once you are logged in, you can report incidents by clicking the 'Report' button on the navigation bar. Fill in the required fields, providing as much detail as possible, and then submit your report. Your report will be securely sent and processed promptly.
      </Typography>
    </OverlayBox>
  </StyledBox>
);

export default About;
