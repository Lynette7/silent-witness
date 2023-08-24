import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Container, FormControl, InputLabel, IconButton, Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/system';
import { Autocomplete } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Videocam from '@mui/icons-material/Videocam';
import Audiotrack from '@mui/icons-material/Audiotrack';
import Description from '@mui/icons-material/Description';

const locations = ["New York", "Africa", "Nairobi", "Kisumu", "Nakuru", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville", "Other"]; 
const incidents = ["Fire", "Flood", "Theft", "Accident", "Harassment", "Vandalism", "Corruption", "Other"];

const StyledBox = styled(Box)({
    marginTop: '50px',
    paddingTop: '100px',
});

export default function Report() {
  const [location, setLocation] = useState('');
  const [incident, setIncident] = useState('');
  const [details, setDetails] = useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleReport = () => {
    console.log(`Location: ${location}, Incident: ${incident}, Details: ${details}`);
    // Add the report submission functionality here
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container maxWidth="md">
      <StyledBox>
        <Typography variant="h4" gutterBottom>Report Incident</Typography>

        <Box mt={2}>
          <FormControl fullWidth>
            <Autocomplete
              freeSolo
              options={locations}
              onChange={(event, newValue) => {
                setLocation(newValue);
              }}
              renderInput={(params) => <TextField {...params} label="Incident Location" />}
            />
          </FormControl>
        </Box>

        <Box mt={2}>
          <FormControl fullWidth>
            <Autocomplete
              freeSolo
              options={incidents}
              onChange={(event, newValue) => {
                setIncident(newValue);
              }}
              renderInput={(params) => <TextField {...params} label="Incident Type" />}
            />
          </FormControl>
        </Box>

        <Box mt={2}>
          <TextField 
            fullWidth 
            multiline 
            rows={6}
            margin="normal" 
            variant="outlined" 
            label="More details" 
            value={details} 
            onChange={(event) => setDetails(event.target.value)}
          />
        </Box>

        <Box mt={2}>
          <Button variant="contained" color="primary" onClick={handleClick}>Attach Evidence</Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>
              <input accept="image/*" id="icon-button-file" type="file" style={{ display: 'none' }} />
              <label htmlFor="icon-button-file">
                <IconButton color="primary" component="span" size="small">
                  <PhotoCamera />
                </IconButton>
              </label>
              Attach Picture
            </MenuItem>
            <MenuItem>
              <input accept="video/*" id="icon-button-video" type="file" style={{ display: 'none' }} />
              <label htmlFor="icon-button-video">
                <IconButton color="primary" component="span" size="small">
                  <Videocam />
                </IconButton>
              </label>
              Attach Video
            </MenuItem>
            <MenuItem>
              <input accept="audio/*" id="icon-button-audio" type="file" style={{ display: 'none' }} />
              <label htmlFor="icon-button-audio">
                <IconButton color="primary" component="span" size="small">
                  <Audiotrack />
                </IconButton>
              </label>
              Attach Audio
            </MenuItem>
            <MenuItem>
              <input accept=".doc,.docx,.pdf" id="icon-button-doc" type="file" style={{ display: 'none' }} />
              <label htmlFor="icon-button-doc">
                <IconButton color="primary" component="span" size="small">
                  <Description />
                </IconButton>
              </label>
              Attach Document
            </MenuItem>
          </Menu>
        </Box>

        <Box mt={2}>
          <Button variant="contained" color="primary" onClick={handleReport}>Report Incident</Button>
        </Box>
      </StyledBox>
    </Container>
  );
}
