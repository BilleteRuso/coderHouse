import { useEffect, useState } from "react";
import { promises } from "../../helpers/promises";
import Product from "../product/Product";
import "./ProductList.css";

const Promises = ({ products }) => {
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  const [currentProducts, setCurrentProducts] = useState([]);

  useEffect(() => {
    if (products) {
      promises(
        products,
        setMessage,
        setIsSuccess,
        setIsLoading,
        setIsFinished,
        setCurrentProducts
      );
    }
  }, [products]);

  return (
    <div className="productList">
      <h1>No es solo una compra, es tu compra</h1>
      <div className="productList-product">
        {isLoading && <h3>Loading...</h3>}
        {currentProducts.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Promises;
