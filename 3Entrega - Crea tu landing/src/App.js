import "./App.css";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import NavBar from "./components/navbar/NavBar";


function App() {

  const greeting = "No es solo una compra, es tu compra"

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={greeting}  />
    </div>
  );
}

export default App;
