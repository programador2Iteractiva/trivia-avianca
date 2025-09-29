import React, { useContext } from "react"; // Ya no se necesita useEffect aquí
import Question from "../components/QuestionComponents/Question";
import Option from "../components/QuestionComponents/Option";
import LogosAvianca from "../components/LogosAvianca";
import LogoConcurso from "../assets/mobile/LogoConcursoFondo.png";
import Footer from "../components/utils/Footer";
import IconoAvion from "../assets/icons/IconoAvion.png";
import IconoCirculo from "../assets/icons/IconoCirculo.png";
import Timer from "../components/QuestionComponents/Timer";
import { GameContext } from "../context/GameContext";

function QuestionView() {
  const { questions, currentQuestionIndex, answerQuestion, gameStarted } =
    useContext(GameContext);

  // 1. Eliminamos el useEffect que llamaba a startGame

  const currentQuestion = questions[currentQuestionIndex];

  // 2. (Opcional pero recomendado) Proteger la ruta si el juego no ha comenzado
  if (!gameStarted) {
    return (
      <div className="view">
        <p className="m-auto text-center">
          Por favor, inicia el juego desde las instrucciones.
        </p>
      </div>
    );
  }

  if (!currentQuestion) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="questions-view view">
      <header className="w-full  md:hidden">
        <LogosAvianca white={false} className="w-1/3" />
      </header>

      <main className="w-full flex-1 flex flex-col items-center justify-center p-4 overflow-y-auto">
        <div className="flex w-full justify-center md:hidden">
          <img src={LogoConcurso} alt="" className="w-2/5" />
        </div>

        <div className="my-10 text-center">
          <div className="w-full flex justify-center items-center py-5">
            <Timer />
          </div>
          <div>Elige la respuesta correcta:</div>
          <div className="w-full flex justify-center items-center ">
            <div className="flex flex-col justify-center items-center w-full md:max-w-1/2 relative">
              <img
                src={IconoCirculo}
                alt="Icono de círculo"
                className="w-1/6 rotate-[125deg] absolute left-0 -top-10 md:-left-10 "
              />

              <Question question={currentQuestion.question} />

              <div className="grid grid-cols-2 gap-5 w-full">
                {currentQuestion.options.map((option, index) => (
                  <div
                    className="flex justify-center items-center"
                    key={index}
                    onClick={() => {
                      answerQuestion(option, currentQuestion.answer);
                    }}
                  >
                    <Option
                      text={option}
                      letter={String.fromCharCode(65 + index)}
                    />
                  </div>
                ))}
              </div>

              <img
                src={IconoAvion}
                alt="Icono de avión"
                className="w-1/8 rotate-90 absolute right-0 -bottom-10 md:-right-10"
              />
            </div>
          </div>
          <header className="w-full hidden md:flex justify-center mt-10">
            <LogosAvianca white={false} className="w-1/3" />
          </header>
        </div>

      </main>

      <Footer white={false} />
    </div>
  );
}

export default QuestionView;
