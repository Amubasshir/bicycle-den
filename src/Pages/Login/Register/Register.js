import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../Images/login.jpg';

const Register = () => {
  const [loginData, setLoginData] = useState({});

    
    const { user,registerUser , isLoading,authError} = useAuth();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert('Your password is incorrect');
      return;
      }
      registerUser(loginData.email, loginData.password)
    e.preventDefault();
  };
  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          <Grid sx={{ mt: 8 }} item xs={12} md={6}>
            <Typography variant="body1" gutterBottom>
              Register
            </Typography>
            {!isLoading && <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: '75%', m: 1 }}
                id="standard-basic"
                label="Your Email"
                name="email"
                type="email"
                onChange={handleOnChange}
                variant="standard"
              />
              <TextField
                sx={{ width: '75%', m: 1 }}
                id="standard-basic"
                label="Your Password"
                type="password"
                name="password"
                onChange={handleOnChange}
                variant="standard"
              />
              <TextField
                sx={{ width: '75%', m: 1 }}
                id="standard-basic"
                label="Retype Your Password"
                type="password"
                name="password2"
                onChange={handleOnChange}
                variant="standard"
              />
              <Button
                sx={{ width: '75%', m: 1 }}
                type="submit"
                variant="contained"
              >
                {' '}
                Register
              </Button>
              <NavLink style={{ textDecoration: 'none' }} to="/login">
                <Button
                  sx={{ width: 'auto', m: 1 }}
                  type="submit"
                  variant="text"
                >
                  NEW REGISTER? PLEASE LOGIN
                </Button>
              </NavLink>
                      </form>}
                      {isLoading && <CircularProgress />}
                       {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
          </Grid>
          <Grid item xs={4} md={6}>
            <img style={{ width: '100%' }} src={login} alt="" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Register;