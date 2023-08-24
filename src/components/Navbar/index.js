import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { Link, useHistory } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

export default function Navbar() {
  const history = useHistory(); 
  const handleLogout = () => {

    console.log("Logging out");

    
    history.push("/login");
  };

  return (
    <AppBar position="static">
      <StyledToolbar>
        <StyledIconButton edge="start" color="inherit" aria-label="menu">
          {/* Replace "Logo" with your actual logo */}
          <Typography variant="h6">SILENT WITNESS</Typography>
        </StyledIconButton>
        <Typography variant="h6">
          {new Date().toLocaleDateString()}
        </Typography>
        <div>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/report">Report</Button>
          <Button color="inherit" component={Link} to="/help">Help</Button>
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        </div>
      </StyledToolbar>
    </AppBar>
  );
}
