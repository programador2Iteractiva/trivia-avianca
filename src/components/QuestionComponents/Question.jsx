import React from "react";

function Question({ question }) {
  return (
    <div className="question">
      <p className="text-primary text-center text-sm font-semibold">
        {question}
      </p>
    </div>
  );
}

export default Question;