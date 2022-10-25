import { useState, useEffect } from "react";
import Cita from "./components/Cita";
import Formulario from "./components/Formulario";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container, Modal, Modalbody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap'

function App() {
  // Guardar citas en localstorage para que no se borren
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  // Array de citas escritas
  const [citas, guardarCitas] = useState(citasIniciales);

  // Use Effect para cambio del state (para que no borre las citas guardadas al hacer reload)
  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem("citas"));
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas]);

  // Función que tome las citas actuales y agregue la nueva
  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };

  // Función que elimina una cita por su id
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    guardarCitas(nuevasCitas);
  };

  // Mensaje condicional si aún no hay citas
  const titulo = citas.length === 0 ? "No hay citas" : "Listado de citas";

  return (
    <>
    <header>
      <h1>Administrador de citas Medicas</h1>;
      <h2>Crear cita medica</h2>
    </header>

    <body>
      {" "}
      <div className="container">
        <div className="row">
          <div className="form">
            <Formulario crearCita={crearCita} />
          </div>
          <h2>{titulo}</h2>
          <div className="cita-pedida">
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </body>
    </>
  );
}

export default App;
