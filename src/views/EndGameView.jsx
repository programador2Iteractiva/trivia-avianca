import Option from "../components/QuestionComponents/Option";
import LogosAvianca from "../components/LogosAvianca";
import LogoConcurso from "../assets/mobile/LogoConcursoFondo.png"
import Footer from "../components/utils/Footer";
import IconoAvion from "../assets/icons/IconoAvion.png"
import IconoCirculo from "../assets/icons/IconoCirculo.png"
import Timer from "../components/QuestionComponents/Timer";

function EndGameView() {
  return (
    <div className="end-view view">
      <header className="w-full">
        <LogosAvianca white={false} className="w-1/3" />
      </header>

      <main className="w-full flex-1 flex flex-col items-center justify-center p-4 overflow-y-auto">
        <div className="flex w-full justify-center">
          <img src={LogoConcurso} alt="" className="w-2/5" />
        </div>

        <div className="w-full flex items-center justify-end">
          <img src={IconoCirculo} alt="Icono de círculo" className="w-1/6 scale-y-[-1] rotate-45" />
        </div>

        <div className="my-10 text-center">

          <p className="text-2xl font-bold">Gracias por participar!</p>

          <div className="flex flex-col text-primary p-5 gap-2">
            <div>Respondiste correctamente</div>
            <div className="flex justify-center items-center border-2 border-primary w-full rounded-full pb-2">
              <p className="text-2xl font-bold">x preguntas</p>
            </div>
          </div>

          <div className="text-xs">
            <div>Te deseamos suerte, nos vemos en la final de la Copa.</div>
            <div>Conoce si eres uno de los 6 ganadores el x de xxxxxx de 2025.</div>
          </div>

        </div>

        <div className="w-full flex items-center ">
          <img src={IconoAvion} alt="Icono de avión" className="w-1/8 rotate-180 " />
        </div>

      </main>

      <Footer white={false} />
    </div>
  )
}

export default EndGameView