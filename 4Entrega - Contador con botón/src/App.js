import "./App.css";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import NavBar from "./components/navbar/NavBar";
import ItemCount from "./components/itemCount/ItemCount";

function App() {
  const greeting = "No es solo una compra, es COIN";

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={greeting} />
      <ItemCount />
    </div>
  );
}

export default App;
