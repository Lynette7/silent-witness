import React from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import { styled } from '@mui/system';

const StyledContainer = styled(Container)({
  marginTop: '100px',
  backgroundColor: '#f4f6f8',
  padding: '40px',
  borderRadius: '10px',
  paddingBottom: '100px'
});

const StyledButton = styled(Button)({
  marginTop: '40px',
});

const StyledTextField = styled(TextField)({
  marginTop: '20px',
});

export default function Signup() {
  return (
    <StyledContainer maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        Sign Up
      </Typography>
      
      <StyledTextField 
        variant="outlined" 
        margin="normal" 
        required 
        fullWidth 
        id="username" 
        label="Username" 
        name="username" 
        autoComplete="username" 
        autoFocus 
      />

      <StyledTextField 
        variant="outlined" 
        margin="normal" 
        required 
        fullWidth 
        name="password" 
        label="Password" 
        type="password" 
        id="password" 
        autoComplete="current-password" 
      />

      <StyledTextField 
        variant="outlined" 
        margin="normal" 
        required 
        fullWidth 
        name="email" 
        label="Email" 
        type="email" 
        id="email" 
        autoComplete="email" 
      />

      <StyledButton
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
      >
        Sign Up
      </StyledButton>
    </StyledContainer>
  );
}
