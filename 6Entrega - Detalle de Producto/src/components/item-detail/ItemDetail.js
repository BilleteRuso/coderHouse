import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import ItemCount from "../itemCount/ItemCount";
import "./itemDetail.css";

const ItemDetail = ({ description, title, price, rating, image }) => {
  return (
    <Card className="card-detail">
      <CardMedia
        component="img"
        height="600"
        image={image}
        alt="T-shirt"
        sx={{ maxWidth: 450 }}
      />
      <CardContent sx={{ maxWidth: 450 }}>
        <strong>{title}</strong>
        <Typography variant="body2" color="text.secondary">
          <h3>{description}</h3>
          <strong>Precio: ${price}</strong>
        </Typography>
        <ItemCount className="card-count" num={rating.count} />
      </CardContent>
      <CardActions className="card-action-detail"></CardActions>
    </Card>
  );
};

export default ItemDetail;
