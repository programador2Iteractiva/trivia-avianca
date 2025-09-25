import BtnLayout from "../components/utils/BtnLayout";
import LogoBienvenidos from "../assets/LogoBienvenidos.png"
import Footer from "../components/utils/Footer";
import LogosAvianca from "../components/LogosAvianca";

function HomeView() {
  return (
    <div className="home-view view p-5">
      <div className="grid grid-flow-col grid-rows-3 p-2">
        <div className="flex flex-col justify-center items-center gap-5">
          <LogosAvianca className="w-1/2" />
          <img src={LogoBienvenidos} alt="Logo_Bienvenidos.png" className="w-1/2" />
        </div>

        <div></div>

        <div className="flex flex-col justify-center text-center text-lg  text-white gap-5 ">
          <div>
            Estás por vivir la emoción de ganar entradas de la gran final de
            <strong> Copa Libertadores</strong> o la <strong>Copa Sudamericana</strong>
          </div>
          <div>
            <BtnLayout text="Ingresar" to="/formulario" />
          </div>
        </div>

      </div>
      
      <Footer />
    </div>
  );
}

export default HomeView;
