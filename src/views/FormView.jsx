import { useState } from "react";
import BtnLayout from "../components/utils/BtnLayout";
import LogosAvianca from "../components/LogosAvianca";
import Footer from "../components/utils/Footer";
import LogoConcurso from "../assets/LogoConcurso.png"
import IconoAvion from "../assets/icons/IconoAvion.png"
import IconoCirculo from "../assets/icons/IconoCirculo.png"
import { useNavigate } from "react-router-dom";

function FormView() {
  const [formData, setFormData] = useState({
    nombre: "",
    cedula: "",
    celular: "",
    mail: "",
    reserva: "",
    competicion: "libertadores",
    terminos: false,
  });
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
    navigate('/reglas');
  };

  return (
    <div className="flex min-h-screen flex-col p-5">
      <header className="w-full">
        <LogosAvianca white={false} className="w-1/3" />
      </header>

      <main className="w-full flex-1 flex flex-col items-center justify-center p-4 overflow-y-auto">
        <div className="w-full max-w-md space-y-4 flex flex-col justify-center">
          <div className="relative w-full  grid grid-cols-2 ">
            <div>
              <img src={LogoConcurso} alt="" className="w-7/8" />
            </div>
            <div className="flex justify-center items-center">
              <div className="text-start text-2xl font-bold text-gray-700 leading-7">
                Ingresa <br /> tus datos  <br /> y participa
              </div>
            </div>
            <img src={IconoAvion} alt="" className="w-1/6 absolute right-0" />
          </div>

          <div className="p-5">
            <div className="form-container p-5 ">
              <form onSubmit={handleSubmit} className="space-y-4 relative text-sm">
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

                <fieldset className="space-y-2">
                  <legend className="font-semibold leading-5">
                    Escoge las entradas por las que quieres participar:
                  </legend>
                  <div className="flex w-full justify-between">
                    <div className="flex gap-2">
                      <input
                        type="radio"
                        id="libertadores"
                        name="competicion"
                        value="libertadores"
                        checked={formData.competicion === "libertadores"}
                        onChange={handleChange}
                      />
                      <label htmlFor="libertadores">
                        Copa <br /> Libertadores
                      </label>
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="radio"
                        id="sudamericana"
                        name="competicion"
                        value="sudamericana"
                        checked={formData.competicion === "sudamericana"}
                        onChange={handleChange}
                      />
                      <label htmlFor="sudamericana">
                        Copa <br /> Sudamericana
                      </label>
                    </div>
                  </div>
                </fieldset>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="terminos"
                    name="terminos"
                    checked={formData.terminos}
                    onChange={handleChange}
                    required
                    className="accent-secondary h-5 w-5"
                  />
                  <label htmlFor="terminos" className="text-gray-700 cursor-pointer">
                    Acepto términos y condiciones
                  </label>
                </div>

                <div className="absolute flex justify-center items-center w-full">
                  <BtnLayout type="submit" text="Regístrate" />
                </div>
              </form>
            </div>
          </div>

          <div className="relative text-center text-sm text-gray-600">
            ¡Con <strong>La Trivia avianca</strong> tu sueño de vivir una final de Copa puede ser
            una realidad!
            <img src={IconoCirculo} alt="" className="w-1/6 absolute left-0" />

          </div>
        </div>
      </main>

      <footer className="w-full bg-white">
        <Footer white={false} />
      </footer>
    </div>
  );
}

export default FormView;
