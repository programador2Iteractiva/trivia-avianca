import React from "react";
import Alert from "../components/utils/Alert";
import BtnLayout from "../components/utils/BtnLayout";

function HomeView() {
  return (
    <div className="home-view">
      <div>
        Estás por vivir la emoción de ganar entradas de la gran final de
        <strong> Copa Libertadores</strong> o la <strong>Copa Sudamericana</strong>
      </div>
      <div>
        <BtnLayout text="Ingresar" />
      </div>

      <Alert />
    </div>
  );
}

export default HomeView;
