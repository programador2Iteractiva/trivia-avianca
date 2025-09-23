import { useState } from "react";
import Btn from "../components/btn";

function FormView() {
  // Estado para guardar los datos de los inputs
  const [formData, setFormData] = useState({
    nombre: "",
    cedula: "",
    celular: "",
    mail: "",
    reserva: "",
    competicion: "libertadores", // Valor por defecto
    terminos: false,
  });

  // Función para actualizar el estado cuando un input cambia
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    console.log("Datos del formulario:", formData);
    // Aquí puedes enviar los datos a un servidor
  };

  return (
    <>
      <div>LOGOS</div>
      <div>
        <div>Ingresa tus datos y participa</div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            {/* Inputs controlados con su respectivo estado */}
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="cedula"
              placeholder="Cédula"
              value={formData.cedula}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="celular"
              placeholder="Celular"
              value={formData.celular}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="mail"
              placeholder="Mail"
              value={formData.mail}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="reserva"
              placeholder="Número de reserva internacional"
              value={formData.reserva}
              onChange={handleChange}
              required
            />

            <fieldset>
              <legend>
                Escoge las entradas por las que quieres participar:
              </legend>
              <div>
                <input
                  type="radio"
                  id="libertadores"
                  name="competicion"
                  value="libertadores"
                  checked={formData.competicion === "libertadores"}
                  onChange={handleChange}
                />
                <label htmlFor="libertadores">Copa Libertadores</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="sudamericana"
                  name="competicion"
                  value="sudamericana"
                  checked={formData.competicion === "sudamericana"}
                  onChange={handleChange}
                />
                <label htmlFor="sudamericana">Copa Sudamericana</label>
              </div>
            </fieldset>

            <div>
              <input
                type="checkbox"
                id="terminos"
                name="terminos"
                checked={formData.terminos}
                onChange={handleChange}
                required
              />
              <label htmlFor="terminos">Acepto términos y condiciones</label>
            </div>

            <Btn type="submit" text="Regístrate" />
          </form>
        </div>
        <div>
          ¡Con La Trivia avianca tu sueño de vivir una final de Copa puede ser
          una realidad!
        </div>
      </div>
    </>
  );
}

export default FormView;
