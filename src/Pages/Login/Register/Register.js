import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../Images/login.jpg';

const Register = () => {
  const [loginData, setLoginData] = useState({});

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
            <form onSubmit={handleLoginSubmit}>
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
            </form>
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