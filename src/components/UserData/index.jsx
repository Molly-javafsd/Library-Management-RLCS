import React, { useEffect, useState } from "react";

import axios from "axios";

import { Link } from "react-router-dom";

import { Card, Button } from "@mui/material";

import CardHeader from "@mui/material/CardHeader";

import CardMedia from "@mui/material/CardMedia";

import CardContent from "@mui/material/CardContent";

import IconButton from "@mui/material/IconButton";

import Typography from "@mui/material/Typography";

import ShoppingCartIcon from  '@mui/icons-material/ShoppingCart';

function UserData() {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8080/books");

        setBookData(res.data);

        //console.log("Data : ", res.data, "Books bookData : ", bookData);
      } catch (err) {
        console.log("Error in Books : ", err);
      }
    };

    fetchAllBooks();
  }, [bookData]);

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexWrap: "wrap",
        margin: "10px 5%",
      }}
    >
      {bookData.map((item) => (
        <Card
          sx={{ maxWidth: 345 }}
          style={{ margin: "20px", padding: "5px" }}
          key={item.id}
        >
          <CardHeader
            avatar={
              <Typography sx={{ sb: 2.5 }} color="text.secondary">
                {item.offers}
              </Typography>
            }
            action={<IconButton aria-label="settings"></IconButton>}
            title={item.title}
            subheader={item.author}
          />

          <CardMedia
            component="img"
            height="auto"
            image={item.image}
            alt={item.title}
          />

          <CardContent>
            <Typography variant="body2" color="text.primary">
              {item.description}
            </Typography>
          </CardContent>

          <CardContent>
            <Typography variant="body2" color="text.primary">
              ₹{item.price}
            </Typography>
          </CardContent>



          <CardContent>
            <Button variant="contained">
              <ShoppingCartIcon/> Add to Cart
            </Button>
          </CardContent>
         
        </Card>
      ))}

    </div>
  );
}

export default UserData;