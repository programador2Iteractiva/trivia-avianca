import { Outlet, useLocation } from "react-router-dom";

// Componentes
import LogosAvianca from "../components/LogosAvianca";
import Footer from "../components/utils/Footer";

// Activos
import LogoConcurso from "../assets/mobile/LogoConcursoFondo.png";
import IconoAvion from "../assets/icons/IconoAvion.png";
import IconoCirculo from "../assets/icons/IconoCirculo.png";

// --- Sub-componentes para mayor claridad ---

const MobileHeader = () => (
  <header className="w-full md:hidden">
    <LogosAvianca white={false} className="w-1/3" />
  </header>
);

const BrandingPanel = ({ pathname }) => (
  <div className="relative w-full grid grid-cols-2 md:flex md:flex-col md:gap-10">
    <div className="w-full flex md:flex-col md:items-center md:justify-center">
      <div className="w-full hidden md:flex justify-center items-center my-10">
        <LogosAvianca white={false} />
      </div>
      <img src={LogoConcurso} alt="Logo del concurso" className="w-7/8 md:w-1/2" />
    </div>

    <div className="flex justify-center items-center">
      {pathname === '/reglas' && (
        <div className="text-start text-xs text-gray-700 leading-4 md:text-center md:text-2xl md:leading-7">
          Tu sueño de vivir una <br className="md:hidden" />
          final de Copa <br className="hidden md:block" /> ahora <br className="md:hidden" />
          puede ser una realidad.
        </div>
      )}
    </div>

    <img src={IconoAvion} alt="Icono de avión" className="w-1/8 absolute right-0 -top-5 md:hidden" />
  </div>
);

const ContentPanel = () => (
  <div className="p-4 relative md:flex md:flex-col md:justify-center">
    <Outlet />
    <img src={IconoCirculo} alt="Icono de círculo" className="w-1/6 absolute -left-5 -bottom-10 scale-x-[-1] rotate-60 md:hidden" />
  </div>
);

// --- Componente Principal ---

function RulesView() {
  const location = useLocation();

  return (
    <div className="rules-view view">
      <MobileHeader />

      <main className="w-full flex-1 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md space-y-4 flex flex-col justify-center md:grid md:grid-cols-2 md:max-w-none">
          <BrandingPanel pathname={location.pathname} />
          <ContentPanel />
        </div>
      </main>

      <Footer white={false} />
    </div>
  );
}

export default RulesView;