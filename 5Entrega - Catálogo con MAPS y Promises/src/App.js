import "./App.css";
import ItemListContainer from "./layouts/item-list-container/ItemListContainer";
import NavBar from "./components/navbar/NavBar";
import { products } from "./data/products";
import ProductList from "./components/product-list/ProductList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer>
        <ProductList products={products} />
      </ItemListContainer>
    </div>
  );
}

export default App;
