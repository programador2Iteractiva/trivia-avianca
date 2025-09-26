import { IoCloseOutline } from "react-icons/io5";

function Alert({ message, onClose }) {
  if (!message) {
    return null;
  }

  return (
    <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative shadow-lg rounded-2xl p-2 max-w-96 bg-white">
        {/* El botón "X" se posiciona de forma absoluta DENTRO del cuadro */}
        <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer" onClick={onClose}>
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white text-xl">
            <IoCloseOutline className="w-9 h-9"/>
          </div>
        </div>

        {/* El resto de tu contenido sigue igual */}
        <div className="alert">
          <div className="alert-header">
            ¡Ups!
          </div>
          <div className="alert-body">
            {message}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alert;