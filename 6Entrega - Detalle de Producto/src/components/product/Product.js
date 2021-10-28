import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import ItemCount from "../itemCount/ItemCount";
import "./Product.css";

const IMG =
  "https://portsaid.vteximg.com.br/arquivos/ids/246178-768-960/AP327401_MW_3.jpg?v=637644827038700000";

const Product = ({ id, name, description, stock }) => {
  const handleShowProductClick = () => {
    console.log(`Product ${id} clicked`);
  };

  return (
    <Card className="card" sx={{ maxWidth: 345 }}>
      <strong>{name}</strong>
      <CardMedia component="img" height="194" image={IMG} alt="T-shirt" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <strong>{description}</strong>
        </Typography>
        <ItemCount num={stock} />
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
