import BtnLayout from "./utils/BtnLayout";
import IconoAvionMini from "../assets/icons/IconoAvionMini.png"
import IconoCampanaMini from "../assets/icons/IconoCampanaMini.png"
import IconoTicketMini from "../assets/icons/IconoTicketMini.png"
import IconoTransporteMini from "../assets/icons/IconoTransporteMini.png"


function Awards() {
  return (
    <div className="awards">
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
              Entradas dobles a las finales de la Copa <br className="hidden md:block" /> Libertadores o Copa
              Sudamericana.
            </p>
          </div>
          <div className="awards-item">
            <div>
              <img src={IconoAvionMini} alt="IconoAvionMini" />
            </div>
            <p>
              Paquete de tiquetes ida y regreso a las ciudades <br className="hidden md:block" /> donde se jugarán
              las finales.
            </p>
          </div>
          <div className="awards-item">
            <div>
              <img src={IconoCampanaMini} alt="IconoAvionMini" />
            </div>
            <p>Hospedaje por para 2 noches y 3 días.</p>
          </div>
          <div className="awards-item">
            <div>
              <img src={IconoTransporteMini} alt="IconoAvionMini" />
            </div>
            <p>
              Transporte hotel-aeropuerto (llegada y salida) y <br className="hidden md:block" /> transportes el
              día de los partidos hotel-estadio.
            </p>
          </div>
        </div>
      </div>
      {/* Boton */}
      <div className="flex flex-col gap-3">
        <p className="text-primary">Lee las instrucciones y prepárate para jugar.</p>
        <div>
          <BtnLayout text="Empezar" to="/reglas/instrucciones" />
        </div>
      </div>
    </div>
  );
}

export default Awards;
