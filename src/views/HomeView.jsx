import BtnLayout from "../components/utils/BtnLayout";
import LogoBienvenidos from "../assets/LogoBienvenidos.png"
import Footer from "../components/utils/Footer";
import LogosAvianca from "../components/LogosAvianca";

function HomeView() {
  return (
    <div className="home-view view">


      <main className="w-full flex-1 flex flex-col items-center justify-between p-4 md:flex-row md:justify-around">

        <div className="flex flex-col justify-center items-center gap-5">
          <LogosAvianca className="w-1/2 md:w-2/3" />
          <img src={LogoBienvenidos} alt="Logo_Bienvenidos.png" className="w-1/2 md:w-full" />
        </div>

        <div className="flex flex-col justify-center text-center text-lg md:text-4xl text-white gap-5 md:max-w-1/4 md:text-start">
          <div >
            Estás por vivir la emoción de <br className="sm:hidden" />
            ganar entradas de la gran final <br className="sm:hidden" />
            de <strong> Copa Libertadores</strong> <br className="sm:hidden" /> 
            o la <strong>Copa Sudamericana</strong>
          </div>
          <div>
            <BtnLayout text="Ingresar" to="/formulario" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default HomeView;
