

import Casa from "../componentes/casa";
import Menu from "../componentes/menu";
import "../style/usuario.css";

function Pgecasa() {
  return (
    <div className="divusuario">
      <div>
        <Menu />
      </div>
      <div >
        <Casa/>
      </div>
      

    </div>
  );
}

export default Pgecasa;
