import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/item-detail/ItemDetail";

const ItemDetailContainer = () => {
  const { itemId } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    if (itemId) {
      fetch(`https://fakestoreapi.com/products/${itemId}`)
        .then((res) => res.json())
        .then((json) => setItem(json));
      console.log(item);
    }
  }, [itemId]);

  if (!item) {
    return null;
  }

  return (
    <div>
      <ItemDetail name={item.name} {...item} />
    </div>
  );
};

export default ItemDetailContainer;
