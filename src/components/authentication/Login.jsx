import { Avatar, Box, Button, Container, FormHelperText, Grid, TextField, Typography } from '@mui/material';
import LockOpen from '@mui/icons-material/LockOpen';
import { Link, useNavigate } from 'react-router-dom';
import '../../App.css';
import axios from 'axios';
import { useState } from 'react';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [result, setResult] = useState('');
    const navigate = useNavigate()
    const handleLogin = async (e) => {
        e.preventDefault();
        if (password === "" && email === "") {
          alert("Enter email and password");
        } else if (email === "") {
          alert("Enter email");
        } else if (password === "") {
          alert("Enter password");
        }
        try {
          const response = await axios.post("http://localhost:8080/login", {
            email,
            password,
          });
          if (response.status === 200) {
            axios
              .get(`http://localhost:8080/getAdStatus?email=${email}`)
              .then((adminResponse) => {
                const isAdmin = adminResponse.data[0]?.isadmin;
                if (isAdmin === 1) {
                  navigate('/booksData');
                } else {
                  navigate('/userData');
                }
              })
              .catch((error) => {
                console.error("Error fetching admin status:", error);
                alert("Error occurred while fetching admin status");
              });
          } else {
            setErrorMessage(response.data.error);
            alert("Invalid user");
          }
        } catch (err) {
          alert("Invalid email or password");
          console.log(err);
        }
      };
      
    // const handleLogin = async (e) => {
    //     e.preventDefault();
    //     if(password==""&&email==""){
    //         alert("Enter email and password");
    //     }else if(email==""){
    //         alert("enter email")
    //     }else if(password==""){
    //         alert("enter password")
    //     }
    //     try {
    //         const response = await axios.post("http://localhost:8080/login", {
    //             email,
    //             password, 
    //         });
    //         console.log(response.status)
    //         if (response.status === 200) {
    //         axios.get(`http://localhost:8080/getAdStatus?email=${email}`).then((response) => {
    //           setResult(JSON.stringify(response.data));
    //           console.log(result)
    //           console.log(result.data[0])
    //         })
    //         .catch((error) => {
    //           setResult('Error: ' + error);
    //         });

       
    //         console.log("above is result")             
    //                 if(result.data[0]==1){
    //                     navigate('/booksData');
    //                 }
    //                 else{
    //                     navigate('/userData');
    //                 }
    //             // navigate('/booksData');
    //         } else {
    //             console.log('qqqqqqqqqqqqqqq')
    //             setErrorMessage(response.data.message);
    //             alert("invalid user");
    //         }
    //     } catch (err) {
    //         alert("invalid Email or password");
    //         console.log(err);
    //     }
    // };
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
                        Log in
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
export default Login;

