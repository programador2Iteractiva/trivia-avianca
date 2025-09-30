import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import BtnLayout from "../components/utils/BtnLayout";
import LogosAvianca from "../components/LogosAvianca";
import Footer from "../components/utils/Footer";
import LogoConcurso from "../assets/mobile/LogoConcursoFondo.png";
import IconoAvion from "../assets/icons/IconoAvion.png";
import IconoCirculo from "../assets/icons/IconoCirculo.png";
import { ApiContext } from "../context/ApiContext";

function FormView() {
  const { handleRegister, loading } = useContext(ApiContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    cedula: "",
    celular: "",
    mail: "",
    reserva: "",
    competicion: "libertadores",
    terminos: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiData = {
      name: formData.nombre,
      dni: formData.cedula,
      phone: formData.celular,
      email: formData.mail,
      reservation: formData.reserva,
      preference: formData.competicion,
    };

    try {
      await handleRegister(apiData);
      navigate("/reglas");
    } catch (apiError) {
      console.error("Error en el registro:", apiError);
    }
  };

  return (
    <div className="form-view view relative">
      <div className="hidden md:block absolute">
        <img src={LogoConcurso} alt="" className="w-1/3 m-5" />
      </div>

      <header className="flex w-full md:justify-center md:items-center md:py-12">
        <LogosAvianca white={false} className="w-1/3 md:w-1/5" />
      </header>

      <main className="w-full flex-1 flex flex-col items-center justify-center p-4 ">
        <div className="w-full max-w-md space-y-4 flex flex-col justify-center md:grid md:grid-cols-3 md:max-w-none">
          {/* Cabecera */}
          <div className="relative w-full grid grid-cols-2 justify-center md:grid-cols-1 md:p-2">
            <div className="md:hidden">
              <img src={LogoConcurso} alt="" className="w-7/8" />
            </div>

            <div className="flex justify-center items-center">
              <div className="text-start text-2xl font-bold text-gray-700 leading-7 md:leading-14 md:text-6xl">
                Ingresa <br /> tus datos <br /> y participa
              </div>
            </div>

            <img
              src={IconoAvion}
              alt=""
              className="w-1/6 absolute right-0  md:left-20 md:bottom-0 md:scale-y-[-1] md:rotate-90"
            />
          </div>

          {/* Formulario */}
          <div className="p-5 md:flex md:justify-center">
            <div className="form-container p-5 ">
              <form
                onSubmit={handleSubmit}
                className="space-y-4 relative text-sm md:text-lg"
              >
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
                  <label
                    htmlFor="terminos"
                    className="text-gray-700 cursor-pointer"
                  >
                    Acepto términos y condiciones
                  </label>
                </div>

                <div className="absolute flex justify-center items-center w-full">
                  <BtnLayout
                    type="submit"
                    text={loading ? "Registrando..." : "Regístrate"}
                    disabled={loading}
                  />
                </div>
              </form>
            </div>
          </div>

          {/* base */}
          <div className="relative text-center text-sm text-gray-600 md:flex md:flex-col md:justify-center md:text-start md:text-2xl">
            <p>
              ¡Con <strong>La Trivia avianca</strong>
              <br className="hidden md:block" />
              tu sueño de vivir
              <br className="md:hidden" />
              una final de
              <br className="hidden md:block" />
              Copa puede ser una realidad!
            </p>
            <img
              src={IconoCirculo}
              alt=""
              className="w-1/6 absolute left-0 md:hidden"
            />
          </div>
        </div>
      </main>

      <Footer white={false} />
    </div>
  );
}

export default FormView;
