import BtnLayout from "../components/utils/BtnLayout";
import Footer from "../components/utils/Footer";
import LogosAvianca from "../components/LogosAvianca";
import LogoBienvenidos from "../assets/LogoBienvenidos.png";
import IconoAvionMini from "../assets/icons/IconoAvionBlanco.png";
import IconoCampanaMini from "../assets/icons/IconoCampanaBlanco.png";
import IconoTicketMini from "../assets/icons/IconoTicketBlanco.png";
import LogoPeople from "../assets/icons/LogoPeople.png";
import IconoAvion from "../assets/icons/IconoAvion.png";

// --- Sub-componentes para mayor claridad ---

const WelcomeLogos = () => (
  <div className="flex flex-col justify-center items-center gap-5">
    <LogosAvianca className="w-1/2 md:w-2/3" />
    <img
      src={LogoBienvenidos}
      alt="Logo de Bienvenidos al concurso"
      className="w-1/3 md:w-4/5"
    />
  </div>
);

const WelcomeCallToAction = () => (
  <div className="flex flex-col justify-center text-center text-lg md:text-3xl text-white gap-5 md:max-w-1/4 md:text-start">
    <div className="md:leading-12 flex relative justify-center w-full">
      <p>
        Estas por vivir la emoción de volar<br className="sm:hidden" />
        a las finales de las competiciones <br className="sm:hidden" />
        <strong>CONMEBOL Libertadores</strong> o <br className="sm:hidden" />
        <strong>CONMEBOL Sudamericana.</strong> <br />
        ¡Tu eliges!
      </p>
      <img
        src={IconoAvion}
        alt="Icono de avión"
        className="w-1/4 md:w-1/4 absolute -top-10 right-0 md:-right-10"
      />
    </div>
    <div>
      <BtnLayout text="Participa aquí" to="/formulario" />
    </div>
    <div className="text-sm md:text-lg" >
      <div className="flex gap-5">
        <img className="max-w-3 max-h-3 md:max-w-5 md:max-h-5" src={LogoPeople} alt="LogoPeople" />
        <div>Incluye el premio para 2 personas:</div>
      </div>
      <div className="flex gap-5">
        <img
          className="max-w-3 max-h-3 md:max-w-5 md:max-h-5"
          src={IconoAvionMini}
          alt="IconoAvionMini"
        />
        <div>Vuelos</div>
      </div>
      <div className="flex gap-5">
        <img
          className="max-w-3 max-h-3 md:max-w-5 md:max-h-5"
          src={IconoCampanaMini}
          alt="IconoCampanaMini"
        />
        <div>Hospedaje</div>
      </div>
      <div className="flex gap-5">
        <img
          className="max-w-3 max-h-3 md:max-w-5 md:max-h-5"
          src={IconoTicketMini}
          alt="IconoTicketMini"
        />
        <div>Entradas al las finales.</div>
      </div>
    </div>
  </div>
);

// --- Componente Principal ---

function HomeView() {
  return (
    <div className="home-view view">
      <main className="w-full flex-1 flex flex-col items-center justify-between p-4 md:flex-row md:justify-around">
        <WelcomeLogos />
        <WelcomeCallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default HomeView;
