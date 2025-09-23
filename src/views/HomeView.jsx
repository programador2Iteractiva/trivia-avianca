import React from "react";
import Btn from "../components/btn";

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
    </div>
  );
}

export default HomeView;
