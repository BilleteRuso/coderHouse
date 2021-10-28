import React, { useState } from "react";
import "./ItemCount.css";

function ItemCount({ num }) {
  const [count, setCount] = useState(0);
  const [stock, setStock] = useState(num);

  const onRemove = () => {
    if (stock > 0) {
      setCount((prevCount) => prevCount + 1);
      setStock((prevStock) => prevStock - 1);
    }
  };

  const onAdd = () => {
    if (count !== 0) {
      setCount((prevCount) => prevCount - 1);
      setStock((prevStock) => prevStock + 1);
    }
  };
  return (
    <div className="itemcount">
      <h3 className="itemcount-container">
        Quedan {stock} articulos de este producto
      </h3>
      <div className="itemcount-container">
        <button className="itemcount-button" onClick={onAdd}>
          -
        </button>
        <button className="itemcount-button" onClick={onRemove}>
          +
        </button>
      </div>
      <h5 className="itemcount-container">Compraste {count} articulos</h5>
    </div>
  );
}

export default ItemCount;
