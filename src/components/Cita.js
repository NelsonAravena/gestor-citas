import {Card,Button} from 'reactstrap';

const Cita = ({ cita, eliminarCita }) => (
    <Card className="cita">
      <p>
        Paciente: <span>{cita.paciente}</span>
      </p>
      <p>
        Acompañante: <span>{cita.acompañante}</span>
      </p>
      <p>
        Franja de edad: <span>{cita.edad} años</span>
      </p>
      <p>
        Area medica Elegida: <span>{cita.vacuna}</span>
      </p>
      <p>
        Fecha: <span>{cita.fecha}</span>
      </p>
      <p>
        Hora: <span>{cita.hora}</span>
      </p>

      <Button
        onClick={() => eliminarCita(cita.id)}
        color = 'danger'
      >
        Eliminar &times;
      </Button>

      <Button
        onClick={() => eliminarCita(cita.id)}
        color = 'success'
      >
        Modificar &times;
      </Button>
  </Card>
);

export default Cita;
