import React, { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import {
  Box,
  Container,
  Grid,
  TextField,
  Typography,
  Button,
} from "@mui/material";

const initialState = {
  bid: "",

  title: "",

  image: "",

  description: "",

  price: "",

  author: "",

  offers: "",
};

function AddBooks() {
  const [bookData, setBookData] = useState([initialState]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBookData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(bookData);

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/books", bookData);

      navigate("/booksData");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Container component="main" maxWidth="xs" >
        <Box display={""} flex-direction="row" justify="center">
          <Typography
            component="h1"
            textAlign={"center"}
            variant="h5"
            style={{ color: "white" }}
          >
            Add a Book
          </Typography>

          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
    
              <Grid item xs={12}>
                <TextField
                  type="text"
                  fullWidth
                  placeholder="Book title"
                  onChange={handleChange}
                  name="title"
                ></TextField>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  type="text"
                  fullWidth
                  placeholder="Book image"
                  onChange={handleChange}
                  name="image"
                ></TextField>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  type="text"
                  fullWidth
                  placeholder="Book description"
                  onChange={handleChange}
                  name="description"
                ></TextField>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  type="text"
                  fullWidth
                  placeholder="Book price"
                  onChange={handleChange}
                  name="price"
                ></TextField>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  type="text"
                  fullWidth
                  placeholder="Book author"
                  onChange={handleChange}
                  name="author"
                ></TextField>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  type="text"
                  fullWidth
                  placeholder="Book offers"
                  onChange={handleChange}
                  name="offers"
                ></TextField>
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="secondary"
              onClick={handleClick}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Container>

      <br />
      <br />

      <br />
      <br />

      <br />
      <br />
    </div>
  );
}

export default AddBooks;
