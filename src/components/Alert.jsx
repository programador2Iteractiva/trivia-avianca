import React from "react";
import { IoCloseOutline } from "react-icons/io5";

function Alert() {
  return (
    <div className="relative shadow-lg rounded-2xl p-2 max-w-96 alert">
      {/* El botón "X" se posiciona de forma absoluta DENTRO del cuadro */}
      <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-white flex items-center justify-center">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white text-xl">
          <IoCloseOutline className="w-9 h-9"/>
        </div>
      </div>

      {/* El resto de tu contenido sigue igual */}
      <div className="alert-body">
        <div className="border-b-3 border-primary px-5 py-2 text-primary font-bold text-3xl">
          ¡Ups!
        </div>
        <div className="p-3 font-semibold text-lg text-[#414141]">
          Ocurrió un error, por favor digita <br /> de nuevo tu código de
          reserva.
        </div>
      </div>
    </div>
  );
}

export default Alert;
