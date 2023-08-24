import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Container, FormControl, InputLabel, Rating } from '@mui/material';
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';

const StyledBox = styled(Box)({
  marginTop: '50px',
  paddingTop: '100px',
});

export default function Help() {
  const [issue, setIssue] = useState('');
  const [rating, setRating] = useState(0);

  const handleSend = () => {
    console.log(`Issue: ${issue}, Rating: ${rating}`);
    // Add issue sending functionality here
  };

  return (
    <Container maxWidth="md">
      <StyledBox>
        <Typography variant="h4" gutterBottom>Help</Typography>

        <Box mt={2} display="flex">
          <TextField
            fullWidth
            label="Search"
            variant="outlined"
            InputProps={{ endAdornment: <SearchIcon color="primary" /> }}
          />
        </Box>

        <Box mt={2}>
          <FormControl fullWidth>
            <TextField 
              fullWidth 
              multiline 
              rows={4}
              margin="normal" 
              variant="outlined" 
              label="What is the issue?"
              value={issue}
              onChange={(event) => setIssue(event.target.value)}
            />
          </FormControl>
        </Box>

        <Box mt={2}>
          <Button variant="contained" color="primary" onClick={handleSend}>Send</Button>
        </Box>

        <Box mt={2}>
          <Typography variant="subtitle1">Rate our service:</Typography>
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
        </Box>
      </StyledBox>
    </Container>
  );
}
