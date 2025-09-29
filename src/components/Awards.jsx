import BtnLayout from "./utils/BtnLayout";
import IconoAvionMini from "../assets/icons/IconoAvionMini.png";
import IconoCampanaMini from "../assets/icons/IconoCampanaMini.png";
import IconoTicketMini from "../assets/icons/IconoTicketMini.png";
import IconoTransporteMini from "../assets/icons/IconoTransporteMini.png";
import IconoAvion from "../assets/icons/IconoAvion.png";

function Awards() {
  return (
    <div className="awards relative">
      {/* Titulo */}
      <div>
        <h1 className="text-primary font-bold text-xl">
          Entrarás <br className="sm:hidden" /> a participar por:
        </h1>
      </div>
      {/* Lista */}
      <div>
        <div className="awards-list">
          <div className="awards-item">
            <div>
              <img src={IconoTicketMini} alt="IconoAvionMini" />
            </div>
            <p>
              Entradas dobles para la final CONMEBOL{" "}
              <br className="hidden md:block" />
              Libertadores y CONMEBOL Sudamericana
            </p>
          </div>
          <div className="awards-item">
            <div>
              <img src={IconoAvionMini} alt="IconoAvionMini" />
            </div>
            <p>
              Tiquetes ida y regreso a las ciudades donde{" "}
              <br className="hidden md:block" />
              se jugarán las finales.
            </p>
          </div>
          <div className="awards-item">
            <div>
              <img src={IconoCampanaMini} alt="IconoAvionMini" />
            </div>
            <p>Hospedaje y alimentación para 2 noches y 3 días.</p>
          </div>
          <div className="awards-item">
            <div>
              <img src={IconoTransporteMini} alt="IconoAvionMini" />
            </div>
            <p>
              Transporte hotel-aeropuerto (llegada y salida) y{" "}
              <br className="hidden md:block" /> transportes el día de los
              partidos hotel-estadio.
            </p>
          </div>
        </div>
      </div>
      {/* Boton */}
      <div className="flex flex-col gap-3">
        <p className="text-primary">
          Lee las instrucciones y prepárate para jugar.
        </p>
        <div>
          <BtnLayout text="Empezar" to="/reglas/instrucciones" />
        </div>
      </div>

      <img
        src={IconoAvion}
        alt="Icono de avión"
        className="hidden md:block md:w-1/6 absolute top-10 right-0"
      />
    </div>
  );
}

export default Awards;
