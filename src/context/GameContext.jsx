import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import questionsData from "../data/questions.json";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(190);
  const [gameStarted, setGameStarted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setQuestions(questionsData);
    console.log(questionsData.length)
  }, []);

  useEffect(() => {
    let timer;
    if (gameStarted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      endGame();
    }
    return () => clearInterval(timer);
  }, [gameStarted, timeLeft]);

  const startGame = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setTimeLeft(190);
    setGameStarted(true);
  };

  const answerQuestion = (option, answer) => {
    // Log para depuración
    console.log("Opción seleccionada:", option);
    console.log("Respuesta correcta:", answer);
    
    const isCorrect = option === answer;
    
    console.log("¿Es correcta?:", isCorrect);

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      endGame();
    }
  };

  const endGame = () => {
    setGameStarted(false);
    navigate("/final");
  };
  
  // Log para ver cambios en el puntaje
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