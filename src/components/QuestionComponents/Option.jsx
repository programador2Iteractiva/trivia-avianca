import React from "react";

function Option({ text, letter }) {
  return (
    <div className="option bg-gradient-to-l from-primary to-secondary w-full max-w-3/5 lg:max-w-5/6 p-1 rounded-full">
      <div className="flex items-center w-full bg-white rounded-full">
        <p className="text-3xl text-primary font-extrabold py-2 px-5">
          {letter}
        </p>
        <p className="w-full text-gray-avianca text-center text-2xl uppercase">{text}</p>
      </div>
    </div>
  );
}

export default Option;
