import React from 'react';
import LogoStarAllianceBlanco from "../../assets/LogoStarAllianceBlanco.png";
import LogoStarAllianceNegro from "../../assets/LogoStarAllianceNegro.png";
import LogoVigilidoSuperTransporteBlanco from "../../assets/LogoVigilidoSuperTransporteBlanco.png";
import LogoVigilidoSuperTransporteNegro from "../../assets/LogoVigilidoSuperTransporteNegro.png";

function Footer({ white = true }) {
    const logoSuperTransporte = white
        ? LogoVigilidoSuperTransporteBlanco
        : LogoVigilidoSuperTransporteNegro;

    const logoStarAlliance = white
        ? LogoStarAllianceBlanco
        : LogoStarAllianceNegro;

    return (
        <footer className="w-full p-4 md:px-10 md:pb-14">
            <div className="flex items-center justify-between">
                <img
                    src={logoSuperTransporte}
                    alt="Logo de Vigilado SuperTransporte"
                    className="h-3 md:h-8 w-auto"
                    loading="lazy"
                />
                <img
                    src={logoStarAlliance}
                    alt="Logo de Star Alliance"
                    className="h-3 md:h-8 w-auto"
                    loading="lazy"
                />
            </div>
        </footer>
    );
}

export default Footer;