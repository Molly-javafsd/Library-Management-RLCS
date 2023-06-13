import { Avatar, Box, Button, Container, FormHelperText, Grid, TextField, Typography } from '@mui/material';
import LockOpen from '@mui/icons-material/LockOpen';
import { Link, useNavigate } from 'react-router-dom';
import '../../App.css';
import axios from 'axios';
import { useState } from 'react';
const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate()
    const handleLogin = async (e) => {
        e.preventDefault();
        if(password==""&&email==""){
            alert("Enter email and password");
        }else if(email==""){
            alert("enter email")
        }else if(password==""){
            alert("enter password")
        }
        try {
            const response = await axios.post("http://localhost:8080/login", {
                email,
                password,
            });
            console.log(response.status)
            if (response.status === 200) {
                console.log("Login successful");
                localStorage.setItem("email", email);
                navigate('/booksData');
            } else {
                setErrorMessage(response.data.message);
                alert("invalid user");
            }
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className='back'>
            <Container component="main" maxWidth="xs">
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOpen />
                    </Avatar>
                    <Typography component="h1" variant="h5" style={{ color: 'white' }}>
                        Welcome to Admin Log in
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    color='secondary'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="pass"
                                    label="Password"
                                    type="password"
                                    id="pass"
                                    autoComplete="new-password"
                                    color='secondary'
                                    value={password}
                                    onChange={(e) => setPass(e.target.value)}
                                />
                                {errorMessage && (
                                    <Typography variant="body1" color="error">
                                        {errorMessage}
                                    </Typography>
                                )}
                            </Grid>
                        </Grid>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            color='secondary'
                            onClick={handleLogin}
                        >
                            Log in
                        </Button>
                        <Grid container>
                            <Grid item xs={7}>
                                 <Link to="/forgot">
                                    <Typography variant='body2' color='secondary'>
                                        Forgot password?
                                    </Typography>
                                 </Link>
                            </Grid>
                            <Grid item xs={5}>
                                <Link to="/signup">
                                    <Typography variant="body2" color='secondary'>
                                        Doesn't have an account!SignUp
                                    </Typography>
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </div>
    )
};
export default AdminLogin;