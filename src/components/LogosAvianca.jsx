import LogosLibySudasBlanco from "../assets/LogosLibySudasBlanco.png"
import LogosLibySudasRojo from "../assets/LogosLibySudasRojo.png"

function LogosAvianca({ className, white = true }) {

  const color = white ? LogosLibySudasBlanco : LogosLibySudasRojo

  return (
    <img src={color} alt="LogosLibySudas.png" className={className} />
  )
}

export default LogosAvianca