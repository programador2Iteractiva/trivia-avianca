function Option({ text, letter }) {
  return (
    <div className="option ">
      <p className="flex justify-center text-xl text-primary font-extrabold uppercase w-2/8">
        {letter}
      </p>
      <p className="w-full text-gray-avianca text-center text-sm font-semibold">{text}</p>
    </div>
  );
}

export default Option;
