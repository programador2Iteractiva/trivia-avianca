import LogosAvianca from "../components/LogosAvianca";
import LogoConcurso from "../assets/mobile/LogoConcursoFondo.png";
import Footer from "../components/utils/Footer";
import IconoAvion from "../assets/icons/IconoAvion.png";
import IconoCirculo from "../assets/icons/IconoCirculo.png";
import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import BtnLayout from "../components/utils/BtnLayout";

function EndGameView() {
  const { score } = useContext(GameContext);

  return (
    <div className="end-view view">
      <header className="w-full md:hidden">
        <LogosAvianca white={false} className="w-1/3" />
      </header>

      <main className="w-full flex-1 flex flex-col items-center justify-center p-4">
        <div className="flex w-full justify-center">
          <img src={LogoConcurso} alt="" className="w-2/5 md:w-1/8" />
        </div>

        <div className="my-10 text-center md:m-0 md:max-w-2/5">
          <div className="w-full flex items-center ">
            <img
              src={IconoAvion}
              alt="Icono de avión"
              className="w-1/8 md:w-1/6  -rotate-90 "
            />
          </div>
          <p className="text-2xl font-bold md:text-4xl">
            Gracias por participar!
          </p>

          <div className="flex flex-col text-primary p-5 gap-2">
            <div>Respondiste correctamente</div>
            <div className="flex justify-center items-center border-2 border-primary w-full rounded-full pb-2">
              <p className="text-2xl md:text-3xl font-bold">
                {score} preguntas
              </p>
            </div>
          </div>

          <div className="text-xs md:text-xl font-semibold">
            <div>Te deseamos suerte, nos vemos en la final</div>
            <div>de competición CONMEBOL. Conoce si eres</div>
            <div>uno de los 6 ganadores el 21 de Octubre de 2025.</div>
          </div>

          <div className="p-5">
            <BtnLayout type="submit" text="Volver al inicio" to="/" />
          </div>
          <div className="flex justify-center ">
            <LogosAvianca white={false} className="w-2/5" />
          </div>
          <div className="w-full flex items-center justify-end  ">
            <img
              src={IconoCirculo}
              alt="Icono de círculo"
              className="w-2/8 md:w-2/8 -rotate-45 "
            />
          </div>
        </div>
      </main>

      <Footer white={false} />
    </div>
  );
}

export default EndGameView;
