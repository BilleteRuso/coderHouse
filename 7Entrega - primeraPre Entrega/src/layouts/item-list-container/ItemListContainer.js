import React, { useEffect, useState } from "react";

import Product from "../../components/product/Product";
import "./itemListContainer.css";

const ItemListContainer = ({ children, greeting, name }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setCharacters(json));
  }, []);

  return (
    <div>
      <div className="productList">
        <h1>No es solo una compra, es tu compra</h1>
        <div className="productList-product">
          {characters.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
