import React from "react";
import Btn from "../components/utils/Btn";
import Alert from "../components/utils/Alert";

function HomeView() {
  return (
    <div className="home-view">
      <div>
        Estás por vivir la emoción de ganar entradas de la gran final de
        <strong> Copa Libertadores</strong> o la <strong>Copa Sudamericana</strong>
      </div>
      <div>
        <Btn text="Ingresar" />
      </div>

      <Alert />
    </div>
  );
}

export default HomeView;
