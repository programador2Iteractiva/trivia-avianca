import { Outlet, useLocation } from "react-router-dom";
import LogosAvianca from "../components/LogosAvianca";
import Footer from "../components/utils/Footer";
import LogoConcurso from "../assets/LogoConcurso.png"
import IconoAvion from "../assets/icons/IconoAvion.png"
import IconoCirculo from "../assets/icons/IconoCirculo.png"

function RulesView() {
  // 1. Obtenemos la información de la ubicación (ruta) actual
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col p-5">
      <header className="w-full">
        <LogosAvianca white={false} className="w-1/3" />
      </header>

      <main className="w-full flex-1 flex flex-col items-center justify-center p-4 overflow-y-auto">
        <div className="w-full max-w-md space-y-4 flex flex-col justify-center">
          <div className="relative w-full  grid grid-cols-2 ">
            <div>
              <img src={LogoConcurso} alt="Logo del concurso" className="w-7/8" />
            </div>
            <div className="flex justify-center items-center">
              
              {/* 2. Usamos renderizado condicional con el pathname */}
              {location.pathname === '/reglas' && (
                <div className="text-start text-xs text-gray-700 leading-4">
                  Tu sueño de vivir una <br />
                  final de Copa ahora <br />
                  puede ser una realidad.
                </div>
              )}

            </div>
            <img src={IconoAvion} alt="Icono de avión" className="w-1/6 absolute right-0 -top-5" />
          </div>
          <div className="p-4 relative">
            <Outlet />
            <img src={IconoCirculo} alt="Icono de círculo" className="w-1/6 absolute -left-5 -bottom-10 scale-x-[-1] rotate-60" />
          </div>
        </div>
      </main>

      <footer className="w-full bg-white">
        <Footer white={false} />
      </footer>
    </div>
  );
}

export default RulesView;