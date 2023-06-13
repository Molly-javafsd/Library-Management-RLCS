import React, { useState } from 'react';
import { Avatar, Box, Button, Container, FormHelperText, Grid, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from 'axios';
import '../../App.css'
import { Link, useNavigate } from 'react-router-dom';



const Signup = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    mobile: '',
    email: '',
    password: '',
    errore: false,
    errorp: false,
    errorm: false,
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      errore: name === 'email' ? !isValidEmail(value) : prevData.errore,
      errorm: name === 'mobile' ? !isValidMobile(value) : prevData.errorm,
      errorp: name === 'password' ? !isValidPassword(value) : prevData.errorp,
    }));
  };

  const isValidEmail = (value) => {
    const regexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexPattern.test(value);
  };

  const isValidMobile = (value) => {
    const regexPattern = /^(?!0)\d{1,10}$/;
    return regexPattern.test(value);
  };

  const isValidPassword = (value) => {
    const regexPattern = /^(?=.*[!@#$%^&*()\-=_+[\]{};':"\\|,.<>/?])(?=.*[A-Z]).{1,8}$/;
    return regexPattern.test(value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if(fname==""||lname==""||mobile==""||email==""||password==""){

      alert("enter all the fields");}
      
    else{
      try {
        await axios.post('http://localhost:8080/signup', formData);
        navigate('/');
        alert('Account Created Successfully....');
      } catch (err) {
        console.log(err);
      }
    }

  };

  const { fname, lname, mobile, email, password, errore, errorp, errorm } = formData;

  return (
    <div className="back">
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style={{ color: 'white' }}>
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="fname"
                  required
                  fullWidth
                  id="fname"
                  label="First Name"
                  autoFocus
                  color="secondary"
                  value={fname}
                  onChange={handleChange}
                  
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lname"
                  label="Last Name"
                  name="lname"
                  autoComplete="family-name"
                  color="secondary"
                  value={lname}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="mobile"
                  label="Mobile Number"
                  id="mobile"
                  autoComplete="number"
                  color="secondary"
                  value={mobile}
                  onChange={handleChange}
                />
                {errorm && <FormHelperText>Invalid mobile number!</FormHelperText>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={handleChange}
                  color="secondary"
                />
                {errore && (
                  <FormHelperText>Invalid email address. Please enter a valid email.</FormHelperText>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  color="secondary"
                  value={password}
                  onChange={handleChange}
                />
                {errorp && <FormHelperText>Password does not match the criteria.</FormHelperText>}
              </Grid>
            </Grid>
            <Button
              type="submit"
              onClick={handleClick}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="secondary"
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login">
                  <Typography variant="body2" color="secondary" sx={{ borderRadius: 3 }} >
                    Already have an account? Log in
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Signup;
