import React from "react";
import "./ItemListContainer.css";

export default function ItemListContainer({ greeting }) {
  return (
                  <div className="item-container">
      <div className="item-slogan">



        <h1 className="item-title">{greeting}</h1>
      </div>
    </div>
  );
}
