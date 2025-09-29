import { createContext, useState, useEffect, useContext } from "react"; // 1. Importar useContext
import { useNavigate } from "react-router-dom";
import questionsData from "../data/questions.json";
import { ApiContext } from "./ApiContext"; // 2. Importar el ApiContext

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(90);
  const [gameStarted, setGameStarted] = useState(false);
  const [answersLog, setAnswersLog] = useState({}); // 3. Nuevo estado para registrar respuestas
  const navigate = useNavigate();

  console.log("Cantidad de preguntas: ", questions.length)
  
  const { handleSaveLog } = useContext(ApiContext); // 4. Usar el ApiContext

  useEffect(() => {
    setQuestions(questionsData);
  }, []);

  useEffect(() => {
    let timer;
    if (gameStarted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0 && gameStarted) {
      endGame();
    }
    return () => clearInterval(timer);
  }, [gameStarted, timeLeft]);

  const startGame = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setTimeLeft(90);
    setAnswersLog({}); // Reiniciar el log de respuestas
    setGameStarted(true);
  };

  const answerQuestion = (option, answer) => {
    const isCorrect = option === answer;

    // 5. Guardar la respuesta en el log
    setAnswersLog(prevLog => ({
      ...prevLog,
      [currentQuestionIndex + 1]: { selected: option, isCorrect }
    }));

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      endGame(true); // Pasar un flag para indicar que se completaron todas las preguntas
    }
  };

  // 6. Modificar endGame para que sea asíncrono y envíe los datos
  const endGame = async (completedAll = false) => {
    if (!gameStarted && !completedAll) return; // Evitar doble ejecución

    setGameStarted(false);

    const timeAnswered = 90 - timeLeft;
    
    const logData = {
      action: "ranking",
      total_questions: questions.length,
      correct_answers: score,
      time_answered: timeAnswered,
      answers_json: answersLog 
    };

    try {
      console.log("Enviando datos del juego:", logData);
      await handleSaveLog(logData);
      console.log("¡Resultados guardados exitosamente!");
    } catch (error) {
      console.error("Error al guardar los resultados del juego:", error);
      // Opcional: podrías mostrar un mensaje de error al usuario aquí
    } finally {
      // Navegar a la pantalla final independientemente de si la API falló o no
      navigate("/final");
    }
  };
  
  useEffect(() => {
    console.log("El puntaje ahora es: " + score);
  }, [score]);


  return (
    <GameContext.Provider
      value={{
        questions,
        currentQuestionIndex,
        score,
        timeLeft,
        startGame,
        answerQuestion,
        gameStarted,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};