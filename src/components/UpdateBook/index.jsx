import React, { useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import axios from "axios";

import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

//Declared initial state

const initialState = {
  bid: "",

  title: "",

  image: "",

  description: "",

  price: "",

  author: "",

  offers: "",
};

function UpdateBook() {
  const [book, setBook] = useState([initialState]);

  const navigate = useNavigate();

  const location = useLocation();

  const bookId = location.pathname.split("/")[2];

  console.log("book id: ", bookId);

  //HandleChange to update the book data on change in the input field

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(book);

  //HandleClick to update the book database

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      console.log("utyfg ", book);

      //Update query using id

      await axios.patch("http://localhost:8080/books/" + bookId, book);

      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="back">
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            display: "flex",

            flexDirection: "column",

            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5" style={{ color: "white" }}>
            Update Book Here!!
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
              Update
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

      <br />
      <br />

      <br />
    </div>
  );
}

export default UpdateBook;
