import { Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../Images/login.jpg';
const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError } = useAuth();
  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
    return (
     <Container>
      <Grid container spacing={2}>
        <Grid sx={{ mt: 8 }} item xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            login
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
            <Button
              sx={{ width: '75%', m: 1 }}
              type="submit"
              variant="contained"
            >
              {' '}
              Login
            </Button>
            <NavLink style={{ textDecoration: 'none' }} to="/register">
              <Button sx={{ width: 'auto', m: 1 }} type="submit" variant="text">
                NEW USER? PLEASE REGISTER
              </Button>
            </NavLink>
            </form>
            {isLoading && <CircularProgress />}
                       {/* {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>} */}
        </Grid>
        <Grid item xs={4} md={6}>
          <img style={{ width: '100%' }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
    );
};

export default Login;