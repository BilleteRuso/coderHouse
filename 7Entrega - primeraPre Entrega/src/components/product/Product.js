import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import ItemCount from "../itemCount/ItemCount";
import "./Product.css";

const Product = ({ id, title, price, rating, image }) => {
  const handleShowProductClick = () => {
    console.log(`Product ${id} clicked`);
  };
  return (
    <Card className="card" sx={{ maxWidth: 345 }}>
      <strong>Precio: ${price}</strong>
      <CardMedia component="img" height="300" image={image} alt="T-shirt" />
      <CardContent>
        <strong>{title}</strong>
        <Typography variant="body2" color="text.secondary">
          <ItemCount num={rating.count} />
        </Typography>
      </CardContent>
      <CardActions className="card-action">
        <button className="card-button" onClick={handleShowProductClick}>
          Ver detalle del producto
        </button>
      </CardActions>
    </Card>
  );
};

export default Product;
