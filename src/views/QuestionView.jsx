import React from "react";
import Question from "../components/QuestionComponents/Question";
import Option from "../components/QuestionComponents/Option";

// 1. Define tus opciones en un array de datos
const optionsData = [
  { letter: "A", text: "Deportivo Cali" },
  { letter: "B", text: "América de Cali" },
  { letter: "C", text: "Millonarios FC" },
  { letter: "D", text: "Atlético Nacional" },
];

function QuestionView() {
  return (
    <div>
      <div>Timer</div>
      <div>Elige la respuesta correcta:</div>
      <div className="flex flex-col justify-center items-center w-full max-w-1/2">
        <div>
          <Question />
        </div>

        <div className="grid grid-cols-2 gap-5">
          {optionsData.map((option) => (
            <Option
              key={option.letter}
              text={option.text}
              letter={option.letter}
            />
          ))}
        </div>
      </div>

      <div>Logos avianca</div>
    </div>
  );
}

export default QuestionView;
