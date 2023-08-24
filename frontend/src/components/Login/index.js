import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { TextField, Button, Checkbox, FormControlLabel, Typography, Container, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { useHistory } from 'react-router-dom';

const StyledContainer = styled(Container)({
  marginTop: '100px',
  backgroundColor: '#f4f6f8',
  padding: '40px',
  borderRadius: '10px',
  paddingBottom: '100px',
});

const StyledButton = styled(Button)({
  marginTop: '40px',
});

const StyledGrid = styled(Grid)({
  marginTop: '40px',
});

const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [account, setAccount] = useState('');

  useEffect(() => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();
    }
  }, []);

  const handleSignIn = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
    // Add authentication logic 

    history.push('/about');
  };

  const handleSignInMetaMask = async () => {
    const accounts = await window.web3.eth.getAccounts();
    setAccount(accounts[0]);

    history.push('/about');
  };

  return (
    <StyledContainer maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>

      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="username"
        label="Username"
        name="username"
        autoComplete="username"
        autoFocus
        onChange={(event) => setUsername(event.target.value)}
      />

      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        onChange={(event) => setPassword(event.target.value)}
      />

      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />

      <StyledButton
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleSignIn}
      >
        Sign In
      </StyledButton>

      <StyledGrid container>
        <Grid item xs>
          <Typography variant="body2">
            Forgot password?
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2">
            {"Don't have an account? Sign Up"}
          </Typography>
        </Grid>
      </StyledGrid>

      <StyledButton variant="contained" color="primary" fullWidth onClick={handleSignInMetaMask}>
        Sign in with MetaMask
      </StyledButton>

    </StyledContainer>
  );
};

export default Login;
