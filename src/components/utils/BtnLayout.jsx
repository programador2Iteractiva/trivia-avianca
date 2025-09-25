import { useNavigate } from "react-router-dom";

// Cambié el nombre de la prop "navigate" a "to" para que sea más claro y estándar.
function BtnLayout({ text, to, onClick, type }) {

  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }

    if (to) {
      navigate(to);
    }
  };

  return (
    <button type={type} className="btn-principal" onClick={handleClick}>
      {text}
    </button>
  );
}

export default BtnLayout;