function Btn({ text, type = "button" }) {
  return (
    <button type={type} className="btn-principal">
      {text}
    </button>
  );
}

export default Btn;
