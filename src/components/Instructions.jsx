import BtnLayout from "./utils/BtnLayout";
import Number from "./utils/Number";
import { useContext } from "react"; // 1. Importar useContext
import { GameContext } from "../context/GameContext"; // 2. Importar GameContext

function Instructions() {
  const { startGame } = useContext(GameContext); // 3. Obtener startGame del contexto

  return (
    <div className="instructions">
      {/* Titulo */}
      <div>
        <h1 className="text-primary font-bold text-3xl">Instrucciones</h1>
      </div>
      {/* Lista */}
      <div>
        <div className="instructions-list">
          <div className="instructions-item">
            <div>
              <Number number="1" />
            </div>
            <p>
              Una vez inicies el juego, tendrás 90 segundos para responder la
              mayor cantidad de preguntas que puedas.
            </p>
          </div>
          <div className="instructions-item">
            <div>
              <Number number="2" />
            </div>
            <p>
              Las preguntas aparecerán una a una de forma aleatoria, y deberás
              seleccionar la respuesta que creas correcta.
            </p>
          </div>
          <div className="instructions-item">
            <div>
              <Number number="3" />
            </div>
            <p>
              Una vez respondas, aparecerá la siguiente pregunta
              automáticamente. No hay vuelta atrás.
            </p>
          </div>
          <div className="instructions-item">
            <div>
              <Number number="4" />
            </div>
            <p>
              No hay penalización por errores. En tu puntaje final solo se
              sumarán los puntos de las respuestas correctas.
            </p>
          </div>
        </div>
      </div>
      {/* Boton */}
      <div className="flex flex-col gap-3">
        <p className="text-primary">¿Listo? ¡Mucha suerte!</p>
        <div>
          {/* 4. Llamar a startGame en el onClick del botón */}
          <BtnLayout text="Jugar" to="/preguntas" onClick={startGame} />
        </div>
      </div>
    </div>
  );
}

export default Instructions;