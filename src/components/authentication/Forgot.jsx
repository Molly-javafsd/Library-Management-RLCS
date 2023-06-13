import {
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const Forgot = () => {
  const [formData, setFormData] = useState({
    email:"",
    password: "",
    confirmPassword: "",
    errorp: false,
  });
  const navigate = useNavigate()
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      errorp: name === "password" ? !isValidPassword(value) : prevData.errorp,
    }));

    const isValidPassword = (value) => {
      const regexPattern =
        /^(?=.*[!@#$%^&*()\-=_+[\]{};':"\\|,.<>/?])(?=.*[A-Z]).{1,8}$/;

      return regexPattern.test(value);
    };
  };

//   const [setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const Passwordverification = async (e) => {
    e.preventDefault();
    console.log('Something Appeared')
    if (password !== confirmPassword) {
      alert(" both password should match");
    } else if (password === "") {
      alert("password fields required");
    } else {
		try {
            const response = await axios.patch("http://localhost:8080/resetpassword", {
                email,
                password,
            });
            if (response.status === 200) {
                alert("Successfully changed");
                navigate('/');
            } else {
                alert("User not Found!!");
            }
        } catch (err) {
            console.log(err);
        }
    }
  };

  const { errorp, password,email } = formData;

  return (
    <div className="back">
      <Container component="main" maxWidth="xs">
        <Box maxWidth={400} justifyContent={"center"} textAlign={"center"}>
          <Avatar
            sx={{ m: 1, bgcolor: "secondary.main", display: "inline-grid" }}
          >
            <VpnKeyIcon />
          </Avatar>

          <FormControl>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  mt={2}
                  varient="h5"
                  component="h1"
                  style={{ color: "white" }}
                >
                  <h3>Change Password</h3>
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  placeholder="Email"
                  label="Email"
                  color="secondary"
                  type="email"
                  value={email}
                  name="email"
                  onChange={handleChange}
                ></TextField>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  placeholder="New password"
                  value={password}
                  name="password"
                  onChange={handleChange}
                  label="New password"
                  color="secondary"
                  type="password"
                ></TextField>

                {errorp && (
                  <FormHelperText>
                    Password requirements include one special character, one
                    capital character, and no more than eight characters.
                  </FormHelperText>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  placeholder="confirm password"
                  value={confirmPassword}
                  name="newpassword"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  label="Confirm password"
                  color="secondary"
                  type="password"
                ></TextField>
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={Passwordverification}
                >
                  Update
                </Button>
              </Grid>
            </Grid>
          </FormControl>
        </Box>
      </Container>
    </div>
  );
};

export default Forgot;
