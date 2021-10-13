import "./User.css"

const User = ({ name, lastName, age, user }) => {
  return (
    <>
      <div className="content">
        <h3>Nombre: {name}</h3>
        <h3>Apellido: {lastName}</h3>
        <h3>Edad: {age}</h3>
        <h3>Usuario: {user}</h3>
        <hr />
      </div>
    </>
  );
};

export default User;
