import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, FormGroup, Input, Label} from 'reactstrap'

const Formulario = ({ crearCita }) => {
  // Crear State de Citas
  const [cita, actualizarCita] = useState({
    paciente: "",
    acompañante: "",
    edad: "",
    vacuna: "",
    fecha: "",
    hora: "",
  });

  //
  const [error, actualizarError] = useState(false);

  // Función que se ejecuta cada vez que el usuario escribe un input
  const actualizarState = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  // Extraer los valores
  const { paciente, acompañante, edad, vacuna, fecha, hora } = cita;

  // Al enviar formulario
  const submitCita = (e) => {
    e.preventDefault();

    // Validar
    if (
      paciente.trim() === "" ||
      acompañante.trim() === "" ||
      edad.trim() === "" ||
      vacuna.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === ""
    ) {
      actualizarError(true);
      return;
    }

    // Eliminar el mensaje previo
    actualizarError(false);

    // Asignar un ID
    cita.id = uuidv4();

    // Crear la cita
    crearCita(cita);

    // Reiniciar el form
    actualizarCita({
      paciente: "",
      acompañante: "",
      edad: "",
      vacuna: "",
      fecha: "",
      hora: "",
    });
  };

  return (
    <>
    
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}

      {"   "};
      <form class = "label" onSubmit={submitCita}>
        <Label sm={4}>Nombre del paciente</Label>
        <Input
          type="text"
          name="paciente"
          placeholder="Nombre paciente"
          onChange={actualizarState}
          value={paciente}
        />

        {/*   */}
        <Label>Nombre del acompañante</Label>
        <Input
          type="text"
          name="acompañante"
          className="u-full-width"
          placeholder="Nombre acompañante"
          onChange={actualizarState}
          value={acompañante}
        />

        {/* */}
        <Label htmlFor="edad">Edad del paciente</Label>
        <select
          name="edad"
          className="u-full-width"
          onChange={actualizarState}
          value={edad}
        >
          <option value="+79">+79</option>
          <option value="70-79">70-79</option>
          <option value="60-69">60-69</option>
          <option value="50-59">50-59</option>
          <option value="40-49">40-49</option>
          <option value="30-39">30-39</option>
          <option value="18-29">18-29</option>
          <option value="-18">-18</option>
        </select>

        {/*   */}

        {/* */}
        <Label htmlFor="vacuna">Area Medica</Label>
        <select
          name="vacuna"
          className="u-full-width"
          onChange={actualizarState}
          value={vacuna}
        >
          <option value="Medicina General"  >Medicina General</option>
          <option value="Reumatologo">Reumatologo</option>
          <option value="Ginecologo">Ginecologo</option>
          <option value="Otorrinolaringólogo">Otorrinolaringólogo</option>
        </select>

        {/*   */}
        <Label>Fecha Cita</Label>
        <Input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />

        {/*   */}
        <Label>Hora Cita</Label>
        <Input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />

        {/*   */}
        <Button color = "success" onChange={actualizarState}>Agregar Cita</Button>
      </form>
    </>
  );
};

// Ejemplo de como usar los propTypes para documentar los tipos de props
Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired,
};

export default Formulario;
