import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");

  function firstNameChange(e) {
    setFirstName(e.target.value);
  }

  function lastNameChange(e) {
    setLastName(e.target.value);
  }

  function dniChange(e) {
    setDni(e.target.value);
  }

  function emailChange(e) {
    setEmail(e.target.value);
  }

  function handleSubmit() {
    if (firstName && lastName && dni && email) {
      alert("Datos enviados");
      setFirstName("");
      setLastName("");
      setDni("");
      setEmail("");
    } else {
      alert("Completar todos los datos");
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="firstName">Nombre:</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              value={firstName}
              onChange={firstNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Apellido:</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              value={lastName}
              onChange={lastNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="dni">DNI:</label>
            <input
              type="text"
              className="form-control"
              id="dni"
              value={dni}
              onChange={dniChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={emailChange}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary mt-2"
            onClick={handleSubmit}
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
