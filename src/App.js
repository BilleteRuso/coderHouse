import "./App.css";
import User from "./components/Users";

function App() {
  const users = [
    {
      firstName: "Nicolas",
      lastName: "Demaria",
      age: "28",
      user: "BilleteRuso",
    },
    {
      firstName: "Sofia",
      lastName: "Lescano",
      age: "32",
      user: "Salamanca",
    },
    {
      firstName: "Raul",
      lastName: "Salinas",
      age: "45",
      user: "AbogadoAmigo",
    },
  ];

  return (
    <div className="App">
      <h1>Suburbano</h1>
      <hr />
      {users.map(({ name, lastName, age, user }) => (
        <User fisrtName={name} lastName={lastName} age={age} user={user} />
      ))}
    </div>
  );
}

export default App;
